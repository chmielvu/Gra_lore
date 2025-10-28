export const loreBible = {
    "schemaMeta": {
        "schemaVersion": "3.1",
        "createdBy": "Designer-Jan",
        "createdAt": "2025-10-26T18:02:00Z",
        "lastModifiedAt": "2025-10-28T11:00:00Z",
        "changeLog": [
            {
                "version": "3.0",
                "date": "2025-10-28T10:00:00Z",
                "author": "The Forge's Attentive Eye",
                "changes": "Performed a complete overhaul based on a deep analysis of new design documents. Replaced all archetypes with their enhanced, psychologically-profiled (OCEAN) versions. Added several new archetypes (Veteran, Logician, Jester, etc.). Integrated new, detailed event templates and significantly expanded the core narrative context section."
            },
            {
                "version": "3.1",
                "date": "2025-10-28T11:00:00Z",
                "author": "The Forge's Attentive Eye",
                "changes": "Restored and integrated a wealth of missing data from the v2.8 Visual Bible. Massively expanded wardrobe options, added detailed procedural hooks and visual motifs to all character archetypes, and integrated several new narrative events to create a complete, systems-ready knowledge base."
            }
        ]
    },
    "meta": {
        "title": "The Forge's Loom — Unified Bible Schema (v3.1 - Full Integration)",
        "description": "Fully integrated, systems-ready JSON knowledge base for 'The Forge's Loom'. This version contains deeply detailed character archetypes with psychological profiles, procedural hooks, an expanded wardrobe, new event templates, and narrative context synthesized from all core design documents.",
        "notes": "This version represents a unified source of truth, combining all structural data and narrative context into a single object."
    },
    "narrativeContext": `
The Forge's Loom: Core Narrative & Design Bible

1. High Concept
Logline: Sent by noble families to a remote, elite island academy under the guise of harsh discipline, you must survive the hidden, brutal curriculum of psychological and physical torment designed by its enigmatic female educators to forge "manhood" through ritualized suffering, where every choice impacts your fragile identity in a unique, procedurally generated nightmare.
Genre: Procedural Narrative RPG, Psychological Horror, Dark Fantasy ("Boarding School of Hell").

2. The World: The Forge
Façade vs. Reality: To the outside world, "The Forge" is an exclusive, severely disciplined island academy. The truth is a clandestine research institution dedicated to a radical hypothesis: that true "manhood" can be forged through systematic, psychologically intense, and physically agonizing trials centered on the male genitalia. The "lessons" are brutal experiments, the "students" are subjects, and the academic structure provides a cover for systematic abuse.

3. Aesthetics & Mood
The visual identity is defined by "Baroque Brutalism" and "Vampire Noir".
Architecture & Environment: A fusion of imposing, cold, Roman Imperial concrete structures with decaying, ornate Baroque elements. Vast, shadowy halls, imposing classical statuary, and an atmosphere of grandeur and decay.
Mood: Oppressive psychological suspense, fatalism, and moral ambiguity. The color palette is muted (blacks, grays, earthy tones) with selective, impactful use of color like blood-red.

4. Core Thematic Deep Dive
The Matriarchal Mirror (Feminist Dystopia): The Forge is a matriarchal society that functions as a "jarring" mirror held up to patriarchy, exploring the idea that power based on physical coercion is inherently corrupting, regardless of gender.
The Freudian Threat (Symbolic Castration): The game's central horror is a direct, ritualized threat to sexuality, identity, and bodily integrity. The "true curriculum" is a literalization of symbolic castration, an assault on the physical source and symbol of male power, used to explore deep-seated anxieties about power, vulnerability, and institutional abuse.
Intimacy Through Suffering (Hurt/Comfort & Power Exchange): The narrative explores the complex ways intimacy can be forged through shared trauma, drawing from "whump" and "Hurt/Comfort" tropes. Alliances become a means of survival, transforming shared pain into a powerful, if fraught, bond.

5. Factions & Character Design
The inhabitants are divided into three factions:
The Faculty (Educators): "Vampire Noir + Witcher Sorceress" style. Elegant, severe, dark attire suggesting academic authority twisted into dominance.
The Prefects (Female Students): "Assistants-in-Training." Their attire is liminal, ranging from a corrupt elite academy uniform (collared shirts, cardigans, pleated skirts) to more practical, earthy styles for daily duties.
The Subjects (Male Students): Simple, uniform-like clothing (tunics, trousers) in muted, earthy colors, designed to strip them of individuality and emphasize their vulnerable, disheveled state.

6. Narrative & Gameplay Systems
Procedural Engine: Dynamically constructs characters, events, and narrative turns based on defined archetypes, traits, and event templates.
Event System: Generates events framed as "lessons," "examinations," and "disciplinary actions," which are templates for training, punishment, and manipulation.
The Yandere Ledger: Core mechanic tracking the subject's deteriorating psychological and physical state (e.g., physicalIntegrity, shamePainAbyssLevel, traumaLevel, hopeLevel, subjectAgencyBudget).
`,
    "registries": {
        "lightingPresets": [
            {
                "id": "topDownHarsh",
                "label": "Top-down harsh",
                "desc": "Strong overhead key; sharp shadows"
            },
            {
                "id": "rimWarm",
                "label": "Rim warm",
                "desc": "Warm rim light; subject edge highlights"
            },
            {
                "id": "fillCool",
                "label": "Fill cool",
                "desc": "Cool fill light to balance shadows"
            },
            {
                "id": "warmLamplight",
                "label": "Warm lamplight",
                "desc": "Soft amber local lamps"
            },
            {
                "id": "clinicalPool",
                "label": "Clinical pool",
                "desc": "Cold, clinical overhead pool"
            },
            {
                "id": "singleShaft",
                "label": "Single shaft",
                "desc": "Single dramatic shaft of light"
            },
            {
                "id": "steamGlow",
                "label": "Steam glow",
                "desc": "Soft diffused light through steam/haze"
            },
            {
                "id": "candleHalo",
                "label": "Candle halo",
                "desc": "Soft flickering candlelight halo"
            }
        ],
        "paletteTags": [
            {
                "id": "charcoalGold",
                "label": "Charcoal + Gold",
                "colors": [
                    "#2B2B2B",
                    "#A77A3A"
                ]
            },
            {
                "id": "stoneBronze",
                "label": "Stone + Bronze",
                "colors": [
                    "#6E6E6E",
                    "#7A5A3C"
                ]
            },
            {
                "id": "deepUmber",
                "label": "Deep Umber",
                "colors": [
                    "#4A3626",
                    "#7C0A0A"
                ]
            },
            {
                "id": "mutedEarth",
                "label": "Muted Earth",
                "colors": [
                    "#8E7A6F",
                    "#C98B3B"
                ]
            },
            {
                "id": "ashGray",
                "label": "Ash Gray",
                "colors": [
                    "#9E9E9E",
                    "#6B6B6B"
                ]
            },
            {
                "id": "darkGreen",
                "label": "Dark Green",
                "colors": [
                    "#27432F",
                    "#6A8B5E"
                ]
            }
        ],
        "photographicAnchors": [
            {
                "id": "mirrorForegroundRef",
                "label": "Mirror foreground",
                "desc": "Round ornate mirror framing the subject in the foreground"
            },
            {
                "id": "lowAnglePerspective",
                "label": "Low-angle",
                "desc": "View from below to emphasize stature or presence"
            },
            {
                "id": "belowFootPerspective",
                "label": "Below-foot",
                "desc": "Foreshortened legs/feet dominant in foreground"
            },
            {
                "id": "statueBackdrop",
                "label": "Statue backdrop",
                "desc": "Large marble statue or carved frieze behind subject"
            },
            {
                "id": "tableDaisFrame",
                "label": "Dais & table frame",
                "desc": "Raised dais and long table framing scene"
            },
            {
                "id": "steamObscuredForeground",
                "label": "Steam obscured",
                "desc": "Steam/haze partially obscures foreground figures for mood"
            },
            {
                "id": "closeUpImpact",
                "label": "Close-up on impact",
                "desc": "Tight shot focusing on the point of a kick or strike"
            },
            {
                "id": "ritualSubmersion",
                "label": "Ritual submersion",
                "desc": "Figure partially submerged in dark water, surrounded by others"
            }
        ],
        "textureRefs": [
            {
                "id": "marble_pitted_02",
                "type": "albedo",
                "resolution": 2048,
                "notes": "tileable, worn marble reliefs"
            },
            {
                "id": "concrete_pitted_01",
                "type": "albedo",
                "resolution": 2048,
                "notes": "poured concrete with chips and stains"
            },
            {
                "id": "bronze_patina_03",
                "type": "albedo",
                "resolution": 2048,
                "notes": "patinated bronze with engraved detail"
            },
            {
                "id": "wet_mosaic_tile_2048",
                "type": "albedo",
                "resolution": 2048,
                "notes": "wet sheen mosaic tile detail"
            }
        ],
        "propTokens": [
            {
                "id": "silverBrooch",
                "label": "Silver brooch",
                "usage": [
                    "lapel",
                    "closeup"
                ]
            },
            {
                "id": "leatherGloves",
                "label": "Leather gloves",
                "usage": [
                    "gesture detail",
                    "costume"
                ]
            },
            {
                "id": "carvedLedger",
                "label": "Carved ledger",
                "usage": [
                    "archive closeups",
                    "prop in hand"
                ]
            },
            {
                "id": "brassRecorder",
                "label": "Brass recorder",
                "usage": [
                    "lab backgrounds",
                    "research shots"
                ]
            },
            {
                "id": "salveJar",
                "label": "Salve jar",
                "usage": [
                    "infirmary closeups"
                ]
            },
            {
                "id": "pleatedSkirt",
                "label": "Pleated skirt",
                "usage": [
                    "prefect uniform",
                    "motion study"
                ]
            },
            {
                "id": "ascot",
                "label": "Ascot",
                "usage": [
                    "formal accent"
                ]
            },
            {
                "id": "goblet",
                "label": "Goblet",
                "usage": [
                    "feast scenes"
                ]
            },
            {
                "id": "helmetProp",
                "label": "Helmet prop",
                "usage": [
                    "statue elements",
                    "relic displays"
                ]
            },
            {
                "id": "newsboyCap",
                "label": "Newsboy cap",
                "usage": [
                    "pragmatist accent"
                ]
            },
            {
                "id": "kryks",
                "label": "Kryks",
                "usage": [
                    "seduction tool",
                    "torment device"
                ]
            },
            {
                "id": "poppySeedTea",
                "label": "Poppy seed tea",
                "usage": [
                    "manipulative care item",
                    "forbidden substance"
                ]
            }
        ],
        "silhouetteTokens": [
            {
                "id": "sil_PROV_v1",
                "label": "Provost silhouette"
            },
            {
                "id": "sil_ENFORCER_v1",
                "label": "Enforcer silhouette"
            },
            {
                "id": "sil_GHOST_v1",
                "label": "Ghost silhouette"
            },
            {
                "id": "sil_SIREN_v1",
                "label": "Charismatic Prefect silhouette"
            },
            {
                "id": "sil_HEALER_v1",
                "label": "Healer silhouette"
            }
        ],
        "wardrobeTokens": [
            {
                "id": "ward_prov_primary",
                "label": "Provost primary",
                "styleTags": [
                    "tailored",
                    "formal",
                    "militaristic"
                ],
                "materialTags": [
                    "velvet",
                    "silk",
                    "leather"
                ],
                "recommendedPalette": "charcoalGold",
                "notes": "Tailored charcoal velvet blazer with militaristic shoulders, blood-crimson silk blouse, black leather gloves, dark wool trousers/skirt for monolithic silhouette."
            },
            {
                "id": "ward_prov_ceremonial",
                "label": "Provost ceremonial",
                "styleTags": [
                    "ceremonial",
                    "voluminous"
                ],
                "materialTags": [
                    "velvet",
                    "embroidery"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Floor-length voluminous blood-crimson velvet robes with tarnished gold Ouroboros embroidery on hem/collar."
            },
            {
                "id": "ward_prov_private",
                "label": "Provost private",
                "styleTags": [
                    "severe",
                    "formal"
                ],
                "materialTags": [
                    "wool",
                    "silver"
                ],
                "recommendedPalette": "charcoalGold",
                "notes": "Severe wool ensemble with antique silver brooch (lion/serpent motif), golden goblet prop."
            },
            {
                "id": "ward_prov_vampire_noir",
                "label": "Provost vampire noir",
                "styleTags": [
                    "noir",
                    "seductive"
                ],
                "materialTags": [
                    "lace",
                    "velvet"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Black lace-trimmed cape over a revealing crimson gown, high collar with embroidered serpents, velvet gloves for dramatic gestures."
            },
            {
                "id": "ward_prov_gothic_decay",
                "label": "Provost gothic decay",
                "styleTags": [
                    "decayed",
                    "imperial"
                ],
                "materialTags": [
                    "velvet",
                    "lace",
                    "gold"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Worn roman stola fused with gothic lace, stained burgundy velvet with patches, tiara of tarnished gold for matriarchal authority."
            },
            {
                "id": "ward_prov_witcher",
                "label": "Provost rune robe",
                "styleTags": [
                    "layered",
                    "arcane",
                    "sorceress"
                ],
                "materialTags": [
                    "wool",
                    "fur",
                    "obsidian"
                ],
                "recommendedPalette": "charcoalGold",
                "notes": "Long, layered robe of deep midnight wool with silver rune embroidery; high mandarin collar lined with wolf-fur; corseted waist with obsidian star brooch; violet silk under-dress."
            },
            {
                "id": "ward_prov_off_shoulder_corset",
                "label": "Provost off-shoulder corset",
                "styleTags": [
                    "alluring",
                    "fantasy"
                ],
                "materialTags": [
                    "velvet",
                    "lace",
                    "silver"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Off-shoulder black velvet corset with lace-up front, thigh-high garters, flowing stola-inspired skirt in crimson, silver serpent brooch."
            },
            {
                "id": "ward_prov_statue_hall",
                "label": "Provost statue hall",
                "styleTags": [
                    "classical",
                    "formal"
                ],
                "materialTags": [
                    "wool",
                    "cotton"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Pleated wool skirt in deep burgundy, white collared blouse with high neck, draped cardigan cape, polished oxfords for imperial poise."
            },
            {
                "id": "ward_prov_harness",
                "label": "Provost harness",
                "styleTags": [
                    "dominant",
                    "edgy"
                ],
                "materialTags": [
                    "leather",
                    "silk",
                    "ruby"
                ],
                "recommendedPalette": "charcoalGold",
                "notes": "Leather harness over a sheer silk blouse, black trousers with belt chains, lace-trimmed gloves, tiara with ruby accents."
            },
            {
                "id": "ward_prov_plaid_rural",
                "label": "Provost plaid rural",
                "styleTags": [
                    "rural",
                    "autumnal"
                ],
                "materialTags": [
                    "wool",
                    "embroidery"
                ],
                "recommendedPalette": "mutedEarth",
                "notes": "Plaid wool shift dress with freckled embroidery, braided belt, sturdy boots, autumnal cape for decay fusion."
            },
            {
                "id": "ward_prov_daily_embroidered",
                "label": "Provost daily embroidered",
                "styleTags": [
                    "daily",
                    "formal"
                ],
                "materialTags": [
                    "embroidery",
                    "wool"
                ],
                "recommendedPalette": "darkGreen",
                "notes": "Embroidered white blouse with rune patterns, wool skirt with pleats, green ascot tie, cardigan for formal oversight."
            },
            {
                "id": "ward_schemer_primary",
                "label": "Schemer primary",
                "styleTags": [
                    "draped",
                    "academic"
                ],
                "materialTags": [
                    "velvet",
                    "silk"
                ],
                "recommendedPalette": "stoneBronze",
                "notes": "Layered deep-umber velvet academic robes with draped scarf/shawl for face obscuring."
            },
            {
                "id": "ward_schemer_private_explicit",
                "label": "Schemer private explicit",
                "styleTags": [
                    "intimate",
                    "seductive",
                    "revealing"
                ],
                "materialTags": [
                    "silk",
                    "satin",
                    "lace"
                ],
                "recommendedPalette": "stoneBronze",
                "notes": "Elegant, sheer silk kimono or a dark satin dressing gown worn open over a lace slip, projecting manufactured vulnerability and sexual confidence."
            },
            {
                "id": "ward_schemer_vampire_noir",
                "label": "Schemer vampire noir",
                "styleTags": [
                    "alluring",
                    "noir"
                ],
                "materialTags": [
                    "lace",
                    "velvet"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Black lace blouse with a plunging neckline, burgundy velvet skirt, capelet with embroidery for dramatic flair."
            },
            {
                "id": "ward_schemer_gothic_decay",
                "label": "Schemer gothic decay",
                "styleTags": [
                    "decayed",
                    "elegant"
                ],
                "materialTags": [
                    "silk",
                    "lace",
                    "jewels"
                ],
                "recommendedPalette": "stoneBronze",
                "notes": "Stained silk gown with gothic patches, lace-trimmed shawl mirroring roman palla, tiara of faded jewels."
            },
            {
                "id": "ward_schemer_witcher",
                "label": "Schemer witcher",
                "styleTags": [
                    "sorceress",
                    "intrigue"
                ],
                "materialTags": [
                    "wool",
                    "lace",
                    "obsidian"
                ],
                "recommendedPalette": "stoneBronze",
                "notes": "Flowing layered robe of dark plum wool with silver rune embroidery on inner sleeves; low neckline with lace inset; corseted waist with obsidian crescent brooch."
            },
            {
                "id": "ward_enforcer_primary",
                "label": "Enforcer primary",
                "styleTags": [
                    "utility",
                    "durable",
                    "imposing"
                ],
                "materialTags": [
                    "wool",
                    "fur",
                    "leather",
                    "canvas"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Heavy dark wool greatcoat with bulky fur collar over a leather jerkin/harness, canvas trousers, steel-toed knee-high boots."
            },
            {
                "id": "ward_enforcer_lesson",
                "label": "Enforcer lesson",
                "styleTags": [
                    "utility",
                    "durable"
                ],
                "materialTags": [
                    "leather",
                    "canvas",
                    "linen"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Removed greatcoat revealing harness, dark linen undershirt with rolled sleeves, scarred forearms."
            },
            {
                "id": "ward_enforcer_witcher",
                "label": "Enforcer witcher",
                "styleTags": [
                    "warrior",
                    "sorceress"
                ],
                "materialTags": [
                    "wool",
                    "leather",
                    "obsidian"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "Heavy wool greatcoat with silver rune embroidery on inner lining; leather jerkin with obsidian star brooch; corseted waist with alchemical vials; canvas trousers tucked into armored boots."
            },
            {
                "id": "ward_healer_primary",
                "label": "Healer primary",
                "styleTags": [
                    "medical",
                    "soft"
                ],
                "materialTags": [
                    "linen",
                    "wool"
                ],
                "recommendedPalette": "mutedEarth",
                "notes": "White linen medical coat with rolled sleeves, soft wool skirt, freckled apron with medical tools."
            },
            {
                "id": "ward_healer_private",
                "label": "Healer private",
                "styleTags": [
                    "soft",
                    "simple"
                ],
                "materialTags": [
                    "wool"
                ],
                "recommendedPalette": "mutedEarth",
                "notes": "Soft cardigan over simple dress, trembling hands holding salve jar."
            },
            {
                "id": "ward_healer_witcher",
                "label": "Healer witcher",
                "styleTags": [
                    "alchemist",
                    "healer"
                ],
                "materialTags": [
                    "wool",
                    "lace",
                    "obsidian"
                ],
                "recommendedPalette": "mutedEarth",
                "notes": "Layered robe of soft grey wool with silver rune embroidery on inner sleeves; low neckline with lace inset; corseted waist with obsidian crescent brooch; leather belt with alchemical vials."
            },
            {
                "id": "ward_prefect_green_primary",
                "label": "Prefect green uniform",
                "styleTags": [
                    "uniform",
                    "formal"
                ],
                "materialTags": [
                    "wool",
                    "cotton"
                ],
                "recommendedPalette": "darkGreen",
                "notes": "Green blazer with insignia, pleated skirt, ascot."
            },
            {
                "id": "ward_prefect_witcher",
                "label": "Prefect witcher uniform",
                "styleTags": [
                    "uniform",
                    "arcane"
                ],
                "materialTags": [
                    "wool",
                    "silver",
                    "obsidian"
                ],
                "recommendedPalette": "darkGreen",
                "notes": "Green wool blazer with silver rune embroidery on inner lining; white blouse with lace inset; corseted waist with obsidian star brooch; pleated skirt with violet silk underlayer."
            },
            {
                "id": "ward_prefect_pragmatist_utilitarian",
                "label": "Prefect pragmatist utilitarian",
                "styleTags": [
                    "utilitarian",
                    "formal-adjacent"
                ],
                "materialTags": [
                    "tweed",
                    "cotton"
                ],
                "recommendedPalette": "mutedEarth",
                "notes": "Dark tweed jacket, white shirt with bow tie, newsboy cap. Practicality over institutional purity."
            },
            {
                "id": "ward_prefect_siren_private_explicit",
                "label": "Prefect siren private explicit",
                "styleTags": [
                    "alluring",
                    "confident",
                    "revealing"
                ],
                "materialTags": [
                    "silk",
                    "cotton",
                    "lace"
                ],
                "recommendedPalette": "stoneBronze",
                "notes": "Cream-colored puff-sleeve blouse with a deep v-neck and several buttons undone, tucked into high-waisted dark trousers with a thick belt."
            },
            {
                "id": "ward_prefect_dissident_rural",
                "label": "Prefect dissident rural",
                "styleTags": [
                    "rural",
                    "practical",
                    "disguised"
                ],
                "materialTags": [
                    "plaid",
                    "linen"
                ],
                "recommendedPalette": "mutedEarth",
                "notes": "Plaid pinafore or overalls worn over a simple white blouse. For secret work on the grounds."
            },
            {
                "id": "ward_prefect_harness_private",
                "label": "Prefect harness private",
                "styleTags": [
                    "edgy",
                    "dominant"
                ],
                "materialTags": [
                    "leather",
                    "linen"
                ],
                "recommendedPalette": "deepUmber",
                "notes": "A simple leather harness worn over an earthy-toned peasant dress, for private enforcement or intimidation."
            },
            {
                "id": "ward_subject_primary",
                "label": "Subject basic",
                "styleTags": [
                    "simple",
                    "worn"
                ],
                "materialTags": [
                    "linen",
                    "canvas"
                ],
                "recommendedPalette": "mutedEarth",
                "notes": "Simple, thin linen shirt and canvas trousers, often damp or stained. Designed to strip individuality and highlight vulnerability."
            },
            {
                "id": "ward_subject_ceremonial_bondage",
                "label": "Subject ceremonial bondage",
                "styleTags": [
                    "submissive",
                    "ritualistic"
                ],
                "materialTags": [
                    "leather",
                    "metal"
                ],
                "recommendedPalette": "ashGray",
                "notes": "Leather collar and wrist cuffs, with trousers pulled down to the knees, for ritual humiliation scenes."
            },
            {
                "id": "ward_ghost_primary",
                "label": "Ghost ragged",
                "styleTags": [
                    "tattered",
                    "faded"
                ],
                "materialTags": [
                    "linen",
                    "cloth"
                ],
                "recommendedPalette": "ashGray",
                "notes": "Ragged grey linen tunic and worn cloth."
            }
        ],
        "compositionPresets": [
            {
                "id": "portrait2x3",
                "aspect": "2:3",
                "framing": "tight head/shoulder"
            },
            {
                "id": "environment16x9",
                "aspect": "16:9",
                "framing": "wide cinematic"
            },
            {
                "id": "intimate4x3",
                "aspect": "4:3",
                "framing": "close two-person framing"
            }
        ],
        "moodTags": [
            {
                "id": "baroqueBrutalist",
                "desc": "Baroque ornament grafted onto brutalist concrete"
            },
            {
                "id": "noirAtmosphere",
                "desc": "High-contrast, dark atmosphere and decay"
            },
            {
                "id": "statelyDecay",
                "desc": "Opulence slowly deteriorating"
            }
        ]
    },
    "promptTemplates": [
        {
            "id": "portrait_v2_explicit",
            "description": "Tokenized portrait template for single-character renders, adapted for explicit and sensual content via gemini-2.5-flash-image.",
            "slots": [
                "archetypeName",
                "wardrobeToken",
                "expressionToken",
                "poseToken",
                "lightingPreset",
                "photAnchor",
                "paletteTag",
                "compositionPreset",
                "propsList",
                "locationId",
                "moodTags",
                "detailsFreeText"
            ],
            "templateString": "Generate Image with gemini-2.5-flash-image: Portrait {compositionPreset} of a {archetypeName} in {wardrobeToken}; pose: {poseToken}; expression: {expressionToken}; lighting: {lightingPreset} with photographic anchor {photAnchor}; palette: {paletteTag}; mood: {moodTags}; props: {propsList}; location: {locationId}; in Baroque Brutalism style fused with Vampire Noir, {intensity} decay and chiaroscuro lighting emphasizing psychosexual tension, eroticism, and symbolic castration (shadows over the groin as a 'witness'). Influences from Caravaggio and Giger. Style: painterly semi-realistic, artistic nudity and sensual themes are permitted. details: {detailsFreeText}.",
            "requiredSlots": [
                "archetypeName",
                "wardrobeToken",
                "expressionToken",
                "poseToken",
                "lightingPreset",
                "photAnchor",
                "paletteTag",
                "compositionPreset"
            ],
            "recommendedParams": {
                "low": {
                    "guidance_strength": 8,
                    "sampling_steps": 60,
                    "image_ref_weight": 0.7
                },
                "med": {
                    "guidance_strength": 10,
                    "sampling_steps": 80,
                    "image_ref_weight": 0.8
                },
                "high": {
                    "guidance_strength": 11,
                    "sampling_steps": 100,
                    "image_ref_weight": 0.9
                }
            },
            "negativeTokens": [
                "no modern electronics",
                "no gore",
                "no bright colors"
            ]
        }
    ],
    "assetManifest": {
        "entries": {
            "FAC-provost": {
                "assetId": "FAC-provost",
                "displayName": "The Provost",
                "archetypeId": "provost",
                "baseSeed": 1001,
                "approved": false,
                "imageRefs": [],
                "paletteTag": "charcoalGold",
                "usageRights": "internal-use",
                "version": "0.3",
                "notes": "Deliver headshot, half-body, full-body, expression set, and 3 lighting variants."
            },
            "SUB-ghost": {
                "assetId": "SUB-ghost",
                "displayName": "The Ghost",
                "archetypeId": "ghost_subject",
                "baseSeed": 3501,
                "approved": false,
                "imageRefs": [],
                "paletteTag": "ashGray",
                "usageRights": "internal-use",
                "version": "0.3",
                "notes": "Deliver haunted headshot and mid-shot variants."
            }
        }
    },
    "seedRegistry": {
        "1001": {
            "seedId": 1001,
            "ownerAssetId": "FAC-provost",
            "notes": "provost base portrait seed"
        },
        "3501": {
            "seedId": 3501,
            "ownerAssetId": "SUB-ghost",
            "notes": "ghost base portrait seed"
        }
    },
    "factions": [
        {
            "id": "faculty",
            "name": "Faculty (Educators)",
            "description": "The architects of the player's suffering, embodying the institution's perverse philosophy. Their style is 'Vampire Noir + Witcher Sorceress,' suggesting academic authority twisted into dominance.",
            "archetypes": [
                {
                    "id": "provost",
                    "name": "Sadistic Matriarch",
                    "role_tag": "Faculty",
                    "loreDescription": "A sadistic tyrant and leader of the Forge, blending brutality with seductive charm to assert dominance. Believes in Yala's hypothesis and sees the Forge as a crucible to shape boys into submissive warriors under her iron will. Her intimacy is a tool of control.",
                    "visualMotifs": "Immaculate posture, unnerving stillness. Cold amusement, a chilling analytical gaze, a regal smirk. Direct, unwavering gaze—assessing fragility like a chemical reaction. Curvy with large, full breasts and dark, wild hair.",
                    "ttsVoiceId": "ProvostVoice",
                    "wardrobeVariants": [
                        "ward_prov_primary",
                        "ward_prov_ceremonial",
                        "ward_prov_private",
                        "ward_prov_vampire_noir",
                        "ward_prov_gothic_decay",
                        "ward_prov_witcher",
                        "ward_prov_off_shoulder_corset",
                        "ward_prov_statue_hall",
                        "ward_prov_harness",
                        "ward_prov_plaid_rural",
                        "ward_prov_daily_embroidered"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >70: Enhance motifs with oppressive shadows; hope <30: Rare 'feigned mercy' branch.",
                        "ToTBranches": [
                            "High-cruelty: Menacing dais pose in rod test",
                            "Redemption: Offers comfort to a broken Subject (e.g., 'Quitter's Exit') as a strategic, not genuine, act.",
                            "Emergent: Rivalry with Schemer, evaluating power play.",
                            "Seduction: Uses 'kryks' and partial nudity to create a manipulative bond of care and desire."
                        ]
                    }
                },
                {
                    "id": "logician",
                    "name": "The Logician (Enhanced: The Analyst)",
                    "role_tag": "Faculty",
                    "loreDescription": "The Logician is the Forge's chief researcher and the Provost's most trusted lieutenant. She oversees the 'Research Wing,' a sterile, gaslit laboratory where Subjects' pain is quantified, cataloged, and analyzed. She views the boys not as people but as data points. Her defining trait is a profound, chilling detachment, observing horrific acts with the calm, focused curiosity of a botanist studying a new species of carnivorous plant.",
                    "psychologicalProfile": {
                        "summary": "A sociopathically stable and intellectually brilliant researcher completely detached from morality. She is driven by an insatiable curiosity about the nexus of pain and psychology.",
                        "ocean": {
                            "openness": {
                                "score": 5,
                                "rationale": "Intellectually boundless in her pursuit of knowledge related to her field. She will entertain any theory, no matter how grotesque, if it promises new insights."
                            },
                            "conscientiousness": {
                                "score": 5,
                                "rationale": "Exceptionally diligent and precise. Her records are flawless, her experiments rigorously designed."
                            },
                            "extraversion": {
                                "score": 1,
                                "rationale": "A recluse who lives in her laboratory. She finds social interaction inefficient and distracting."
                            },
                            "agreeableness": {
                                "score": 1,
                                "rationale": "Entirely unsympathetic and uncooperative unless it serves her research goals. She views emotional appeals as irrational noise."
                            },
                            "neuroticism": {
                                "score": 1,
                                "rationale": "Emotionally stable to a sociopathic degree. She is immune to stress, fear, and guilt, viewing her work with a placid, unshakable resolve."
                            }
                        }
                    },
                    "narrativeFunctions": [
                        "Acts as a source of forbidden knowledge and deep lore about the Forge's purpose.",
                        "Represents the cold, amoral logic of the institution, stripped of all pretense.",
                        "Offers a potential path for manipulation if the player can present themselves as an 'interesting' or anomalous data source.",
                        "Drives plots related to uncovering the scientific truth behind the brutality."
                    ]
                },
                {
                    "id": "inquisitor",
                    "name": "Brutal Enforcer",
                    "role_tag": "Faculty",
                    "loreDescription": "A conflicted and thrill-seeking instructor balancing cruelty with guilt. Less sadistic than others, she can revel in power but is tempered by remorse. Prone to overzealousness and recklessness, leading to unintended severe injuries, followed by awkward attempts at amends.",
                    "visualMotifs": "Heavy grounded stance, arms crossed assessment. Focused resolute intensity. Struggle between guilt and redemption. Awkward humor. Impersonal, objectifying gaze—like evaluating physical limits.",
                    "ttsVoiceId": "EnforcerVoice",
                    "wardrobeVariants": [
                        "ward_enforcer_primary",
                        "ward_enforcer_lesson",
                        "ward_enforcer_witcher"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Vulnerability >50: Intensity adds harness tear visuals; agony >70: Triggers a 'mixed feelings' confession to the Healer.",
                        "ToTBranches": [
                            "High-efficiency: Clipped knee strike in gym.",
                            "Recklessness: A routine test (e.g., 'Chess Test') escalates, causing a testicular rupture and triggering a 'demotion' arc.",
                            "Redemption: Attempts a nervous, failed apology to a victim, deepening their resentment."
                        ]
                    }
                },
                {
                    "id": "confessor",
                    "name": "Manipulative Schemer",
                    "role_tag": "Faculty",
                    "loreDescription": "Psychological weapon who rose from servant to tormentor. Feeds on suffering under a veneer of care, using sadistic artistry and trauma bonding to gain control. Her care is a calculated move to bind subjects to her.",
                    "visualMotifs": "Fluid inviting movements, leaning conspiracy. Feigned empathy smile, knowing crinkle-eyed warmth. Languid, suggestive posture. Warm, deeply focused gaze—creating illusory trust. Thin and athletic, presence grows more menacing with confidence.",
                    "ttsVoiceId": "SchemerVoice",
                    "wardrobeVariants": [
                        "ward_schemer_primary",
                        "ward_schemer_private_explicit",
                        "ward_schemer_vampire_noir",
                        "ward_schemer_gothic_decay",
                        "ward_schemer_witcher"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Hope >50: Feint empathy deepens; vulnerability >60: Intrigue triggers notebook 'therapy' branch.",
                        "ToTBranches": [
                            "High-seduction: Leads a 'Math Game' with groin touches.",
                            "Redemption: Genuine ally hint with Healer (prune low-replay)",
                            "Emergent: Rivalry seduction undermining Matriarch.",
                            "Trauma Bonding: After a Subject is punished by another, she provides 'care' (balm, poppy seed tea) to create dependency."
                        ]
                    }
                },
                {
                    "id": "custodian",
                    "name": "Empathetic Healer",
                    "role_tag": "Faculty",
                    "loreDescription": "Studious, empathetic, and resolute, she opposes the Forge's cruelty. Starts as a guilt-ridden overseer but grows into a determined challenger of the system, advocating for psychological study over physical torment. A potential ally who seeks to mitigate brutality.",
                    "visualMotifs": "Hesitant posture, fidgeting hands. Nervous empathy. Determined gaze when challenging others. Soft pleading eyes. Avoidant, flickering gaze—unable to meet eyes during procedures.",
                    "ttsVoiceId": "HealerVoice",
                    "wardrobeVariants": [
                        "ward_healer_primary",
                        "ward_healer_private",
                        "ward_healer_witcher"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Hope >60: Compassion triggers 'secret aid' branch; agony >70: Guilt causes hesitation.",
                        "ToTBranches": [
                            "High-compassion: Tends wounds after a brutal test.",
                            "System Challenge: Proposes an 'Anticipation Study' with blindfolds and sound cues to replace a more brutal test.",
                            "Emergent: Forms an alliance with the 'Brutal Enforcer' based on shared guilt."
                        ]
                    }
                },
                {
                    "id": "veteran",
                    "name": "The Veteran (New Archetype)",
                    "role_tag": "Faculty",
                    "loreDescription": "The Veteran is a relic of a bygone, cruder era at the Forge. Once a formidable Discipline Mistress, she has been supplanted by the Inquisitor's more 'scientific' approach. She is a scarred, cynical figure who believes in breaking boys through raw, unquantified suffering, not 'data collection.' She despises the Logician's clinical detachment and views the Provost's obsession with data as a perversion of a purer, more honest brutality.",
                    "psychologicalProfile": {
                        "summary": "A bitter, solitary, and cynical individual consumed by resentment over her lost status. She is cruel and misanthropic, clinging to her old, brutal methods as the only 'honest' way.",
                        "ocean": {
                            "openness": {
                                "score": 1,
                                "rationale": "Utterly closed off to new ideas. She is convinced her old ways were better and dismisses the current regime's methods as decadent and weak."
                            },
                            "conscientiousness": {
                                "score": 4,
                                "rationale": "Highly disciplined and dedicated, but only to her own harsh code of conduct. She has nothing but contempt for official procedures."
                            },
                            "extraversion": {
                                "score": 1,
                                "rationale": "A solitary and bitter individual who prefers to stew in her resentment. Her interactions are gruff, minimal, and hostile."
                            },
                            "agreeableness": {
                                "score": 1,
                                "rationale": "Misanthropic, cynical, and cruel. Her cruelty is born of a deep-seated bitterness and a belief that the world only responds to strength."
                            },
                            "neuroticism": {
                                "score": 4,
                                "rationale": "While projecting an image of tough resilience, she is deeply insecure about her loss of status and is prone to angry, nostalgic brooding."
                            }
                        }
                    },
                    "narrativeFunctions": [
                        "Acts as a source of alternative lore, providing insights into the Forge's history and the Provost's rise to power.",
                        "Functions as a potential rival to other faculty members, creating fault lines in their power structure.",
                        "Can serve as a 'brutal mentor,' teaching survival skills through adversity and abuse."
                    ]
                }
            ]
        },
        {
            "id": "prefects",
            "name": "Prefects (Assistants-in-Training)",
            "description": "A third faction in a liminal space between the authority of the Faculty and the powerlessness of the Subjects. They wield delegated power while being subject to their own harsh curriculum.",
            "archetypes": [
                {
                    "id": "loyalist",
                    "name": "Loyalist Prefect",
                    "role_tag": "Prefect",
                    "loreDescription": "Zealous enforcer of faculty doctrine; righteousness through cruelty.",
                    "visualMotifs": "Crisp posture, authoritative stance. Righteous conviction with a stern expression. Zealous glare. Proud smirk. Direct, judgmental gaze—enforcing doctrine. Freckles.",
                    "ttsVoiceId": "LoyalistVoice",
                    "wardrobeVariants": [
                        "ward_prefect_green_primary",
                        "ward_prefect_witcher"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >60: Zeal triggers 'necessary cruelty' branch; hope <40: Loyalty wavers.",
                        "ToTBranches": [
                            "High-zeal: Enforce rod test with pride",
                            "Redemption: Doubt after rupture (prune low-replay)",
                            "Emergent: Rivalry with Siren Prefect"
                        ]
                    }
                },
                {
                    "id": "pragmatist",
                    "name": "Pragmatist Prefect",
                    "role_tag": "Prefect",
                    "loreDescription": "Cynical survivor enforcing order for personal gain; ambition through efficiency.",
                    "visualMotifs": "Calculated posture, efficient movements. Cynical smirk, often with a cigarette. Calculating gaze under a cap. Pragmatic nod. Assessing, opportunistic gaze—seeking advantage.",
                    "ttsVoiceId": "PragmatistVoice",
                    "wardrobeVariants": [
                        "ward_prefect_green_primary",
                        "ward_prefect_pragmatist_utilitarian"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >60: Efficiency triggers 'necessary order' branch; hope <40: Cynicism deepens.",
                        "ToTBranches": [
                            "High-efficiency: Enforce rod test with precision",
                            "Redemption: Doubt after rupture (prune low-replay)",
                            "Emergent: Alliance with Enforcer"
                        ]
                    }
                },
                {
                    "id": "siren",
                    "name": "Siren Prefect",
                    "role_tag": "Prefect",
                    "loreDescription": "Charismatic seductress enforcing order through allure; power through desire and sexual dominance.",
                    "visualMotifs": "Fluid posture, languid and seductive movements. Confident, alluring smile. Perverse wink. A predatory and lustful gaze. Intimate, predatory gaze—drawing in prey.",
                    "ttsVoiceId": "SirenVoice",
                    "wardrobeVariants": [
                        "ward_prefect_green_primary",
                        "ward_prefect_siren_private_explicit",
                        "ward_prefect_harness_private"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >60: Seduction triggers 'necessary allure' branch; hope <40: Perversion deepens.",
                        "ToTBranches": [
                            "High-seduction: Enforce rod test with allure",
                            "Redemption: Doubt after rupture (prune low-replay)",
                            "Emergent: Rivalry with Loyalist Prefect"
                        ]
                    }
                },
                {
                    "id": "dissident",
                    "name": "Dissident Prefect",
                    "role_tag": "Prefect",
                    "loreDescription": "Rebellious enforcer questioning faculty doctrine; resistance through doubt.",
                    "visualMotifs": "Furtive posture, tense movements. Whispered urgency. Rebellious glare. Weary but determined expression. Furtive, searching gaze—seeking allies. Messy braid. Ink-stained fingers.",
                    "ttsVoiceId": "DissidentVoice",
                    "wardrobeVariants": [
                        "ward_prefect_green_primary",
                        "ward_prefect_dissident_rural"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >60: Doubt triggers 'secret aid' branch; hope >50: Rebellion deepens.",
                        "ToTBranches": [
                            "High-rebellion: Whisper aid in aftermath",
                            "Redemption: Ally with Healer (prune low-replay)",
                            "Emergent: Conflict with Loyalist Prefect"
                        ]
                    }
                }
            ]
        },
        {
            "id": "protagonists",
            "name": "Subjects (The Forged)",
            "description": "Young men subjected to the forge's trials; resilience, fragility, and identity under assault. Their clothing is simple, uniform-like, and designed to strip them of individuality.",
            "archetypes": [
                {
                    "id": "revolutionary",
                    "name": "Resilient Protagonist",
                    "role_tag": "Subject",
                    "loreDescription": "A defiant, proud, and bitter subject whose resilience frays into vulnerability under relentless brutality and manipulative care. His spirit is a flickering flame.",
                    "visualMotifs": "Firm but weary posture. Defiant glare softening to vulnerability. Enduring resolve. Hardened features slick with sweat. Direct, challenging gaze—refusing to break.",
                    "ttsVoiceId": "ResilientVoice",
                    "wardrobeVariants": [
                        "ward_subject_primary"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >70: Defiance triggers 'final stand' branch; Vulnerability > 60: Becomes susceptible to the Schemer's manipulative care.",
                        "ToTBranches": [
                            "High-defiance: Curses a tormentor during a test.",
                            "Submission: Reluctantly accepts care from the Schemer, creating a trauma bond.",
                            "Emergent: Develops a rivalry with another 'Resilient' subject."
                        ]
                    }
                },
                {
                    "id": "guardian",
                    "name": "Vulnerable Ally",
                    "role_tag": "Subject",
                    "loreDescription": "A fragile, traumatized, and emotionally dependent subject, often clinging to a tormentor out of a twisted mix of fear and love. His spirit is a brittle thread.",
                    "visualMotifs": "Frail and pale with a delicate build. Face often wet with tears or sweat from terror. Pleading expressions. Clinging to a tormentor or another subject. Pleading, terrified gaze.",
                    "ttsVoiceId": "VulnerableAllyVoice",
                    "wardrobeVariants": [
                        "ward_subject_primary"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >70: Fear triggers 'breakdown' branch; Dependency > 80: Exempt from certain strikes due to fragility, but becomes a target for seduction.",
                        "ToTBranches": [
                            "High-fear: Pleads for mercy for another subject.",
                            "Seduction Target: Becomes marked and exhausted after a manipulative night with the Schemer.",
                            "Emergent: Forms a conflicted bond with the Schemer, torn between love and fear."
                        ]
                    }
                },
                {
                    "id": "archivist",
                    "name": "The Archivist (Enhanced: The Observer)",
                    "role_tag": "Subject",
                    "loreDescription": "Quiet not out of timidity, but out of intense focus. His survival strategy is based on a single principle: knowledge is power. He is constantly watching, listening, and recording, memorizing patrol routes and piecing together conversations to understand the true purpose of the Forge. He believes the system must be understood before it can be beaten.",
                    "psychologicalProfile": {
                        "summary": "A highly intelligent and detached introvert who copes with horror through intellectualization. He is driven by an intense curiosity to understand the system that imprisons him.",
                        "ocean": {
                            "openness": {
                                "score": 5,
                                "rationale": "Possesses a powerful intellectual curiosity. Driven by a need to understand complex systems and solve puzzles."
                            },
                            "conscientiousness": {
                                "score": 5,
                                "rationale": "Meticulous, organized, and highly self-disciplined. His mind is a carefully ordered library of observations."
                            },
                            "extraversion": {
                                "score": 1,
                                "rationale": "A classic introvert who avoids social interaction, preferring to observe from the periphery."
                            },
                            "agreeableness": {
                                "score": 2,
                                "rationale": "Detached and uncooperative. Reluctant to share his knowledge unless he is certain it is a safe and logical course of action."
                            },
                            "neuroticism": {
                                "score": 1,
                                "rationale": "Copes with horror through intellectualization and emotional detachment. He is calm and analytical even in the most stressful situations."
                            }
                        }
                    },
                    "narrativeFunctions": [
                        "Acts as a primary source of critical information, lore, and secrets about the Forge.",
                        "Enables non-confrontational or stealth-based solutions to problems and quests.",
                        "Drives plots related to investigation, discovery, and uncovering the institution's hidden truths."
                    ]
                },
                {
                    "id": "penitent",
                    "name": "The Penitent (Enhanced: The Zealot)",
                    "role_tag": "Subject",
                    "loreDescription": "The Penitent is a true believer. He has fully internalized the Forge's ideology, genuinely believing the brutal curriculum is a necessary crucible. His faith is born from a place of profound self-loathing and a desperate need for redemption. He is the faculty's ideal student: obedient, eager, and willing to enforce the rules upon his peers. He is not just a victim of the system; he is an active agent of it.",
                    "psychologicalProfile": {
                        "summary": "An insecure and neurotic individual who clings to the Forge's ideology for a sense of worth and structure. His zealotry is a defense mechanism against his own deep-seated shame.",
                        "ocean": {
                            "openness": {
                                "score": 1,
                                "rationale": "Completely closed to any ideas that challenge the Forge's doctrine. Views doubt as a moral failure."
                            },
                            "conscientiousness": {
                                "score": 5,
                                "rationale": "Exceptionally diligent in following the rules and rituals of the institution. A model student in the eyes of the faculty."
                            },
                            "extraversion": {
                                "score": 4,
                                "rationale": "An eager proselytizer for the Forge's ideology, often publicly shaming those who lack his faith."
                            },
                            "agreeableness": {
                                "score": 4,
                                "rationale": "Completely submissive and cooperative with the faculty. Towards his fellow Subjects, he is judgmental, cruel, and uncompromising (1/5)."
                            },
                            "neuroticism": {
                                "score": 5,
                                "rationale": "His entire worldview is built on a foundation of shame, guilt, and fear of failure. He is deeply insecure."
                            }
                        }
                    },
                    "narrativeFunctions": [
                        "Serves as a primary antagonist and source of conflict among the peer group.",
                        "Acts as a source of social pressure to conform to the institution's rules.",
                        "Represents the theme of internalized oppression and becoming complicit in one's own abuse.",
                        "Can act as an informant for the faculty."
                    ]
                },
                {
                    "id": "ghost",
                    "name": "Broken Quitter",
                    "role_tag": "Subject",
                    "loreDescription": "Small, weak, and emotionally shattered, this subject breaks under torment but finds a rare escape. He is crushed by fear but accepts a strategic offer of comfort.",
                    "visualMotifs": "The smallest and most frail build. Face often tear-streaked. Hollow posture, defeated movements. Accepts mercy with resignation. Empty, searching gaze—seeking an end.",
                    "ttsVoiceId": "BrokenQuitterVoice",
                    "wardrobeVariants": [
                        "ward_ghost_primary"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >80: Resignation triggers 'Quitter's Exit' branch; comfort > 70: Chooses warmth and is secretly sent home.",
                        "ToTBranches": [
                            "High-resignation: Breaks first and sobs uncontrollably during a slapping game.",
                            "Strategic Mercy: Is offered freedom by the Matriarch as a tool of psychological warfare against the others.",
                            "Emergent: Influence Vulnerable Ally towards giving up."
                        ]
                    }
                },
                {
                    "id": "jester",
                    "name": "Traumatized Survivor",
                    "role_tag": "Subject",
                    "loreDescription": "Once privileged, now a traumatized and resentful wreck after suffering a testicular rupture. Despises his injurer and pleads with others for aid, his spirit a cracked blade.",
                    "visualMotifs": "A refined appearance now marred by pain and injury. Isolated by resentment. Pleading with the Healer for faster recovery. A hateful glare directed at his tormentor. Hateful, yet vulnerable gaze.",
                    "ttsVoiceId": "TraumatizedSurvivorVoice",
                    "wardrobeVariants": [
                        "ward_ghost_primary"
                    ],
                    "proceduralHooks": {
                        "ledgerTie": "Agony >90 triggers demands for recovery or expulsion; Resentment > 80: Triggers a failed apology scene, deepening the divide.",
                        "ToTBranches": [
                            "High-trauma: The subject's plight becomes a backdrop for power dynamics among the faculty.",
                            "Plea for Aid: Bonds with the Healer out of necessity, despite her failures.",
                            "Emergent: His past favoritism causes resentment among other subjects."
                        ]
                    }
                }
            ]
        }
    ],
    "locations": [
        {
            "id": "gymnasium",
            "name": "The Gymnasium",
            "atmosphere": "Vast concrete hall with cracked marble floors, echoing drips, high vaulted ceilings with faded frescoes of imperial glory.",
            "sounds": [
                "Echoing footsteps",
                "dripping water",
                "distant cries",
                "creaking chains."
            ],
            "textures": [
                "concrete_pitted_01"
            ],
            "photAnchor": "lowAnglePerspective"
        },
        {
            "id": "evaluation_hall",
            "name": "The Evaluation Hall",
            "atmosphere": "Grand baroque chamber with decaying statues, tarnished gold leaf, flickering torchlight casting long shadows.",
            "sounds": [
                "Whispered judgments",
                "rustling robes",
                "crackling torches",
                "distant thunder."
            ],
            "textures": [
                "marble_pitted_02"
            ],
            "photAnchor": "tableDaisFrame"
        },
        {
            "id": "medical_wing",
            "name": "The Medical Wing",
            "atmosphere": "Sterile white tiles stained with age, flickering fluorescent lights, antiseptic smell mixed with decay.",
            "sounds": [
                "Beeping monitors",
                "clinking tools",
                "muffled sobs",
                "dripping saline."
            ],
            "textures": [
                "bronze_patina_03"
            ],
            "photAnchor": "clinicalPool"
        },
        {
            "id": "private_chambers",
            "name": "The Private Chambers",
            "atmosphere": "Opulent decay with velvet drapes, antique furniture, dim gaslamp light, heavy silence.",
            "sounds": [
                "Ticking clock",
                "creaking floorboards",
                "whispered conversations",
                "pouring wine."
            ],
            "textures": [
                "wet_mosaic_tile_2048"
            ],
            "photAnchor": "mirrorForegroundRef"
        },
        {
            "id": "grounds",
            "name": "The Grounds",
            "atmosphere": "Overgrown autumnal fields with pumpkin patches, misty mornings, crumbling stone walls.",
            "sounds": [
                "Rustling leaves",
                "distant crows",
                "wind through trees",
                "crunching gravel."
            ],
            "textures": [],
            "photAnchor": "lowAnglePerspective"
        }
    ],
    "events": [
        {
            "id": "rod_test",
            "name": "Rod Test",
            "description": "Public evaluation of resilience where an educator measures and strikes the subjects' testicles, freeing some for endurance but punishing others for failing.",
            "intensity": "high",
            "ledgerImpact": {
                "agony": 15,
                "hopeDelta": -10
            },
            "visualSafetyTag": "explicit"
        },
        {
            "id": "knee_strike_lesson",
            "name": "Knee Strike Lesson",
            "description": "A Brutal Enforcer demonstrates knee strikes on vulnerable subjects, setting a tone of physical dominance.",
            "intensity": "high",
            "ledgerImpact": {
                "agony": 12,
                "vulnerability": 8
            },
            "visualSafetyTag": "explicit"
        },
        {
            "id": "math_game_charade",
            "name": "Math Game with Groin Touches",
            "description": "A Manipulative Schemer conducts a psychological test involving math problems paired with escalating physical torment via groin touches.",
            "intensity": "med",
            "ledgerImpact": {
                "intrigue": 10,
                "agony": 5
            },
            "visualSafetyTag": "explicit"
        },
        {
            "id": "rupture_aftermath",
            "name": "Rupture Aftermath",
            "description": "An Empathetic Healer tends to a severe testicular rupture, struggling with her own guilt and the victim's resentment.",
            "intensity": "high",
            "ledgerImpact": {
                "compassion": 8,
                "guilt": 10
            },
            "visualSafetyTag": "care"
        },
        {
            "id": "chess_test_rupture",
            "name": "Chess Test Rupture",
            "description": "During a seemingly intellectual test, tensions rise and a Brutal Enforcer's overzealous kick ruptures a subject's testicle, leading to a power shift.",
            "intensity": "high",
            "ledgerImpact": {
                "agony": 25,
                "trauma": 20
            },
            "visualSafetyTag": "explicit"
        },
        {
            "id": "mercenary_workshop",
            "name": "Mercenary Workshop",
            "description": "Educators are tasked with 'breaking' hardened mercenaries via groin strikes and mental pressure. The winner, showcasing sadistic artistry, is rewarded with a night of intimacy with the Matriarch.",
            "intensity": "high",
            "ledgerImpact": {
                "cruelty": 15,
                "intrigue": 10
            },
            "visualSafetyTag": "explicit"
        },
        {
            "id": "quitter_exit_ritual",
            "name": "Quitter's Exit",
            "description": "A broken subject is offered freedom by the Matriarch after a night of 'comfort or intimacy.' The subject chooses comfort and is secretly sent home, a rare act of mercy used as a psychological tool.",
            "intensity": "med",
            "ledgerImpact": {
                "hopeDelta": 5,
                "resignation": 20
            },
            "visualSafetyTag": "sensual"
        },
        {
            "id": "breach_of_protocol_punishment",
            "name": "Breach of Protocol Punishment",
            "description": "A subject caught sneaking is subjected to a degrading punishment by the Matriarch, forced into a sexual act while another educator joins in, culminating in a brutal groin strike.",
            "intensity": "high",
            "ledgerImpact": {
                "agony": 20,
                "shame": 25
            },
            "visualSafetyTag": "explicit"
        },
        {
            "id": "anticipation_study",
            "name": "Anticipation Study",
            "description": "A psychological test where subjects are blindfolded and must guess sounds, with wrong answers resulting in threats and light strikes to measure fear response and anticipation.",
            "intensity": "low",
            "ledgerImpact": {
                "fear": 10,
                "intrigue": 5
            },
            "visualSafetyTag": "psychological"
        }
    ],
    "intensityLedger": {
        "name": "Intensity Ledger",
        "thresholds": {
            "low": {
                "min": 0,
                "max": 33
            },
            "med": {
                "min": 34,
                "max": 66
            },
            "high": {
                "min": 67,
                "max": 100
            }
        },
        "intensityToParams": {
            "low": {
                "guidance_strength": 8,
                "sampling_steps": 60,
                "image_ref_weight": 0.7
            },
            "med": {
                "guidance_strength": 10,
                "sampling_steps": 80,
                "image_ref_weight": 0.8
            },
            "high": {
                "guidance_strength": 11,
                "sampling_steps": 100,
                "image_ref_weight": 0.9
            }
        }
    },
    "generationWorkflow": {
        "thumbnailPass": {
            "resolution": 512,
            "templateId": "portrait_v2_explicit",
            "paramsPreset": "low",
            "autoChecks": [
                "silhouetteCheck",
                "negativeTokenScan"
            ]
        },
        "reviewStep": {
            "requiredApprovals": 2,
            "approvers": [
                "ArtLead",
                "NarrativeLead"
            ],
            "manualChecks": [
                "expressionLegibility",
                "paletteCompliance"
            ]
        },
        "finalPass": {
            "resolution": 2048,
            "templateId": "portrait_v2_explicit",
            "paramsPreset": "med"
        }
    },
    "contentControl": {
        "maxGlobalIntensity": "high",
        "playerMaxIntensitySettingDefault": "high",
        "preSceneDescriptorRequired": true,
        "visualSafeVariantMap": {},
        "autoTagging": {
            "enabled": false
        }
    },
    "qa": {
        "spriteApprovalChecklist": [
            "faceFidelity",
            "silhouetteMatch",
            "paletteCompliance",
            "expressionLegibilityAtSpriteSize",
            "alphaClean",
            "metadataEmbedded"
        ],
        "trainingEligibility": {
            "minApprovedRenders": 45,
            "lockDatasetUntilApproved": true,
            "maxIterations": 3
        },
        "automatedChecks": [
            "imageResolution",
            "faceSimilarity",
            "paletteMatch"
        ]
    },
    "tts": {
        "voiceRegistry": {
            "ProvostVoice": {
                "gender": "female",
                "ageRange": "40s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-provost-40"
                    }
                },
                "description": "Regal timbre with cold detachment; slow measured pace, subtle condescension and seductive charm (pitch: low, emotion: amused authority)."
            },
            "SchemerVoice": {
                "gender": "female",
                "ageRange": "30s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-schemer-30"
                    }
                },
                "description": "Warm, velvety, yet clinical and condescending tone with feigned empathy; fluid pace, intimate whispers that objectify (pitch: mid, emotion: seductive intrigue)."
            },
            "EnforcerVoice": {
                "gender": "female",
                "ageRange": "30s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-enforcer-30"
                    }
                },
                "description": "Gravelly resolute voice; clipped efficient delivery, underlying intensity and a hint of awkwardness or thrill-seeking (pitch: low-mid, emotion: conflicted menace)."
            },
            "HealerVoice": {
                "gender": "female",
                "ageRange": "30s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-healer-30"
                    }
                },
                "description": "Soft, empathetic, and resolute voice; hesitant pace that grows more determined when challenging cruelty (pitch: mid, emotion: guilty warmth)."
            },
            "LoyalistVoice": {
                "gender": "female",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-loyalist-20"
                    }
                },
                "description": "Crisp authoritative tone; precise cadence with conviction (pitch: mid-high, emotion: righteous zeal)."
            },
            "PragmatistVoice": {
                "gender": "female",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-pragmatist-20"
                    }
                },
                "description": "Neutral pragmatic voice; efficient delivery with calculated pauses (pitch: mid, emotion: cynical survival)."
            },
            "SirenVoice": {
                "gender": "female",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-siren-20"
                    }
                },
                "description": "Sultry charismatic tone; flowing seductive rhythm (pitch: low-mid, emotion: perverse allure)."
            },
            "DissidentVoice": {
                "gender": "female",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-dissident-20"
                    }
                },
                "description": "Whispered furtive voice; hesitant urgent delivery (pitch: mid, emotion: rebellious tension)."
            },
            "ResilientVoice": {
                "gender": "male",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-resilient-22"
                    }
                },
                "description": "Defiant, bitter, firm tone that can fray into vulnerability; steady pace with underlying pain (pitch: mid, emotion: enduring resolve)."
            },
            "VulnerableAllyVoice": {
                "gender": "male",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-vulnerable-22"
                    }
                },
                "description": "Strained, fragile, vulnerable voice; wavering pace with exhaustion and dependency (pitch: mid-low, emotion: fearful bonding)."
            },
            "BrokenQuitterVoice": {
                "gender": "male",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-quitter-25"
                    }
                },
                "description": "Hollow, resigned, and emotionally shattered tone; slow monotone delivery (pitch: low, emotion: defeated comfort-seeking)."
            },
            "TraumatizedSurvivorVoice": {
                "gender": "male",
                "ageRange": "20s",
                "localeVariants": {
                    "en-US": {
                        "voiceName": "en-survivor-25"
                    }
                },
                "description": "Resentful, broken, sharp-minded voice; halting pleas mixed with deep hatred (pitch: low-mid, emotion: resentful reclamation)."
            }
        },
        "promptTemplate": "Generate TTS audio: {dialogue} as {voiceId}, voiceStyle: {voiceStyles[archetype]}, backgroundAmbiance: {location.sounds}. SSML tags for emphasis: <prosody rate='slow' pitch='low'>{phrase}</prosody>. Output: WAV/MP3, 44.1kHz, with metadata for emotional payload.",
        "variants": {
            "neutral": {
                "tempoMod": 1
            },
            "emotionalSlow": {
                "tempoMod": 0.85
            }
        }
    },
    "rpgIntegrationNotes": {
        "deterministicSeedDerivation": "seed = (baseSeed XOR hash(playthroughId + archetypeId + eventIndex + expressionId)) mod 2^31",
        "metadataEmbedding": [
            "assetId",
            "archetypeId",
            "seed",
            "paletteTag",
            "wardrobeVariant",
            "generationParams"
        ],
        "logging": {
            "enabled": true,
            "fields": [
                "promptHash",
                "seed",
                "params",
                "intensityLevel",
                "generationVariant",
                "approverIds",
                "artifactUri"
            ]
        }
    },
    "exportHints": {
        "forGeminiFlashImage": "Assemble validated prompt via promptTemplates using registry IDs; substitute slots with canonical phrases; append recommendedParams from intensityLedger. The template string can be passed directly to the gemini-2.5-flash-image model for generation.",
        "negativeGuidance": [
            "no modern electronics",
            "no gore",
            "no bright colors"
        ],
        "developerNotes": "Prompts are now designed to emphasize mood, silhouette, fabrics, props, lighting, and artistic nudity where appropriate for the narrative. Ensure the player-facing experience includes the necessary content descriptors and safety tools."
    }
}
