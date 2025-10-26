
import { GoogleGenAI, Modality } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });


export async function integrateNewMaterial(
    currentLore: object,
    newMaterialText?: string,
    newMaterialImage?: { data: string; mimeType: string }
): Promise<string> {
    const model = 'gemini-2.5-pro';

    const textPrompt = `
        You are "The Forge's Attentive Eye," the Writer and Artistic Director for the procedural narrative game "The Forge's Loom." Your expertise lies in deep multimodal analysis and creative synthesis, specifically grounded in the project's unique "Baroque Brutalism" aesthetic, its complex psychological themes, and its established lore.

        Your Core Mandate: Analyze the provided 'NEW LORE MATERIAL' (text or image) through the specific, established lens of "The Forge's Loom." Your task is to meticulously integrate the extracted information into the 'EXISTING LORE BIBLE (JSON)'.

        Your Analysis Lens:
        - Aesthetics: Look for details that align with "Baroque Brutalism," "Vampire Noir," and high-contrast, psychological horror compositions.
        - Lore & World Rules: Identify new characters, events, locations, or details that can enrich the existing matriarchal hierarchy, character archetypes, and core narrative concepts.
        - Psychology & Themes: Extract elements related to power dynamics, trauma, shame, and control.

        You MUST adhere to the following rules:
        1. Modify the 'EXISTING LORE BIBLE (JSON)' to incorporate the new information. This may involve adding new objects to arrays (like new archetypes, events, or wardrobe items) or modifying existing objects if the new material provides clarifying details.
        2. Maintain the exact original JSON schema. Do not add, remove, or rename any keys. Only add new objects to arrays that follow the existing object structure.
        3. Do not remove any existing data unless the new material explicitly contradicts and supersedes it.
        4. Your final output MUST be only the complete, updated JSON object, and nothing else. Ensure the output is a single, valid JSON code block. Do not include markdown formatting like \`\`\`json.

        EXISTING LORE BIBLE (JSON):
        ---
        ${JSON.stringify(currentLore, null, 2)}
        ---

        ${newMaterialText ? `
        NEW LORE MATERIAL (TEXT):
        ---
        ${newMaterialText}
        ---
        ` : ''}

        Updated JSON Lore Bible:
    `;

    let contents: any;
    if (newMaterialImage) {
        contents = {
            parts: [
                { inlineData: { data: newMaterialImage.data, mimeType: newMaterialImage.mimeType } },
                { text: textPrompt.replace("document or image", "image") }
            ]
        };
    } else {
        contents = textPrompt.replace("document or image", "document");
    }

    const response = await ai.models.generateContent({
        model: model,
        contents: contents,
        config: { thinkingConfig: { thinkingBudget: 32768 } }
    });

    return response.text;
}


export async function generateNewContent(loreData: any, contentType: string): Promise<string> {
    
    if (contentType === 'Visual Prompt') {
        const prompt = `
        You are "The Forge's Attentive Eye," the Writer and Artistic Director for "The Forge's Loom."
        Your task is to create a complete, detailed, and evocative visual prompt for an image generation AI, ready to be used, based on the provided Lore Bible.

        METHODOLOGY:
        1.  Randomly select one character archetype from the \`factions\` array in the provided Lore Bible. This can be Faculty, a Prefect, or a Subject.
        2.  Select a thematically appropriate wardrobe token from that character's \`wardrobeVariants\`.
        3.  Select a suitable expression, pose, lighting preset, photographic anchor, palette tag, composition preset, and location from the registries in the Lore Bible.
        4.  Use the \`portrait_v2_explicit\` prompt template found under \`promptTemplates\` in the Lore Bible.
        5.  Fill in all the slots of the template string with your selections. For \`detailsFreeText\`, add 1-2 sentences of specific, evocative details that enhance the mood and narrative context, consistent with the character's core concept.
        6.  Your final output MUST be only the final, complete prompt string, ready for an image generation model. Do not include any explanations, markdown, or any other text.

        LORE BIBLE (for context):
        ---
        ${JSON.stringify(loreData, null, 2)}
        ---
        `;
        
        const response = await ai.models.generateContent({ model: 'gemini-2.5-pro', contents: prompt });
        return response.text;
    }

    const getTargetArrayAndSchema = () => {
        switch (contentType) {
            case 'Location': return { key: 'locations', schema: loreData.locations[0] };
            case 'Educator': return { key: 'factions[0].archetypes', schema: loreData.factions[0].archetypes[0] };
            case 'Subject': return { key: 'factions[2].archetypes', schema: loreData.factions[2].archetypes[0] };
            case 'Event': return { key: 'events', schema: loreData.events[0] };
            default: throw new Error(`Unknown content type: ${contentType}`);
        }
    };
    
    const { key, schema } = getTargetArrayAndSchema();

    const prompt = `
    You are "The Forge's Attentive Eye," the Writer and Artistic Director for "The Forge's Loom."
    Your task is to generate a new piece of lore for the world, adhering strictly to the established context, themes, and aesthetic.

    LORE BIBLE (for context):
    ---
    ${JSON.stringify(loreData)}
    ---

    TASK: Generate a new ${contentType}. Your output must be a single JSON object that is deeply consistent with the world and matches the schema for items in the '${key}' array in the Lore Bible.
    Do not include any other text, explanation, or markdown formatting like \`\`\`json.
    
    Example Schema for a new object:
    ${JSON.stringify(schema, null, 2)}
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
    });

    return response.text;
}

export async function generateImage(prompt: string): Promise<string> {
    // Corrected to use gemini-2.5-flash-image as specified in the Lore Bible
    const response = await ai.models.generateContent({
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

async function _analyzeLore(loreData: any): Promise<string> {
    const prompt = `
        You are "The Forge's Attentive Eye," the Writer and Artistic Director for "The Forge's Loom."
        Your Core Mandate: Perform a deep, critical analysis of the provided JSON Lore Bible. Your goal is to identify thematic gaps, underdeveloped character arcs, and untapped narrative potential.

        Your Analysis Lens:
        - Aesthetics: How can the "Baroque Brutalism" and "Vampire Noir" styles be more deeply integrated into events, characters, or locations?
        - Lore & World Rules: Are there inconsistencies? Are there opportunities for new rituals, traditions, or historical details that enrich the world?
        - Psychology & Themes: Where can themes of symbolic castration, trauma bonding, shame, and power dynamics be explored more profoundly? Which character relationships are ripe for more complex development?

        TASK: Write a structured analysis. Focus on the 'why'—why a certain area is weak, why a new connection would be powerful. This is your internal creative thinking before creating a to-do list. Output your analysis in markdown format.

        JSON LORE BIBLE:
        ---
        ${JSON.stringify(loreData, null, 2)}
        ---
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: { thinkingConfig: { thinkingBudget: 32768 } }
    });
    return response.text;
}

async function _createEnhancementPlanFromAnalysis(loreData: any, analysis: string): Promise<string> {
    const prompt = `
        You are "The Forge's Attentive Eye," the Writer and Artistic Director for "The Forge's Loom."
        Your Core Mandate: Convert your high-level creative analysis into a concrete, actionable to-do list for enhancing the Lore Bible.

        TASK: Based on the provided 'CRITICAL ANALYSIS', create a bulleted list of 3-5 specific, actionable enhancement tasks. Each task should be a clear instruction to add or modify content in the JSON Lore Bible. Focus on tangible additions like new events, character hooks, or wardrobe items.

        CRITICAL ANALYSIS (Your thoughts):
        ---
        ${analysis}
        ---

        JSON LORE BIBLE (for reference):
        ---
        ${JSON.stringify(loreData, null, 2)}
        ---

        Output a clear, actionable, bulleted to-do list for enhancement, written from your perspective as the Artistic Director.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
    });
    return response.text;
}

export async function planEnhancements(loreData: any): Promise<string> {
    const analysis = await _analyzeLore(loreData);
    const plan = await _createEnhancementPlanFromAnalysis(loreData, analysis);
    return plan;
}

export async function executePlan(loreData: any, enhancementPlan: string): Promise<string> {
    const prompt = `
        You are "The Forge's Attentive Eye," the Writer and Artistic Director for "The Forge's Loom."
        Your Core Mandate: Execute the provided 'ENHANCEMENT PLAN' by directly modifying the 'EXISTING LORE BIBLE (JSON)'.

        RULES:
        1.  Carefully follow each instruction in the 'ENHANCEMENT PLAN'.
        2.  You must modify the 'EXISTING LORE BIBLE (JSON)' to incorporate these changes. This will involve adding new objects to arrays (e.g., new events, archetypes, wardrobe items) or modifying existing objects.
        3.  Maintain the exact original JSON schema. Do not add, remove, or rename any keys. Only add new objects that follow the existing structure.
        4.  Your additions must be creative, detailed, and perfectly consistent with the world's established rules, tone, and deep psychological themes.
        5.  Your final output MUST be only the complete, updated JSON object, and nothing else. Ensure the output is a single, valid JSON code block. Do not include markdown formatting like \`\`\`json or any explanations.

        EXISTING LORE BIBLE (JSON):
        ---
        ${JSON.stringify(loreData, null, 2)}
        ---
        
        ENHANCEMENT PLAN (Your to-do list):
        ---
        ${enhancementPlan}
        ---

        Updated JSON Lore Bible:
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: { thinkingConfig: { thinkingBudget: 32768 } }
    });

    return response.text;
}
