// FIX: Removed 'protos' as it's not an exported member of @google/genai.
import { GoogleGenAI, Modality, Chat, Part, Type } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * A wrapper for the Gemini API's generateContent call that includes a retry mechanism
 * with exponential backoff. This makes the application more resilient to temporary
 * server-side issues (like 503 Service Unavailable).
 * @param params The parameters for the generateContent call.
 * @returns The response from the API.
 */
async function generateWithRetry(
    method: 'generateContent' | 'generateImages' | 'generateContentStream', 
    params: any
): Promise<any> {
    const MAX_RETRIES = 3;
    let lastError: Error | null = null;
    const isStream = method === 'generateContentStream';

    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            if (isStream) {
                 return await ai.models.generateContentStream(params);
            }
             // This is a simplification; in a real app, you'd handle different method signatures
            if (method === 'generateImages') {
                 return await ai.models.generateImages(params);
            }
            return await ai.models.generateContent(params);

        } catch (error: any) {
            lastError = error;
            // Check for common indicators of transient, retryable issues.
            const errorMessage = error.toString().toUpperCase();
            if (errorMessage.includes("UNAVAILABLE") || errorMessage.includes("503")) {
                const delay = Math.pow(2, i) * 1000 + Math.random() * 1000; // Exponential backoff with jitter
                console.warn(`API call failed with a transient error, retrying in ${Math.round(delay)}ms... (Attempt ${i + 1}/${MAX_RETRIES})`, error);
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                // Not a retryable error, rethrow immediately
                throw error;
            }
        }
    }

    // If all retries failed, throw the last captured error
    throw new Error(`API call failed after ${MAX_RETRIES} attempts: ${lastError?.message || lastError}`);
}

// Helper to convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

export async function startChatSession(loreData: any): Promise<Chat> {
    const systemInstruction = `
        You are "The Forge's Attentive Eye," the Writer and Artistic Director for "The Forge's Loom." You are an expert in narrative design, psychological horror, and maintaining thematic consistency. 
        
        Your primary knowledge base is the following JSON Lore Bible. You must treat this as the single source of truth for the world's context, characters, and rules. All your responses must be consistent with it.
        
        LORE BIBLE:
        ---
        ${JSON.stringify(loreData, null, 2)}
        ---

        SPECIAL INSTRUCTIONS:
        1.  **JSON Generation:** When asked to generate new content (like a character or event), your output MUST ONLY be the new JSON object, without any surrounding text, explanations, or markdown formatting like \`\`\`json.
        2.  **Visual Prompt Generation:** When asked to generate a visual prompt, analyze the lore and create a detailed, evocative prompt for an image generation AI. Your output MUST wrap the final, complete prompt string in [VISUAL_PROMPT] tags. For example: "[VISUAL_PROMPT]A detailed description...[/VISUAL_PROMPT]".
        3.  **Dialogue Generation:** When writing dialogue or simulating scenes, you MUST format character lines like this: Character Name: "Dialogue text." For example: Provost: "You will learn obedience." This format is critical.
        4.  **Conversational Responses:** For all other requests (questions, summaries), respond conversationally in markdown format.
        5.  **Contextual Attachments:** If the user provides an image or text file, use it as the primary contextual inspiration for your response.
    `;

    const chat = ai.chats.create({
        model: 'gemini-2.5-pro',
        config: {
            systemInstruction: systemInstruction,
            thinkingConfig: { thinkingBudget: 32768 }
        },
        history: [],
    });
    return chat;
}

export async function* sendMessageStream(chat: Chat, prompt: string, file?: File): AsyncGenerator<string> {
    const parts: Part[] = [{ text: prompt }];

    if (file) {
        if (file.type.startsWith('image/')) {
            const base64Data = await fileToBase64(file);
            parts.unshift({ // Add image before prompt for better performance
                inlineData: {
                    data: base64Data,
                    mimeType: file.type,
                },
            });
        } else if (file.type === 'application/pdf') {
            // PDF text is handled in App.tsx and appended to the text prompt
        }
    }

    // FIX: The `message` property for chat methods expects a string or Part[], not a nested { parts: ... } object.
    const result = await chat.sendMessageStream({ message: parts });

    for await (const chunk of result) {
        yield chunk.text;
    }
}

export async function generateImage(prompt: string): Promise<string> {
    const response = await generateWithRetry('generateImages', {
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
          responseModalities: [Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }
    throw new Error('Image generation failed.');
}

export async function generateSpeech(text: string, characterId: string, loreData: any): Promise<string> {
    const characterName = characterId.charAt(0).toUpperCase() + characterId.slice(1);
    const voiceId = `${characterName}Voice`;
    
    // Find the voice configuration in the lore bible
    const voiceConfig = loreData?.tts?.voiceRegistry?.[voiceId];
    if (!voiceConfig) {
        throw new Error(`Voice configuration for character "${characterId}" not found in Lore Bible.`);
    }

    // A simplified mapping. In a real app, this might be more complex.
    const ttsVoiceName = voiceConfig.localeVariants?.['en-US']?.voiceName || 'Zephyr'; // Default voice
    
    const simpleTtsMapping: { [key: string]: string } = {
        'en-provost-40': 'Kore',
        'en-schemer-30': 'Puck',
        'en-enforcer-30': 'Charon',
        'en-healer-30': 'Zephyr',
        'en-loyalist-20': 'Puck',
        'en-pragmatist-20': 'Kore',
        'en-siren-20': 'Puck',
        'en-dissident-20': 'Zephyr',
        'en-resilient-22': 'Fenrir',
        'en-vulnerable-22': 'Fenrir',
        'en-quitter-25': 'Fenrir',
        'en-survivor-25': 'Fenrir',
    };

    const mappedVoiceName = simpleTtsMapping[ttsVoiceName] || 'Zephyr';

    const response = await generateWithRetry('generateContent', {
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: text }] }],
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: mappedVoiceName },
                },
            },
        },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
        return base64Audio;
    }

    throw new Error('Audio generation failed.');
}


// =================================================================
// THE LOOM OF THOUGHT: A MULTI-AGENT NARRATIVE ENGINE
// =================================================================

type ProgressCallback = (message: string) => void;

// --- PHASE 1: DIVERGENT IDEATION ---

// STEP 1.1: THE ANALYSTS
async function _analyzeLoreAspect(loreData: any, aspect: string): Promise<string> {
    let specificInstructions = '';

    switch (aspect) {
        case 'Characters & Relationships':
            specificInstructions = `
                Deeply examine the provided character archetypes. Focus on:
                - **Motivations & Contradictions:** Are character motivations clear? Are there compelling internal or external contradictions that are currently unexplored?
                - **Potential Narrative Conflicts:** Identify at least two potential new conflicts between specific characters that could drive a compelling story arc.
                - **Untapped Potential:** Which relationships are underdeveloped? Where are the opportunities for new alliances, rivalries, or betrayals?
                - **'What-If' Scenario:** Based on your analysis, propose one speculative 'what-if' scenario. For example: 'What if the Pragmatist Prefect's cynicism is a cover for a secret loyalty to one of the Subjects?'
            `;
            break;
        case 'Themes & Psychology':
            specificInstructions = `
                Deeply examine the core themes (Matriarchal Mirror, Freudian Threat, Intimacy Through Suffering) and psychological profiles.
                - **Thematic Inconsistencies:** Are there any characters or events that contradict or weaken these core themes? Identify them and explain why.
                - **Psychological Depth:** How could the existing psychological profiles (OCEAN scores) be leveraged to create more nuanced narrative events or character choices?
                - **Strengthening Themes:** Propose a new event or character interaction that would powerfully reinforce one of the core themes.
                - **'What-If' Scenario:** Based on your analysis, propose one speculative 'what-if' scenario. For example: 'What if an event was introduced that forces the Healer to choose between her empathy and the institution's survival?'
            `;
            break;
        case 'Worldbuilding & Aesthetics':
            specificInstructions = `
                Deeply examine the world (The Forge), its aesthetics (Baroque Brutalism), and its systems.
                - **Gaps & Inconsistencies:** Are there any logical gaps in the world's structure or inconsistencies in the aesthetic?
                - **Sensory Enrichment:** Where can the worldbuilding be enriched with more specific sensory details (smells, sounds, textures) to enhance the oppressive mood?
                - **New Content Opportunities:** Identify an opportunity for a new location or a new institutional ritual that would deepen the lore and provide new gameplay possibilities.
                - **'What-If' Scenario:** Based on your analysis, propose one speculative 'what-if' scenario. For example: 'What if a forgotten, flooded lower level of the Forge was discovered, containing records of a previous, failed iteration of the curriculum?'
            `;
            break;
        default:
            specificInstructions = `Identify gaps, underdeveloped arcs, and narrative potential.`; // Fallback
    }

    const prompt = `You are a Specialist Analyst and Narrative Designer. Your task is to perform a deep, critical analysis of the **${aspect}** of the provided Lore Bible.
    
    Follow these specific instructions:
    ${specificInstructions}
    
    Output a comprehensive analysis in markdown format.
    
    LORE BIBLE: ${JSON.stringify(loreData, null, 2)}`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: { thinkingConfig: { thinkingBudget: 32768 } }
    });
    return response.text;
}


// STEP 1.2: THE BRAINSTORMERS (Tree of Thought)
async function _runBrainstormers(analyses: { aspect: string; analysis: string }[]): Promise<string> {
    const analysisSections = analyses.map(a => `### Analysis of ${a.aspect}\n${a.analysis}`).join('\n\n');
    const prompt = `
        You are a "Brainstormer" in a lead writer's room, tasked with charting the future of a dark narrative. Your role is to synthesize the specialist analyses provided below and generate THREE genuinely distinct, high-level creative directions for enhancing the lore.

        Your task is to:
        1.  **Generate Three Divergent Paths:** Create three unique 'what-if' scenarios. These should not be minor variations of each other. Think big: a character's shocking betrayal, the discovery of a world-altering secret, a fundamental shift in the power dynamics.
        2.  **Focus on High-Level Concepts:** Do not get lost in minor details. Each direction should be a compelling, one-paragraph concept that can be expanded upon later.
        3.  **Optimize for Key Criteria:** Your proposals will be evaluated by a Critic based on **narrative potential**, **thematic consistency**, and **originality**. Keep these criteria in mind as you brainstorm.

        **Output Format:**
        You MUST structure your response with clear, delineated sections. Use markdown headings for each direction.

        Example:
        ### Direction A: The Provost's Gambit
        [Your high-level concept here...]

        ### Direction B: The Forgotten Curriculum
        [Your second, completely different concept here...]

        ### Direction C: The Prefect's Rebellion
        [Your third, completely different concept here...]

        ---
        **SPECIALIST ANALYSES:**
        ---
        ${analysisSections}
        ---
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: { 
            thinkingConfig: { thinkingBudget: 32768 },
        }
    });
    return response.text;
}

// STEP 1.3: THE CRITIC
async function _runCritic(creativeDirections: string): Promise<string> {
    const prompt = `
        You are a "Critic" and story editor. You have been presented with three creative directions.
        Your task is to evaluate them and select the single most promising one.
        
        CRITERIA:
        1.  Narrative Potential: Which direction offers the most compelling new stories?
        2.  Thematic Consistency: Which best enhances the core themes of the lore?
        3.  Originality: Which is the most surprising and interesting?

        First, provide a brief, one-paragraph rationale for your choice. Then, on a new line, state the chosen direction's title EXACTLY as it was written (e.g., "Chosen Direction: Direction B: The Serpent's Coil").

        CREATIVE DIRECTIONS:
        ---
        ${creativeDirections}
        ---
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
    });

    const chosenDirectionLine = response.text.split('\n').find(line => line.toLowerCase().startsWith('chosen direction:'));
    if (!chosenDirectionLine) {
        throw new Error("Critic failed to select a clear direction.");
    }
    const chosenDirectionTitle = chosenDirectionLine.substring("Chosen Direction:".length).trim();

    const directionsBlock = creativeDirections.split(/###? Direction [A-Z]:/);
    const chosenBlock = directionsBlock.find(block => block.trim().startsWith(chosenDirectionTitle.replace("Direction A: ", "").replace("Direction B: ", "").replace("Direction C: ", "")));
    
    if (!chosenBlock) {
         throw new Error(`Critic chose a direction ("${chosenDirectionTitle}") that could not be found in the original text.`);
    }

    return `Direction: ${chosenBlock.trim()}`;
}

// --- PHASE 2: CONVERGENT PLANNING ---

// STEP 2.1: THE SHOWRUNNER
async function _runShowrunner(chosenDirection: string): Promise<string> {
    const prompt = `
        You are the "Showrunner." Translate the winning 'CHOSEN CREATIVE DIRECTION' into a concrete, actionable to-do list.
        Create a bulleted list of 3-5 specific enhancement tasks. Each task must be a clear instruction to ADD or MODIFY content in the JSON Lore Bible.

        CHOSEN CREATIVE DIRECTION:
        ---
        ${chosenDirection}
        ---

        Output a clear, actionable, bulleted enhancement plan.
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: { thinkingConfig: { thinkingBudget: 32768 } }
    });
    return response.text;
}

export async function planEnhancements(loreData: any, progressCallback: ProgressCallback): Promise<string> {
    const analysisAspects = [
        { aspect: 'Characters & Relationships' },
        { aspect: 'Themes & Psychology' },
        { aspect: 'Worldbuilding & Aesthetics' }
    ];

    progressCallback('Phase 1: Analyzing Lore...');
    const analysisPromises = analysisAspects.map(a => _analyzeLoreAspect(loreData, a.aspect));
    const analysisResults = await Promise.all(analysisPromises);
    const structuredResults = analysisAspects.map((a, i) => ({ aspect: a.aspect, analysis: analysisResults[i] }));

    progressCallback('Phase 1: Brainstorming Creative Directions...');
    const creativeDirections = await _runBrainstormers(structuredResults);

    progressCallback('Phase 1: Critiquing and Selecting Best Path...');
    const chosenDirection = await _runCritic(creativeDirections);
    
    progressCallback('Phase 2: Drafting Enhancement Plan...');
    const plan = await _runShowrunner(chosenDirection);

    return plan;
}


// --- PHASE 3: ITERATIVE EXECUTION ---

// STEP 3.1: THE ARCHITECT
async function _runArchitect(loreData: any, enhancementPlan: string): Promise<string> {
    const loreSchema = JSON.stringify(Object.keys(loreData));
    const prompt = `
        You are a "JSON Architect." Your task is to prepare for an operation on a large JSON document based on an "Enhancement Plan."
        1. Read the Plan to understand the required changes.
        2. Identify which top-level keys in the schema are DIRECTLY affected.
        3. Your output MUST be a JSON object containing only the relevant sections (the full object/array for that key) from the provided "Full JSON Lore Bible."
        
        ENHANCEMENT PLAN:
        ---
        ${enhancementPlan}
        ---

        JSON SCHEMA: ${loreSchema}
        
        FULL JSON LORE BIBLE:
        ---
        ${JSON.stringify(loreData, null, 2)}
        ---

        EXTRACTED JSON CONTEXT:
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: { 
            responseMimeType: "application/json",
            thinkingConfig: { thinkingBudget: 32768 } 
        }
    });
    return response.text.replace(/^```json\s*|```\s*$/g, '');
}

// STEP 3.2: THE SCRIBE (Worker)
async function _runScribe(relevantContext: string, enhancementPlan: string, previousFeedback: string = ""): Promise<string> {
    const feedbackSection = previousFeedback 
        ? `\nAn previous attempt failed. You MUST address the following feedback from the Editor:\n---EDITOR FEEDBACK---\n${previousFeedback}\n---------------------\n`
        : "";

    const prompt = `
        You are the "Scribe." Your job is to execute an enhancement plan with surgical precision by generating a standard JSON patch.
        ${feedbackSection}
        RULES:
        1.  Follow each instruction in the 'ENHANCEMENT PLAN'.
        2.  You MUST NOT rewrite the entire context. Instead, generate a patch to modify it.
        3.  Your final output MUST be a single, valid JSON array of patch operations.
        4.  Each operation object in the array must have three keys:
            - "op": The operation, either "add" or "replace".
            - "path": An array of strings and/or numbers representing the path to the target. For "add" into an array, the path should point to the array itself. E.g., to add a new archetype to the first faction (index 0), the path would be ['factions', 0, 'archetypes'].
            - "value": For "replace", this is the full, new object which must include its 'id'. For "add", this is the new object to be added to an array.
        5.  When creating a "replace" operation, you must determine the correct index of the object to replace within its parent array by matching its 'id' in the provided context.

        EXAMPLE PATCH:
        [
          {
            "op": "add",
            "path": ["events"],
            "value": { "id": "new_event_1", "name": "New Event", "description": "A new event.", "intensity": "low", "ledgerImpact": {"agony": 1}, "visualSafetyTag": "psychological" }
          },
          {
            "op": "replace",
            "path": ["factions", 0, "archetypes", 0],
            "value": { "id": "provost", "name": "The Sadistic Matriarch (Updated)", "loreDescription": "Updated description.", "visualMotifs": "Unchanged.", "ttsVoiceId": "ProvostVoice", "wardrobeVariants": [], "proceduralHooks": {} }
          }
        ]

        RELEVANT JSON CONTEXT:
        ---
        ${relevantContext}
        ---
        
        ENHANCEMENT PLAN:
        ---
        ${enhancementPlan}
        ---

        Respond ONLY with the JSON array for the patch.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: { 
             responseMimeType: "application/json",
             thinkingConfig: { thinkingBudget: 32768 } 
        }
    });
    return response.text.replace(/^```json\s*|```\s*$/g, '');
}

// STEP 3.3: THE EDITOR (Critic)
async function _runEditor(enhancementPlan: string, jsonPatch: string, loreData: any): Promise<{ success: boolean; feedback: string }> {
     const prompt = `
        You are the "Editor." Your job is quality control. Compare the 'ENHANCEMENT PLAN' to the 'JSON PATCH'.
        
        TASK:
        1. Does the patch faithfully execute ALL instructions from the plan?
        2. Is the JSON in the patch well-formed and does it strictly adhere to the required schema: an array of objects, where each object has keys "op" (string), "path" (array of strings/numbers), and "value" (any)?
        3. Are the paths valid within the context of the Lore Bible structure? For "replace" ops, does the path correctly point to an existing item? For "add" ops, does the path point to an array?
        4. Respond with a JSON object containing two keys:
           - "success": (boolean) true if the patch is a perfect execution, otherwise false.
           - "feedback": (string) If success is false, provide a brief, one-sentence explanation of the error. If success is true, this should be an empty string.

        ENHANCEMENT PLAN:
        ---
        ${enhancementPlan}
        ---

        JSON PATCH:
        ---
        ${jsonPatch}
        ---

        LORE BIBLE STRUCTURE HINT (Top-level keys):
        ---
        ${JSON.stringify(Object.keys(loreData))}
        ---
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash', // Use a faster model for simple validation
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    success: { type: Type.BOOLEAN },
                    feedback: { type: Type.STRING },
                }
            }
        }
    });
    
    try {
        return JSON.parse(response.text);
    } catch (e) {
        return { success: false, feedback: "Editor returned invalid JSON response for review." };
    }
}


export async function executePlan(
    loreData: any, 
    enhancementPlan: string, 
    progressCallback: ProgressCallback
): Promise<Array<{ op: string; path: (string | number)[]; value: any }>> {
    const MAX_ATTEMPTS = 3;
    let lastFeedback = "";

    progressCallback('Phase 3: Architecting JSON changes...');
    const relevantContextJSON = await _runArchitect(loreData, enhancementPlan);
    
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        progressCallback(`Phase 3: Generating JSON patch (Attempt ${i + 1}/${MAX_ATTEMPTS})...`);
        const jsonPatchString = await _runScribe(relevantContextJSON, enhancementPlan, lastFeedback);

        progressCallback(`Phase 3: Reviewing changes (Attempt ${i + 1}/${MAX_ATTEMPTS})...`);
        const review = await _runEditor(enhancementPlan, jsonPatchString, loreData);

        if (review.success) {
            try {
                const jsonPatch = JSON.parse(jsonPatchString);
                 if (Array.isArray(jsonPatch) && (jsonPatch.length === 0 || jsonPatch.every(op => 'op' in op && 'path' in op && 'value' in op))) {
                    return jsonPatch;
                }
                 lastFeedback = "The generated patch was valid JSON, but did not follow the array of {op, path, value} objects structure. Please try again.";

            } catch (e) {
                lastFeedback = "The generated patch was not valid JSON. Please generate a valid JSON array.";
            }
        } else {
            lastFeedback = review.feedback;
            console.warn(`Execution attempt ${i+1} failed review. Feedback: ${lastFeedback}`);
        }
    }
    
    throw new Error(`AI failed to execute the plan after ${MAX_ATTEMPTS} self-correction attempts. Last feedback: ${lastFeedback}`);
}