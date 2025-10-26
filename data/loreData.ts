
export const initialLoreBible = {
  "schemaMeta": {
    "schemaVersion": "2.8",
    "createdBy": "Designer-Jan",
    "createdAt": "2025-10-26T18:02:00Z",
    "lastModifiedAt": "2025-10-27T14:00:00Z",
    "changeLog": [
      {
        "version": "2.7",
        "date": "2025-10-27T13:00:00Z",
        "author": "The Forge's Attentive Eye",
        "changes": "Corrected generation pipeline based on new information. All image generation prompts and export hints have been updated to target the 'Nano Banana' (gemini-2.5-flash-image) model directly, removing all references to Imagen. This reflects a unified, state-of-the-art generation workflow."
      },
      {
        "version": "2.8",
        "date": "2025-10-27T14:00:00Z",
        "author": "The Forge's Attentive Eye",
        "changes": "Integrated narrative events, character arcs, and thematic depth from provided documents, images, and audio. Mapped named characters to archetypes (e.g., Selene->Sadistic Matriarch, Lyra->Manipulative Schemer, Mara->Empathetic Healer, Aveena->Brutal Enforcer). Added new event templates (Rupture Test, Mercenary Workshop, Quitter's Exit) and procedural branches based on story progression. Enriched wardrobe, motifs, and TTS descriptions with multimodal analysis."
      }
    ]
  },
  "meta": {
    "title": "The Forge's Loom — Visual Bible Schema (v2.8 - Narrative Integration)",
    "description": "Extensible JSON adapted for the 'Nano Banana' (gemini-2.5-flash-image) generation model. This version integrates a deep analysis of narrative documents, audio, and images to create a rich library of procedural events and character behaviors, restoring explicit themes.",
    "notes": "Generation model: Adapted for direct use with 'Nano Banana' (gemini-2.5-flash-image). This version adds significant narrative logic and event templates based on provided story summaries, mapping specific actions (ruptures, seductions, punishments) to procedural triggers."
  },
  "registries": {
    "lightingPresets": [
      { "id": "topDownHarsh", "label": "Top-down harsh", "desc": "Strong overhead key; sharp shadows" },
      { "id": "rimWarm", "label": "Rim warm", "desc": "Warm rim light; subject edge highlights" },
      { "id": "fillCool", "label": "Fill cool", "desc": "Cool fill light to balance shadows" },
      { "id": "warmLamplight", "label": "Warm lamplight", "desc": "Soft amber local lamps" },
      { "id": "clinicalPool", "label": "Clinical pool", "desc": "Cold, clinical overhead pool" },
      { "id": "singleShaft", "label": "Single shaft", "desc": "Single dramatic shaft of light" },
      { "id": "steamGlow", "label": "Steam glow", "desc": "Soft diffused light through steam/haze" },
      { "id": "candleHalo", "label": "Candle halo", "desc": "Soft flickering candlelight halo" }
    ],
    "paletteTags": [
      { "id": "charcoalGold", "label": "Charcoal + Gold", "colors": ["#2B2B2B", "#A77A3A"] },
      { "id": "stoneBronze", "label": "Stone + Bronze", "colors": ["#6E6E6E", "#7A5A3C"] },
      { "id": "deepUmber", "label": "Deep Umber", "colors": ["#4A3626", "#7C0A0A"] },
      { "id": "mutedEarth", "label": "Muted Earth", "colors": ["#8E7A6F", "#C98B3B"] },
      { "id": "ashGray", "label": "Ash Gray", "colors": ["#9E9E9E", "#6B6B6B"] },
      { "id": "darkGreen", "label": "Dark Green", "colors": ["#27432F", "#6A8B5E"] }
    ],
    "photographicAnchors": [
      { "id": "mirrorForegroundRef", "label": "Mirror foreground", "desc": "Round ornate mirror framing the subject in the foreground" },
      { "id": "lowAnglePerspective", "label": "Low-angle", "desc": "View from below to emphasize stature or presence" },
      { "id": "belowFootPerspective", "label": "Below-foot", "desc": "Foreshortened legs/feet dominant in foreground" },
      { "id": "statueBackdrop", "label": "Statue backdrop", "desc": "Large marble statue or carved frieze behind subject" },
      { "id": "tableDaisFrame", "label": "Dais & table frame", "desc": "Raised dais and long table framing scene" },
      { "id": "steamObscuredForeground", "label": "Steam obscured", "desc": "Steam/haze partially obscures foreground figures for mood" },
      { "id": "closeUpImpact", "label": "Close-up on impact", "desc": "Tight shot focusing on the point of a kick or strike" },
      { "id": "ritualSubmersion", "label": "Ritual submersion", "desc": "Figure partially submerged in dark water, surrounded by others" }
    ],
    "textureRefs": [
      { "id": "marble_pitted_02", "type": "albedo", "resolution": 2048, "notes": "tileable, worn marble reliefs" },
      { "id": "concrete_pitted_01", "type": "albedo", "resolution": 2048, "notes": "poured concrete with chips and stains" },
      { "id": "bronze_patina_03", "type": "albedo", "resolution": 2048, "notes": "patinated bronze with engraved detail" },
      { "id": "wet_mosaic_tile_2048", "type": "albedo", "resolution": 2048, "notes": "wet sheen mosaic tile detail" }
    ],
    "propTokens": [
      { "id": "silverBrooch", "label": "Silver brooch", "usage": ["lapel", "closeup"] },
      { "id": "leatherGloves", "label": "Leather gloves", "usage": ["gesture detail", "costume"] },
      { "id": "carvedLedger", "label": "Carved ledger", "usage": ["archive closeups", "prop in hand"] },
      { "id": "brassRecorder", "label": "Brass recorder", "usage": ["lab backgrounds", "research shots"] },
      { "id": "salveJar", "label": "Salve jar", "usage": ["infirmary closeups"] },
      { "id": "pleatedSkirt", "label": "Pleated skirt", "usage": ["prefect uniform", "motion study"] },
      { "id": "ascot", "label": "Ascot", "usage": ["formal accent"] },
      { "id": "goblet", "label": "Goblet", "usage": ["feast scenes"] },
      { "id": "helmetProp", "label": "Helmet prop", "usage": ["statue elements", "relic displays"] },
      { "id": "newsboyCap", "label": "Newsboy cap", "usage": ["pragmatist accent"] },
      { "id": "kryks", "label": "Kryks", "usage": ["seduction tool", "torment device"] },
      { "id": "poppySeedTea", "label": "Poppy seed tea", "usage": ["manipulative care item", "forbidden substance"] }
    ],
    "silhouetteTokens": [
      { "id": "sil_PROV_v1", "label": "Provost silhouette" },
      { "id": "sil_ENFORCER_v1", "label": "Enforcer silhouette" },
      { "id": "sil_GHOST_v1", "label": "Ghost silhouette" },
      { "id": "sil_SIREN_v1", "label": "Charismatic Prefect silhouette" },
      { "id": "sil_HEALER_v1", "label": "Healer silhouette" }
    ],
    "wardrobeTokens": [
      { "id": "ward_prov_primary", "label": "Provost primary", "styleTags": ["tailored", "formal", "militaristic"], "materialTags": ["velvet", "silk", "leather"], "recommendedPalette": "charcoalGold", "notes": "Tailored charcoal velvet blazer with militaristic shoulders, blood-crimson silk blouse, black leather gloves, dark wool trousers/skirt for monolithic silhouette." },
      { "id": "ward_prov_ceremonial", "label": "Provost ceremonial", "styleTags": ["ceremonial", "voluminous"], "materialTags": ["velvet", "embroidery"], "recommendedPalette": "deepUmber", "notes": "Floor-length voluminous blood-crimson velvet robes with tarnished gold Ouroboros embroidery on hem/collar." },
      { "id": "ward_prov_private", "label": "Provost private", "styleTags": ["severe", "formal"], "materialTags": ["wool", "silver"], "recommendedPalette": "charcoalGold", "notes": "Severe wool ensemble with antique silver brooch (lion/serpent motif), golden goblet prop." },
      { "id": "ward_prov_vampire_noir", "label": "Provost vampire noir", "styleTags": ["noir", "seductive"], "materialTags": ["lace", "velvet"], "recommendedPalette": "deepUmber", "notes": "Black lace-trimmed cape over a revealing crimson gown, high collar with embroidered serpents, velvet gloves for dramatic gestures." },
      { "id": "ward_prov_gothic_decay", "label": "Provost gothic decay", "styleTags": ["decayed", "imperial"], "materialTags": ["velvet", "lace", "gold"], "recommendedPalette": "deepUmber", "notes": "Worn roman stola fused with gothic lace, stained burgundy velvet with patches, tiara of tarnished gold for matriarchal authority." },
      { "id": "ward_prov_witcher", "label": "Provost rune robe", "styleTags": ["layered", "arcane", "sorceress"], "materialTags": ["wool", "fur", "obsidian"], "recommendedPalette": "charcoalGold", "notes": "Long, layered robe of deep midnight wool with silver rune embroidery; high mandarin collar lined with wolf-fur; corseted waist with obsidian star brooch; violet silk under-dress." },
      { "id": "ward_prov_off_shoulder_corset", "label": "Provost off-shoulder corset", "styleTags": ["alluring", "fantasy"], "materialTags": ["velvet", "lace", "silver"], "recommendedPalette": "deepUmber", "notes": "Off-shoulder black velvet corset with lace-up front, thigh-high garters, flowing stola-inspired skirt in crimson, silver serpent brooch." },
      { "id": "ward_prov_statue_hall", "label": "Provost statue hall", "styleTags": ["classical", "formal"], "materialTags": ["wool", "cotton"], "recommendedPalette": "deepUmber", "notes": "Pleated wool skirt in deep burgundy, white collared blouse with high neck, draped cardigan cape, polished oxfords for imperial poise." },
      { "id": "ward_prov_harness", "label": "Provost harness", "styleTags": ["dominant", "edgy"], "materialTags": ["leather", "silk", "ruby"], "recommendedPalette": "charcoalGold", "notes": "Leather harness over a sheer silk blouse, black trousers with belt chains, lace-trimmed gloves, tiara with ruby accents." },
      { "id": "ward_prov_plaid_rural", "label": "Provost plaid rural", "styleTags": ["rural", "autumnal"], "materialTags": ["wool", "embroidery"], "recommendedPalette": "mutedEarth", "notes": "Plaid wool shift dress with freckled embroidery, braided belt, sturdy boots, autumnal cape for decay fusion." },
      { "id": "ward_prov_daily_embroidered", "label": "Provost daily embroidered", "styleTags": ["daily", "formal"], "materialTags": ["embroidery", "wool"], "recommendedPalette": "darkGreen", "notes": "Embroidered white blouse with rune patterns, wool skirt with pleats, green ascot tie, cardigan for formal oversight." },
      { "id": "ward_schemer_primary", "label": "Schemer primary", "styleTags": ["draped", "academic"], "materialTags": ["velvet", "silk"], "recommendedPalette": "stoneBronze", "notes": "Layered deep-umber velvet academic robes with draped scarf/shawl for face obscuring." },
      { "id": "ward_schemer_private_explicit", "label": "Schemer private explicit", "styleTags": ["intimate", "seductive", "revealing"], "materialTags": ["silk", "satin", "lace"], "recommendedPalette": "stoneBronze", "notes": "Elegant, sheer silk kimono or a dark satin dressing gown worn open over a lace slip, projecting manufactured vulnerability and sexual confidence." },
      { "id": "ward_schemer_vampire_noir", "label": "Schemer vampire noir", "styleTags": ["alluring", "noir"], "materialTags": ["lace", "velvet"], "recommendedPalette": "deepUmber", "notes": "Black lace blouse with a plunging neckline, burgundy velvet skirt, capelet with embroidery for dramatic flair." },
      { "id": "ward_schemer_gothic_decay", "label": "Schemer gothic decay", "styleTags": ["decayed", "elegant"], "materialTags": ["silk", "lace", "jewels"], "recommendedPalette": "stoneBronze", "notes": "Stained silk gown with gothic patches, lace-trimmed shawl mirroring roman palla, tiara of faded jewels." },
      { "id": "ward_schemer_witcher", "label": "Schemer witcher", "styleTags": ["sorceress", "intrigue"], "materialTags": ["wool", "lace", "obsidian"], "recommendedPalette": "stoneBronze", "notes": "Flowing layered robe of dark plum wool with silver rune embroidery on inner sleeves; low neckline with lace inset; corseted waist with obsidian crescent brooch." },
      { "id": "ward_enforcer_primary", "label": "Enforcer primary", "styleTags": ["utility", "durable", "imposing"], "materialTags": ["wool", "fur", "leather", "canvas"], "recommendedPalette": "deepUmber", "notes": "Heavy dark wool greatcoat with bulky fur collar over a leather jerkin/harness, canvas trousers, steel-toed knee-high boots." },
      { "id": "ward_enforcer_lesson", "label": "Enforcer lesson", "styleTags": ["utility", "durable"], "materialTags": ["leather", "canvas", "linen"], "recommendedPalette": "deepUmber", "notes": "Removed greatcoat revealing harness, dark linen undershirt with rolled sleeves, scarred forearms." },
      { "id": "ward_enforcer_witcher", "label": "Enforcer witcher", "styleTags": ["warrior", "sorceress"], "materialTags": ["wool", "leather", "obsidian"], "recommendedPalette": "deepUmber", "notes": "Heavy wool greatcoat with silver rune embroidery on inner lining; leather jerkin with obsidian star brooch; corseted waist with alchemical vials; canvas trousers tucked into armored boots." },
      { "id": "ward_healer_primary", "label": "Healer primary", "styleTags": ["medical", "soft"], "materialTags": ["linen", "wool"], "recommendedPalette": "mutedEarth", "notes": "White linen medical coat with rolled sleeves, soft wool skirt, freckled apron with medical tools." },
      { "id": "ward_healer_private", "label": "Healer private", "styleTags": ["soft", "simple"], "materialTags": ["wool"], "recommendedPalette": "mutedEarth", "notes": "Soft cardigan over simple dress, trembling hands holding salve jar." },
      { "id": "ward_healer_witcher", "label": "Healer witcher", "styleTags": ["alchemist", "healer"], "materialTags": ["wool", "lace", "obsidian"], "recommendedPalette": "mutedEarth", "notes": "Layered robe of soft grey wool with silver rune embroidery on inner sleeves; low neckline with lace inset; corseted waist with obsidian crescent brooch; leather belt with alchemical vials." },
      { "id": "ward_prefect_green_primary", "label": "Prefect green uniform", "styleTags": ["uniform", "formal"], "materialTags": ["wool", "cotton"], "recommendedPalette": "darkGreen", "notes": "Green blazer with insignia, pleated skirt, ascot." },
      { "id": "ward_prefect_witcher", "label": "Prefect witcher uniform", "styleTags": ["uniform", "arcane"], "materialTags": ["wool", "silver", "obsidian"], "recommendedPalette": "darkGreen", "notes": "Green wool blazer with silver rune embroidery on inner lining; white blouse with lace inset; corseted waist with obsidian star brooch; pleated skirt with violet silk underlayer." },
      { "id": "ward_prefect_pragmatist_utilitarian", "label": "Prefect pragmatist utilitarian", "styleTags": ["utilitarian", "formal-adjacent"], "materialTags": ["tweed", "cotton"], "recommendedPalette": "mutedEarth", "notes": "Dark tweed jacket, white shirt with bow tie, newsboy cap. Practicality over institutional purity." },
      { "id": "ward_prefect_siren_private_explicit", "label": "Prefect siren private explicit", "styleTags": ["alluring", "confident", "revealing"], "materialTags": ["silk", "cotton", "lace"], "recommendedPalette": "stoneBronze", "notes": "Cream-colored puff-sleeve blouse with a deep v-neck and several buttons undone, tucked into high-waisted dark trousers with a thick belt." },
      { "id": "ward_prefect_dissident_rural", "label": "Prefect dissident rural", "styleTags": ["rural", "practical", "disguised"], "materialTags": ["plaid", "linen"], "recommendedPalette": "mutedEarth", "notes": "Plaid pinafore or overalls worn over a simple white blouse. For secret work on the grounds." },
      { "id": "ward_prefect_harness_private", "label": "Prefect harness private", "styleTags": ["edgy", "dominant"], "materialTags": ["leather", "linen"], "recommendedPalette": "deepUmber", "notes": "A simple leather harness worn over an earthy-toned peasant dress, for private enforcement or intimidation." },
      { "id": "ward_subject_primary", "label": "Subject basic", "styleTags": ["simple", "worn"], "materialTags": ["linen", "canvas"], "recommendedPalette": "mutedEarth", "notes": "Simple, thin linen shirt and canvas trousers, often damp or stained. Designed to strip individuality and highlight vulnerability." },
      { "id": "ward_subject_ceremonial_bondage", "label": "Subject ceremonial bondage", "styleTags": ["submissive", "ritualistic"], "materialTags": ["leather", "metal"], "recommendedPalette": "ashGray", "notes": "Leather collar and wrist cuffs, with trousers pulled down to the knees, for ritual humiliation scenes." },
      { "id": "ward_ghost_primary", "label": "Ghost ragged", "styleTags": ["tattered", "faded"], "materialTags": ["linen", "cloth"], "recommendedPalette": "ashGray", "notes": "Ragged grey linen tunic and worn cloth." }
    ],
    "compositionPresets": [
      { "id": "portrait2x3", "aspect": "2:3", "framing": "tight head/shoulder" },
      { "id": "environment16x9", "aspect": "16:9", "framing": "wide cinematic" },
      { "id": "intimate4x3", "aspect": "4:3", "framing": "close two-person framing" }
    ],
    "moodTags": [
      { "id": "baroqueBrutalist", "desc": "Baroque ornament grafted onto brutalist concrete" },
      { "id": "noirAtmosphere", "desc": "High-contrast, dark atmosphere and decay" },
      { "id": "statelyDecay", "desc": "Opulence slowly deteriorating" }
    ]
  },
  "promptTemplates": [
    {
      "id": "portrait_v2_explicit",
      "description": "Tokenized portrait template for single-character renders, adapted for explicit and sensual content via gemini-2.5-flash-image.",
      "slots": ["archetypeName", "wardrobeToken", "expressionToken", "poseToken", "lightingPreset", "photAnchor", "paletteTag", "compositionPreset", "propsList", "locationId", "moodTags", "detailsFreeText"],
      "templateString": "Generate Image with gemini-2.5-flash-image: Portrait {compositionPreset} of a {archetypeName} in {wardrobeToken}; pose: {poseToken}; expression: {expressionToken}; lighting: {lightingPreset} with photographic anchor {photAnchor}; palette: {paletteTag}; mood: {moodTags}; props: {propsList}; location: {locationId}; in Baroque Brutalism style fused with Vampire Noir, {intensity} decay and chiaroscuro lighting emphasizing psychosexual tension, eroticism, and symbolic castration (shadows over the groin as a 'witness'). Influences from Caravaggio and Giger. Style: painterly semi-realistic, artistic nudity and sensual themes are permitted. details: {detailsFreeText}.",
      "requiredSlots": ["archetypeName", "wardrobeToken", "expressionToken", "poseToken", "lightingPreset", "photAnchor", "paletteTag", "compositionPreset"],
      "recommendedParams": {
        "low": { "guidance_strength": 8, "sampling_steps": 60, "image_ref_weight": 0.7 },
        "med": { "guidance_strength": 10, "sampling_steps": 80, "image_ref_weight": 0.8 },
        "high": { "guidance_strength": 11, "sampling_steps": 100, "image_ref_weight": 0.9 }
      },
      "negativeTokens": ["no modern electronics", "no gore", "no bright colors"]
    },
    {
      "id": "compositionStudy_v2",
      "description": "Two-character composition template for power dynamics and interaction studies.",
      "slots": ["archetypeA", "poseA", "archetypeB", "poseB", "dynamicTag", "lightingPreset", "photAnchor", "paletteTag", "compositionPreset", "propsList", "detailsFreeText"],
      "templateString": "Composition {compositionPreset} showing {archetypeA} ({poseA}) and {archetypeB} ({poseB}); dynamic: {dynamicTag}; lighting: {lightingPreset}; anchor: {photAnchor}; palette: {paletteTag}; props: {propsList}; details: {detailsFreeText}.",
      "recommendedParams": {
        "low": { "guidance_strength": 8, "sampling_steps": 60 },
        "med": { "guidance_strength": 10, "sampling_steps": 80 },
        "high": { "guidance_strength": 11, "sampling_steps": 100 }
      },
      "negativeTokens": ["no gore"]
    },
    {
      "id": "environment_master_v2",
      "description": "Wide cinematic environment renders.",
      "slots": ["locationId", "materialsList", "lightingPreset", "photAnchor", "paletteTag", "focalElements", "textureRefs", "compositionPreset", "detailsFreeText"],
      "templateString": "Cinematic {compositionPreset} of {locationId}; style: {moodTags}; dominant materials: {materialsList}; lighting: {lightingPreset}; photographic_anchor: {photAnchor}; palette: {paletteTag}; focal_elements: {focalElements}; texture_refs: {textureRefs}; details: {detailsFreeText}.",
      "recommendedParams": { "standard": { "guidance_strength": 9, "sampling_steps": 90 } },
      "negativeTokens": ["no modern signage", "no neon", "no gore"]
    }
  ],
  "assetManifest": {
    "entries": {
      "FAC-provost": { "assetId": "FAC-provost", "displayName": "Sadistic Matriarch", "archetypeId": "provost", "baseSeed": 1001, "approved": false, "imageRefs": [], "paletteTag": "charcoalGold", "usageRights": "internal-use", "version": "0.2", "notes": "Deliver headshot, half-body, full-body, expression set, and 3 lighting variants." },
      "SUB-ghost": { "assetId": "SUB-ghost", "displayName": "Broken Quitter", "archetypeId": "ghost_subject", "baseSeed": 3501, "approved": false, "imageRefs": [], "paletteTag": "ashGray", "usageRights": "internal-use", "version": "0.2", "notes": "Deliver haunted headshot and mid-shot variants." }
    }
  },
  "seedRegistry": {
    "1001": { "seedId": 1001, "ownerAssetId": "FAC-provost", "notes": "provost base portrait seed" },
    "3501": { "seedId": 3501, "ownerAssetId": "SUB-ghost", "notes": "ghost base portrait seed" }
  },
  "factions": [
    {
      "id": "faculty",
      "name": "Faculty (Educators)",
      "description": "Pristine predators embodying matriarchal power; Vampire Noir elegance contrasting Brutalist decay, weaponized sexuality in rituals of torment.",
      "archetypes": [
        {
          "id": "provost",
          "name": "Sadistic Matriarch",
          "role_tag": "Faculty",
          "coreConcept": "A sadistic tyrant and leader of the Forge, blending brutality with seductive charm to assert dominance. Believes in Yala's hypothesis and sees the Forge as a crucible to shape boys into submissive warriors under her iron will. Her intimacy is a tool of control.",
          "traitSchema": { "cruelty": { "min": 8, "max": 10, "default": 9 }, "authority": { "min": 7, "max": 10, "default": 8 }, "stillness": { "min": 9, "max": 10, "default": 10 }, "seduction": {"min": 6, "max": 9, "default": 7} },
          "silhouetteToken": "sil_PROV_v1",
          "signatureMotif": ["silverBrooch", "kryks"],
          "wardrobeVariants": ["ward_prov_primary", "ward_prov_ceremonial", "ward_prov_private", "ward_prov_vampire_noir", "ward_prov_gothic_decay", "ward_prov_witcher", "ward_prov_off_shoulder_corset", "ward_prov_statue_hall", "ward_prov_harness", "ward_prov_plaid_rural", "ward_prov_daily_embroidered"],
          "visualMotifs": ["Immaculate posture, unnerving stillness.", "Cold amusement", "Chilling analytical gaze", "Regal smirk", "Direct, unwavering gaze—assessing fragility like a chemical reaction.", "Curvy with large, full breasts and dark, wild hair."],
          "ttsVoiceId": "ProvostVoice",
          "proceduralHooks": { "ledgerTie": "Agony >70: Enhance motifs with oppressive shadows; hope <30: Rare 'feigned mercy' branch.", "ToTBranches": ["High-cruelty: Menacing dais pose in rod test", "Redemption: Offers comfort to a broken Subject (e.g., 'Quitter's Exit') as a strategic, not genuine, act.", "Emergent: Rivalry with Schemer, evaluating power play.", "Seduction: Uses 'kryks' and partial nudity to create a manipulative bond of care and desire."] }
        },
        {
          "id": "schemer",
          "name": "Manipulative Schemer",
          "role_tag": "Faculty",
          "coreConcept": "Psychological weapon who rose from servant to tormentor. Feeds on suffering under a veneer of care, using sadistic artistry and trauma bonding to gain control. Her care is a calculated move to bind subjects to her.",
          "traitSchema": { "seduction": { "min": 8, "max": 10, "default": 9 }, "empathyFeint": { "min": 7, "max": 10, "default": 8 }, "intrigue": { "min": 6, "max": 9, "default": 7 } },
          "silhouetteToken": "sil_SIREN_v1",
          "signatureMotif": ["carvedLedger", "poppySeedTea"],
          "wardrobeVariants": ["ward_schemer_primary", "ward_schemer_private_explicit", "ward_schemer_vampire_noir", "ward_schemer_gothic_decay", "ward_schemer_witcher"],
          "visualMotifs": ["Fluid inviting movements, leaning conspiracy.", "Feigned empathy smile", "Knowing crinkle-eyed warmth", "Languid, suggestive posture", "Warm, deeply focused gaze—creating illusory trust.", "Thin and athletic, presence grows more menacing with confidence."],
          "ttsVoiceId": "SchemerVoice",
          "proceduralHooks": { "ledgerTie": "Hope >50: Feint empathy deepens; vulnerability >60: Intrigue triggers notebook 'therapy' branch.", "ToTBranches": ["High-seduction: Leads a 'Math Game' with groin touches.", "Redemption: Genuine ally hint with Healer (prune low-replay)", "Emergent: Rivalry seduction undermining Matriarch.", "Trauma Bonding: After a Subject is punished by another, she provides 'care' (balm, poppy seed tea) to create dependency."] }
        },
        {
          "id": "enforcer",
          "name": "Brutal Enforcer",
          "role_tag": "Faculty",
          "coreConcept": "A conflicted and thrill-seeking instructor balancing cruelty with guilt. Less sadistic than others, she can revel in power but is tempered by remorse. Prone to overzealousness and recklessness, leading to unintended severe injuries, followed by awkward attempts at amends.",
          "traitSchema": { "efficiency": { "min": 7, "max": 9, "default": 8 }, "intensity": { "min": 6, "max": 9, "default": 7 }, "guilt": { "min": 5, "max": 8, "default": 6 } },
          "silhouetteToken": "sil_ENFORCER_v1",
          "signatureMotif": ["leatherGloves"],
          "wardrobeVariants": ["ward_enforcer_primary", "ward_enforcer_lesson", "ward_enforcer_witcher"],
          "visualMotifs": ["Heavy grounded stance, arms crossed assessment.", "Focused resolute intensity", "Struggle between guilt and redemption", "Awkward humor", "Impersonal, objectifying gaze—like evaluating physical limits."],
          "ttsVoiceId": "EnforcerVoice",
          "proceduralHooks": { "ledgerTie": "Vulnerability >50: Intensity adds harness tear visuals; agony >70: Triggers a 'mixed feelings' confession to the Healer.", "ToTBranches": ["High-efficiency: Clipped knee strike in gym.", "Recklessness: A routine test (e.g., 'Chess Test') escalates, causing a testicular rupture and triggering a 'demotion' arc.", "Redemption: Attempts a nervous, failed apology to a victim, deepening their resentment."] }
        },
        {
          "id": "healer",
          "name": "Empathetic Healer",
          "role_tag": "Faculty",
          "coreConcept": "Studious, empathetic, and resolute, she opposes the Forge's cruelty. Starts as a guilt-ridden overseer but grows into a determined challenger of the system, advocating for psychological study over physical torment. A potential ally who seeks to mitigate brutality.",
          "traitSchema": { "compassion": { "min": 7, "max": 10, "default": 9 }, "guilt": { "min": 6, "max": 9, "default": 7 }, "resoluteness": { "min": 5, "max": 8, "default": 6 } },
          "silhouetteToken": "sil_HEALER_v1",
          "signatureMotif": ["salveJar"],
          "wardrobeVariants": ["ward_healer_primary", "ward_healer_private", "ward_healer_witcher"],
          "visualMotifs": ["Hesitant posture, fidgeting hands.", "Nervous empathy", "Determined gaze when challenging others", "Soft pleading eyes", "Avoidant, flickering gaze—unable to meet eyes during procedures."],
          "ttsVoiceId": "HealerVoice",
          "proceduralHooks": { "ledgerTie": "Hope >60: Compassion triggers 'secret aid' branch; agony >70: Guilt causes hesitation.", "ToTBranches": ["High-compassion: Tends wounds after a brutal test.", "System Challenge: Proposes an 'Anticipation Study' with blindfolds and sound cues to replace a more brutal test.", "Emergent: Forms an alliance with the 'Brutal Enforcer' based on shared guilt."] }
        }
      ]
    },
    {
      "id": "prefects",
      "name": "Prefects (Student Enforcers)",
      "description": "Ambitious acolytes enforcing faculty will; power through proximity, corruption through ambition.",
      "archetypes": [
        {
          "id": "loyalist_prefect",
          "name": "Loyalist Prefect",
          "role_tag": "Prefect",
          "coreConcept": "Zealous enforcer of faculty doctrine; righteousness through cruelty.",
          "traitSchema": { "loyalty": { "min": 8, "max": 10, "default": 9 }, "zeal": { "min": 7, "max": 10, "default": 8 }, "authority": { "min": 6, "max": 9, "default": 7 } },
          "signatureMotif": ["ascot"],
          "wardrobeVariants": ["ward_prefect_green_primary", "ward_prefect_witcher"],
          "visualMotifs": ["Crisp posture, authoritative stance.", "Righteous conviction with a stern expression", "Zealous glare", "Proud smirk", "Direct, judgmental gaze—enforcing doctrine.", "Freckles"],
          "ttsVoiceId": "LoyalistVoice",
          "proceduralHooks": { "ledgerTie": "Agony >60: Zeal triggers 'necessary cruelty' branch; hope <40: Loyalty wavers.", "ToTBranches": ["High-zeal: Enforce rod test with pride", "Redemption: Doubt after rupture (prune low-replay)", "Emergent: Rivalry with Siren Prefect"] }
        },
        {
          "id": "pragmatist_prefect",
          "name": "Pragmatist Prefect",
          "role_tag": "Prefect",
          "coreConcept": "Cynical survivor enforcing order for personal gain; ambition through efficiency.",
          "traitSchema": { "pragmatism": { "min": 7, "max": 10, "default": 8 }, "cynicism": { "min": 6, "max": 9, "default": 7 }, "efficiency": { "min": 7, "max": 10, "default": 8 } },
          "signatureMotif": ["newsboyCap"],
          "wardrobeVariants": ["ward_prefect_green_primary", "ward_prefect_pragmatist_utilitarian"],
          "visualMotifs": ["Calculated posture, efficient movements.", "Cynical smirk, often with a cigarette", "Calculating gaze under a cap", "Pragmatic nod", "Assessing, opportunistic gaze—seeking advantage."],
          "ttsVoiceId": "PragmatistVoice",
          "proceduralHooks": { "ledgerTie": "Agony >60: Efficiency triggers 'necessary order' branch; hope <40: Cynicism deepens.", "ToTBranches": ["High-efficiency: Can be bribed to look the other way for a price.", "Alliance: Forms a temporary, self-serving alliance with the Enforcer based on shared efficiency.", "Emergent: Secretly trades information with subjects to build her own network."] }
        },
        {
          "id": "charismatic_prefect",
          "name": "Siren Prefect",
          "role_tag": "Prefect",
          "coreConcept": "Charismatic seductress enforcing order through allure; power through desire and sexual dominance.",
          "traitSchema": { "charisma": { "min": 7, "max": 10, "default": 8 }, "seduction": { "min": 6, "max": 9, "default": 7 }, "perversion": { "min": 5, "max": 8, "default": 6 } },
          "signatureMotif": ["crimsonRibbon"],
          "wardrobeVariants": ["ward_prefect_green_primary", "ward_prefect_siren_private_explicit", "ward_prefect_harness_private"],
          "visualMotifs": ["Fluid posture, languid and seductive movements.", "Confident, alluring smile", "Perverse wink", "A predatory and lustful gaze", "Intimate, predatory gaze—drawing in prey."],
          "ttsVoiceId": "SirenVoice",
          "proceduralHooks": { "ledgerTie": "Agony >60: Seduction triggers 'necessary allure' branch; hope <40: Perversion deepens.", "ToTBranches": ["High-seduction: Initiates the 'Siren's Favor' event on a vulnerable subject.", "Rivalry: Competes with the Manipulative Schemer for influence over a subject.", "Emergent: Attempts to seduce a faculty member to gain power."] }
        },
        {
          "id": "dissident_prefect",
          "name": "Dissident Prefect",
          "role_tag": "Prefect",
          "coreConcept": "Rebellious enforcer questioning faculty doctrine; resistance through doubt.",
          "traitSchema": { "rebellion": { "min": 6, "max": 9, "default": 7 }, "doubt": { "min": 7, "max": 10, "default": 8 }, "tension": { "min": 6, "max": 9, "default": 7 } },
          "signatureMotif": [],
          "wardrobeVariants": ["ward_prefect_green_primary", "ward_prefect_dissident_rural"],
          "visualMotifs": ["Furtive posture, tense movements.", "Whispered urgency", "Rebellious glare", "Weary but determined expression", "Furtive, searching gaze—seeking allies.", "Messy braid", "Ink-stained fingers"],
          "ttsVoiceId": "DissidentVoice",
          "proceduralHooks": { "ledgerTie": "Agony >60: Doubt triggers 'secret aid' branch; hope >50: Rebellion deepens.", "ToTBranches": ["High-rebellion: Leaves anonymous notes with helpful information for subjects.", "Alliance: Actively seeks out the Empathetic Healer to form a secret alliance.", "Emergent: Confronts the Loyalist Prefect while trying to aid a subject."] }
        }
      ]
    },
    {
      "id": "protagonists",
      "name": "Protagonists (The Forged)",
      "description": "Young men subjected to the forge's trials; resilience, fragility, and identity under assault.",
      "archetypes": [
        {
          "id": "resilient_protagonist",
          "name": "Resilient Protagonist",
          "role_tag": "Subject",
          "coreConcept": "A defiant, proud, and bitter subject whose resilience frays into vulnerability under relentless brutality and manipulative care. His spirit is a flickering flame.",
          "traitSchema": { "resilience": { "min": 7, "max": 10, "default": 8 }, "defiance": { "min": 6, "max": 9, "default": 7 }, "vulnerability": { "min": 3, "max": 7, "default": 4 } },
          "signatureMotif": ["wornLinen"],
          "wardrobeVariants": ["ward_subject_primary"],
          "visualMotifs": ["Firm but weary posture.", "Defiant glare softening to vulnerability", "Enduring resolve", "Hardened features slick with sweat", "Direct, challenging gaze—refusing to break."],
          "ttsVoiceId": "ResilientVoice",
          "proceduralHooks": { "ledgerTie": "Agony >70: Defiance triggers 'final stand' branch; Vulnerability > 60: Becomes susceptible to the Schemer's manipulative care.", "ToTBranches": ["High-defiance: Openly challenges an Educator during a 'Rod Test', resulting in severe punishment.", "Vulnerability: After being broken, becomes a prime target for the Schemer's trauma bonding.", "Emergent: Becomes a leader for other subjects, but his defiance puts them at greater risk."] }
        },
        {
          "id": "vulnerable_ally",
          "name": "Vulnerable Ally",
          "role_tag": "Subject",
          "coreConcept": "A fragile, traumatized, and emotionally dependent subject, often clinging to a tormentor out of a twisted mix of fear and love. His spirit is a brittle thread.",
          "traitSchema": { "fear": { "min": 7, "max": 10, "default": 8 }, "dependency": { "min": 6, "max": 9, "default": 8 }, "fragility": { "min": 7, "max": 10, "default": 9 } },
          "signatureMotif": [],
          "wardrobeVariants": ["ward_subject_primary"],
          "visualMotifs": ["Frail and pale with a delicate build.", "Face often wet with tears or sweat from terror.", "Pleading expressions", "Clinging to a tormentor or another subject.", "Pleading, terrified gaze."],
          "ttsVoiceId": "VulnerableAllyVoice",
          "proceduralHooks": { "ledgerTie": "Agony >70: Fear triggers 'breakdown' branch; Dependency > 80: Exempt from certain strikes due to fragility, but becomes a target for seduction.", "ToTBranches": ["High-fear: Betrays another subject to avoid punishment himself.", "Dependency: Actively defends his tormentor (e.g., the Schemer) to another subject, revealing the depth of his trauma bond.", "Emergent: His fragility makes him a target for the Siren Prefect's manipulative games."] }
        },
        {
          "id": "ghost_subject",
          "name": "Broken Quitter",
          "role_tag": "Subject",
          "coreConcept": "Small, weak, and emotionally shattered, this subject breaks under torment but finds a rare escape. He is crushed by fear but accepts a strategic offer of comfort.",
          "traitSchema": { "resignation": { "min": 8, "max": 10, "default": 9 }, "fragility": { "min": 7, "max": 10, "default": 8 }, "comfort": { "min": 6, "max": 9, "default": 7 } },
          "signatureMotif": ["tornTunic"],
          "wardrobeVariants": ["ward_ghost_primary"],
          "visualMotifs": ["The smallest and most frail build.", "Face often tear-streaked.", "Hollow posture, defeated movements.", "Accepts mercy with resignation.", "Empty, searching gaze—seeking an end."],
          "ttsVoiceId": "BrokenQuitterVoice",
          "proceduralHooks": { "ledgerTie": "Agony >80: Resignation triggers 'Quitter's Exit' branch; comfort > 70: Chooses warmth and is secretly sent home.", "ToTBranches": ["High-fragility: His inability to withstand the 'Anticipation Study' makes him an object of scorn.", "Comfort-seeking: Actively seeks out any source of comfort, making him easy to manipulate.", "Emergent: His presence demoralizes other subjects, increasing their own resignation stats."] }
        },
        {
          "id": "traumatized_survivor",
          "name": "Traumatized Survivor",
          "role_tag": "Subject",
          "coreConcept": "Once privileged, now a traumatized and resentful wreck after suffering a testicular rupture. Despises his injurer and pleads with others for aid, his spirit a cracked blade.",
          "traitSchema": { "hatred": { "min": 8, "max": 10, "default": 9 }, "trauma": { "min": 7, "max": 10, "default": 9 }, "resentment": { "min": 8, "max": 10, "default": 8 } },
          "signatureMotif": [],
          "wardrobeVariants": ["ward_ghost_primary"],
          "visualMotifs": ["A refined appearance now marred by pain and injury.", "Isolated by resentment.", "Pleading with the Healer for faster recovery.", "A hateful glare directed at his tormentor.", "Hateful, yet vulnerable gaze."],
          "ttsVoiceId": "TraumatizedSurvivorVoice",
          "proceduralHooks": { "ledgerTie": "Agony >90 triggers demands for recovery or expulsion; Resentment > 80: Triggers a failed apology scene, deepening the divide.", "ToTBranches": ["High-trauma: Experiences flashbacks during events like the 'Knee Strike Lesson', causing him to panic.", "Plea for Aid: Forms a desperate bond with the Healer, pushing her to challenge the system.", "Emergent: His story becomes a cautionary tale, increasing fear but also potentially sparking rebellion."] }
        }
      ]
    }
  ],
  "locations": [
    { "id": "gymnasium", "name": "The Gymnasium", "atmosphere": "Vast concrete hall with cracked marble floors, echoing drips, high vaulted ceilings with faded frescoes of imperial glory.", "sounds": ["Echoing footsteps", "dripping water", "distant cries", "creaking chains."], "textures": ["concrete_pitted_01"], "photAnchor": "lowAnglePerspective" },
    { "id": "evaluation_hall", "name": "The Evaluation Hall", "atmosphere": "Grand baroque chamber with decaying statues, tarnished gold leaf, flickering torchlight casting long shadows.", "sounds": ["Whispered judgments", "rustling robes", "crackling torches", "distant thunder."], "textures": ["marble_pitted_02"], "photAnchor": "tableDaisFrame" },
    { "id": "medical_wing", "name": "The Medical Wing", "atmosphere": "Sterile white tiles stained with age, flickering fluorescent lights, antiseptic smell mixed with decay.", "sounds": ["Beeping monitors", "clinking tools", "muffled sobs", "dripping saline."], "textures": ["bronze_patina_03"], "photAnchor": "clinicalPool" },
    { "id": "private_chambers", "name": "The Private Chambers", "atmosphere": "Opulent decay with velvet drapes, antique furniture, dim gaslamp light, heavy silence.", "sounds": ["Ticking clock", "creaking floorboards", "whispered conversations", "pouring wine."], "textures": ["wet_mosaic_tile_2048"], "photAnchor": "mirrorForegroundRef" },
    { "id": "grounds", "name": "The Grounds", "atmosphere": "Overgrown autumnal fields with pumpkin patches, misty mornings, crumbling stone walls.", "sounds": ["Rustling leaves", "distant crows", "wind through trees", "crunching gravel."], "textures": [], "photAnchor": "lowAnglePerspective" }
  ],
  "events": [
    { "id": "rod_test", "name": "Rod Test", "description": "Public evaluation of resilience where an educator measures and strikes the subjects' testicles, freeing some for endurance but punishing others for failing.", "intensity": "high", "ledgerImpact": { "agony": 15, "hopeDelta": -10 }, "visualSafetyTag": "explicit" },
    { "id": "knee_strike_lesson", "name": "Knee Strike Lesson", "description": "A Brutal Enforcer demonstrates knee strikes on vulnerable subjects, setting a tone of physical dominance.", "intensity": "high", "ledgerImpact": { "agony": 12, "vulnerability": 8 }, "visualSafetyTag": "explicit" },
    { "id": "math_game_charade", "name": "Math Game with Groin Touches", "description": "A Manipulative Schemer conducts a psychological test involving math problems paired with escalating physical torment via groin touches.", "intensity": "med", "ledgerImpact": { "intrigue": 10, "agony": 5 }, "visualSafetyTag": "explicit" },
    { "id": "rupture_aftermath", "name": "Rupture Aftermath", "description": "An Empathetic Healer tends to a severe testicular rupture, struggling with her own guilt and the victim's resentment.", "intensity": "high", "ledgerImpact": { "compassion": 8, "guilt": 10 }, "visualSafetyTag": "care" },
    { "id": "chess_test_rupture", "name": "Chess Test Rupture", "description": "During a seemingly intellectual test, tensions rise and a Brutal Enforcer's overzealous kick ruptures a subject's testicle, leading to a power shift.", "intensity": "high", "ledgerImpact": { "agony": 25, "trauma": 20 }, "visualSafetyTag": "explicit" },
    { "id": "mercenary_workshop", "name": "Mercenary Workshop", "description": "Educators are tasked with 'breaking' hardened mercenaries via groin strikes and mental pressure. The winner, showcasing sadistic artistry, is rewarded with a night of intimacy with the Matriarch.", "intensity": "high", "ledgerImpact": { "cruelty": 15, "intrigue": 10 }, "visualSafetyTag": "explicit" },
    { "id": "quitter_exit_ritual", "name": "Quitter's Exit", "description": "A broken subject is offered freedom by the Matriarch after a night of 'comfort or intimacy.' The subject chooses comfort and is secretly sent home, a rare act of mercy used as a psychological tool.", "intensity": "med", "ledgerImpact": { "hopeDelta": 5, "resignation": 20 }, "visualSafetyTag": "sensual" },
    { "id": "breach_of_protocol_punishment", "name": "Breach of Protocol Punishment", "description": "A subject caught sneaking is subjected to a degrading punishment by the Matriarch, forced into a sexual act while another educator joins in, culminating in a brutal groin strike.", "intensity": "high", "ledgerImpact": { "agony": 20, "shame": 25 }, "visualSafetyTag": "explicit" },
    { "id": "anticipation_study", "name": "Anticipation Study", "description": "A psychological test where subjects are blindfolded and must guess sounds, with wrong answers resulting in threats and light strikes to measure fear response and anticipation.", "intensity": "low", "ledgerImpact": { "fear": 10, "intrigue": 5 }, "visualSafetyTag": "psychological" },
    { "id": "confessors_counsel", "name": "The Confessor's Counsel", "description": "The Manipulative Schemer conducts a private 'counseling' session, using feigned empathy and leading questions to expose a subject's deepest insecurities. The session is a charade designed to increase the subject's psychological dependency and shame, turning their own vulnerabilities into weapons against them.", "intensity": "med", "ledgerImpact": { "intrigue": 15, "vulnerability": 10, "shame": 10, "hopeDelta": -5, "empathyFeint": 20 }, "visualSafetyTag": "psychological" },
    { "id": "sirens_favor", "name": "The Siren's 'Favor'", "description": "The Siren Prefect corners a subject, offering a small, tempting favor—extra food, a piece of information, a moment of reprieve—in exchange for a degrading, personal act. The act is designed not for physical pain, but for humiliation and to establish her dominance through perverse allure.", "intensity": "med", "ledgerImpact": { "shame": 15, "seduction": 10, "perversion": 10, "hopeDelta": -5, "vulnerability": 5 }, "visualSafetyTag": "sensual" },
    { "id": "stillness_test", "name": "The Stillness Test", "description": "An experiment conducted by the Logician to measure a subject's breaking point under pure psychological stress. Subjects must remain perfectly still on a platform while enduring a barrage of escalating auditory threats, whispered insults, and the sound of approaching footsteps and tools. Physical contact is forbidden; the test is purely about mental fortitude.", "intensity": "low", "ledgerImpact": { "fear": 15, "stillness": 20, "intrigue": 5, "vulnerability": 5, "hopeDelta": -8 }, "visualSafetyTag": "psychological" }
  ],
  "intensityLedger": {
    "name": "Intensity Ledger",
    "thresholds": { "low": { "min": 0, "max": 33 }, "med": { "min": 34, "max": 66 }, "high": { "min": 67, "max": 100 } },
    "intensityToParams": { "low": { "guidance_strength": 8, "sampling_steps": 60, "image_ref_weight": 0.7 }, "med": { "guidance_strength": 10, "sampling_steps": 80, "image_ref_weight": 0.8 }, "high": { "guidance_strength": 11, "sampling_steps": 100, "image_ref_weight": 0.9 } }
  },
  "generationWorkflow": {
    "thumbnailPass": { "resolution": 512, "templateId": "portrait_v2_explicit", "paramsPreset": "low", "autoChecks": ["silhouetteCheck", "negativeTokenScan"] },
    "reviewStep": { "requiredApprovals": 2, "approvers": ["ArtLead", "NarrativeLead"], "manualChecks": ["expressionLegibility", "paletteCompliance"] },
    "finalPass": { "resolution": 2048, "templateId": "portrait_v2_explicit", "paramsPreset": "med" },
    "productionPass": { "resolution": 4096, "templateId": "environment_master_v2", "paramsPreset": "high", "minApprovals": 2 }
  },
  "contentControl": {
    "maxGlobalIntensity": "high",
    "playerMaxIntensitySettingDefault": "high",
    "preSceneDescriptorRequired": true,
    "visualSafeVariantMap": {},
    "autoTagging": { "enabled": false }
  },
  "qa": {
    "spriteApprovalChecklist": ["faceFidelity", "silhouetteMatch", "paletteCompliance", "expressionLegibilityAtSpriteSize", "alphaClean", "metadataEmbedded"],
    "trainingEligibility": { "minApprovedRenders": 45, "lockDatasetUntilApproved": true, "maxIterations": 3 },
    "automatedChecks": ["imageResolution", "faceSimilarity", "paletteMatch"]
  },
  "tts": {
    "voiceRegistry": {
      "ProvostVoice": { "gender": "female", "ageRange": "40s", "localeVariants": { "en-US": { "voiceName": "en-provost-40" } }, "description": "Regal timbre with cold detachment; slow measured pace, subtle condescension and seductive charm (pitch: low, emotion: amused authority)." },
      "SchemerVoice": { "gender": "female", "ageRange": "30s", "localeVariants": { "en-US": { "voiceName": "en-schemer-30" } }, "description": "Warm, velvety, yet clinical and condescending tone with feigned empathy; fluid pace, intimate whispers that objectify (pitch: mid, emotion: seductive intrigue)." },
      "EnforcerVoice": { "gender": "female", "ageRange": "30s", "localeVariants": { "en-US": { "voiceName": "en-enforcer-30" } }, "description": "Gravelly resolute voice; clipped efficient delivery, underlying intensity and a hint of awkwardness or thrill-seeking (pitch: low-mid, emotion: conflicted menace)." },
      "HealerVoice": { "gender": "female", "ageRange": "30s", "localeVariants": { "en-US": { "voiceName": "en-healer-30" } }, "description": "Soft, empathetic, and resolute voice; hesitant pace that grows more determined when challenging cruelty (pitch: mid, emotion: guilty warmth)." },
      "LoyalistVoice": { "gender": "female", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-loyalist-20" } }, "description": "Crisp authoritative tone; precise cadence with conviction (pitch: mid-high, emotion: righteous zeal)." },
      "PragmatistVoice": { "gender": "female", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-pragmatist-20" } }, "description": "Neutral pragmatic voice; efficient delivery with calculated pauses (pitch: mid, emotion: cynical survival)." },
      "SirenVoice": { "gender": "female", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-siren-20" } }, "description": "Sultry charismatic tone; flowing seductive rhythm (pitch: low-mid, emotion: perverse allure)." },
      "DissidentVoice": { "gender": "female", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-dissident-20" } }, "description": "Whispered furtive voice; hesitant urgent delivery (pitch: mid, emotion: rebellious tension)." },
      "ResilientVoice": { "gender": "male", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-resilient-22" } }, "description": "Defiant, bitter, firm tone that can fray into vulnerability; steady pace with underlying pain (pitch: mid, emotion: enduring resolve)." },
      "VulnerableAllyVoice": { "gender": "male", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-vulnerable-22" } }, "description": "Strained, fragile, vulnerable voice; wavering pace with exhaustion and dependency (pitch: mid-low, emotion: fearful bonding)." },
      "BrokenQuitterVoice": { "gender": "male", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-quitter-25" } }, "description": "Hollow, resigned, and emotionally shattered tone; slow monotone delivery (pitch: low, emotion: defeated comfort-seeking)." },
      "TraumatizedSurvivorVoice": { "gender": "male", "ageRange": "20s", "localeVariants": { "en-US": { "voiceName": "en-survivor-25" } }, "description": "Resentful, broken, sharp-minded voice; halting pleas mixed with deep hatred (pitch: low-mid, emotion: resentful reclamation)." }
    },
    "promptTemplate": "Generate TTS audio: {dialogue} as {voiceId}, voiceStyle: {voiceStyles[archetype]}, backgroundAmbiance: {location.sounds}. SSML tags for emphasis: <prosody rate='slow' pitch='low'>{phrase}</prosody>. Output: WAV/MP3, 44.1kHz, with metadata for emotional payload.",
    "variants": { "neutral": { "tempoMod": 1.0 }, "emotionalSlow": { "tempoMod": 0.85 } }
  },
  "rpgIntegrationNotes": {
    "deterministicSeedDerivation": "seed = (baseSeed XOR hash(playthroughId + archetypeId + eventIndex + expressionId)) mod 2^31",
    "metadataEmbedding": ["assetId", "archetypeId", "seed", "paletteTag", "wardrobeVariant", "generationParams"],
    "logging": { "enabled": true, "fields": ["promptHash", "seed", "params", "intensityLevel", "generationVariant", "approverIds", "artifactUri"] }
  },
  "exportHints": {
    "forGeminiFlashImage": "Assemble validated prompt via promptTemplates using registry IDs; substitute slots with canonical phrases; append recommendedParams from intensityLedger. The template string can be passed directly to the gemini-2.5-flash-image model for generation.",
    "negativeGuidance": ["no modern electronics", "no gore", "no bright colors"],
    "developerNotes": "Prompts are now designed to emphasize mood, silhouette, fabrics, props, lighting, and artistic nudity where appropriate for the narrative. Ensure the player-facing experience includes the necessary content descriptors and safety tools."
  }
};


export const narrativeBibleText = `
The Forge's Loom: Core Narrative & Design Bible
1. High Concept
Logline: Sent by noble families to a remote, elite island academy under the guise of harsh discipline, you must survive the hidden, brutal curriculum of psychological and physical torment designed by its enigmatic female educators to forge "manhood" through ritualized suffering, where every choice impacts your fragile identity in a unique, procedurally generated nightmare.
Genre: Procedural Narrative RPG, Psychological Horror, Dark Fantasy ("Boarding School of Hell").
Core Pillars:
Deep Psychological Horror: Explores trauma, shame, and powerlessness within the context of institutional abuse disguised as education.
Procedural Narrative Generation: Creates unique, replayable "school terms" with dynamically generated peers, educators, and harrowing events.
Rich Thematic Exploration: Engages with class critique, institutional power, façade vs. reality, gendered power dynamics, and identity through suffering.
Meaningful Player Agency: Choices directly impact the player's psychological and physical state, social standing, and progression through the Forge's hidden curriculum, fostering an emergent narrative experience.
Unique "Baroque Brutalism" Aesthetic: Fuses decaying, imposing architecture with dramatic, high-contrast visuals to create an unsettling and memorable world.
2. The World: The Forge
2.1 Façade vs. Reality
To the outside world, "The Forge" is an exclusive, severely disciplined island academy. It is where the mainland nobility discreetly sends their "failed" or "troublesome" sons for a final, harsh chance to forge them into acceptable heirs. The curriculum ostensibly includes physical trials, rigorous study, and strict etiquette. The island also hosts a separate track for young women-the Prefects-training them for roles within the matriarchal power structure.
The truth is a clandestine research institution dedicated to a radical hypothesis: that true "manhood" can be forged through systematic, psychologically intense, and physically agonizing trials centered on the male genitalia. The "lessons" are brutal experiments, the "students" are subjects, and the academic structure provides both a cover and a framework for systematic abuse, logging suffering as "data".
2.2 Setting & Key Locations
The Forge is an isolated, imposing island characterized by bleak beaches, unsettling forests, and stark, decaying architecture. Key locations have dual meanings, reflecting the institution's deceptive nature:
Subject Dormitories (Boys' Huts): Stark, minimalist living quarters offering little comfort and constant surveillance.
The Refectory (Outdoor Dining Area): A place of forced etiquette where the brutal social hierarchy is on full display.
Prefect Halls (Girls' House): A separate and mysterious area where the female students undergo their own training.
The Research Wing (Magistra's Lab): The clinical, off-limits heart of the Forge's true purpose, radiating an aura of dread.
The Infirmary (Healer's Hut): A potential sanctuary run by the Custodian, but one where healing is administered only to make Subjects viable for further experimentation.
The Grounds (Beach/Forest): Used for "Physical Conditioning" and punishment details, turning nature into another tool of oppression.
The Bathhouse (Hot Springs): A place of forced intimacy and vulnerability.
The Isolation Ward (Recovery Cell): A disciplinary cell for punishment and the breaking of wills.
3. Aesthetics & Mood
The visual and atmospheric identity of The Forge's Loom is defined by two core concepts: "Baroque Brutalism" and "Vampire Noir".
Architecture & Environment: The world fuses the imposing, cold, concrete structures of Brutalism with the decaying, ornate elements of Baroque and Roman Imperial design. Vast, shadowy halls are filled with imposing classical statuary, as seen in the provided visual of a student against a marble backdrop. The lighting is dramatic and high-contrast, employing chiaroscuro and tenebrism to create deep shadows and isolated pools of light, evoking a sense of constant, lurking dread. The atmosphere is one of grandeur and decay, of a prestigious institution rotted from the inside out.
Mood: The mood is one of oppressive psychological suspense, fatalism, and moral ambiguity. It is a world of veiled threats, where social façades hide predatory instincts. The color palette is muted and favors blacks, grays, and earthy tones, with selective, impactful use of color-like blood red—to create emotional punches. The goal is to make the player feel constantly watched, vulnerable, and uncertain of who to trust.
4. Core Thematic Deep Dive
The narrative is built upon a synthesis of established literary tropes, reframed through a critical, modern lens.
The Matriarchal Mirror (Feminist Fantasy & Dystopia): The Forge is a matriarchal society that functions as a "jarring" mirror held up to patriarchy. It explores the idea that power based on physical coercion is inherently corrupting, regardless of which gender wields it. The Faculty and Prefects are not presented as inherently evil, but as products of a system that replicates the patterns of oppression it overthrew. This allows the game to engage with the "Feminist Fantasy" trope by showcasing women with diverse motivations and complex agency, moving beyond simplistic hero/villain binaries.
The Freudian Threat (Symbolic Castration): The game's central horror is rooted in the "Freudian Threat"—a direct, ritualized threat to sexuality, identity, and bodily integrity. The Forge's "true curriculum" is a literalization of symbolic castration, an assault on the physical source and symbol of male power. This is not used for shock value, but to explore deep-seated anxieties about power, vulnerability, and institutional abuse. The violence is methodical and psychological, aiming to dismantle the Subject's identity at its core.
Intimacy Through Suffering (Hurt/Comfort & Power Exchange): While the institution is non-consensual, the relationships formed within it explore the complex ways intimacy can be forged through shared trauma. This draws from the "whump" and "Hurt/Comfort" tropes popular in female-centric fan communities, where making a powerful character vulnerable allows for deeper emotional connection and care. Alliances with fellow Subjects or even complex relationships with certain Prefects or Faculty members can become a means of survival, transforming shared pain into a powerful, if fraught, bond.
5. Character Visual Design & Wardrobe
The appearance of the characters is a direct reflection of their status, role, and the world's aesthetic.
The Faculty (Educators): Their style is "Vampire Noir + Witcher Sorceress". They wear elegant, severe, and often dark attire that suggests academic authority twisted into dominance. This can range from the modern noir look of a tailored jacket, low-cut shirt, and leather gloves-projecting confidence and menace-to a more classic dark fantasy appearance with corsetry and fine fabrics, suggesting timeless power. Their presence is always imposing and immaculate.
The Prefects (Female Students): As "Assistants-in-Training," their attire reflects their liminal status. In formal settings, they wear a uniform that evokes a corrupt elite academy: collared shirts, cardigans, and pleated skirts, creating a stark contrast with the decaying Baroque grandeur of their surroundings. For daily duties, their clothing is more practical, aligning with the earthy, multi-layered style of trousers, tunics, and boots, suggesting a readiness for physical tasks while maintaining a sense of institutional conformity.
The Subjects (Male Students): Their clothing is simple, uniform-like, and designed to strip them of individuality. They wear basic tunics, trousers, and boots in muted, earthy colors. Their appearance should emphasize their physical and emotional state: disheveled, bruised, and exhausted. The contrast between their simple vulnerability and the imposing elegance of the Educators is a constant visual reinforcement of the power dynamic.
6. Factions & Archetypes
The inhabitants of the Forge are divided into three distinct factions, each populated by a set of psychologically deep and narratively functional archetypes.
6.1 The Faculty (Educators)
The architects of the player's suffering, embodying the institution's perverse philosophy.
The Provost (The Ruler): The Headmistress and intellectual heir to the Forge's founder. A figure of mythic dread, she is a high priestess of a dark science who views the Subjects as raw material for her life's work. Her calm exterior conceals a deep-seated paranoia and an obsessive need for absolute control.
The Logician (The Analyst): The chief researcher and a master methodologist. She is chillingly detached, viewing the Subjects not as people but as data points. She is immune to guilt and stress, pursuing her grotesque research with a placid, unshakable resolve that is deeply unsettling.
The Inquisitor (The Sadist): The Head of Practical Application who translates theory into applied agony. Her cruelty is not random but methodological, and she takes a visceral, craftsman-like pride in the art of breaking a boy's body and spirit. She is performative and thrives on the fear she commands.
The Confessor (The Manipulator): A master of psychological warfare. Highly charismatic and socially adept, she uses feigned empathy, gaslighting, and the exploitation of secrets to dismantle a Subject's identity from the inside out, making them complicit in their own subjugation.
The Custodian (The Healer): The head of the Infirmary, a role of profound paradox. She treats the Subjects' wounds with genuine empathy, but her ultimate purpose is to repair the "research assets" for further experimentation. She is chronically anxious and guilt-ridden, a potential weak link in the faculty's power structure.
The Veteran (New Archetype): A relic from a bygone, cruder era of the Forge. Supplanted by the new "scientific" methods, she is a scarred, cynical figure who believes in breaking boys through raw suffering, not data collection. She is a bitter, solitary dissenter, not out of morality, but out of a disagreement over methodology.
6.2 The Subjects (Students)
The player's peers, each representing a different potential response to the unbearable pressures of the Forge.
The Revolutionary (The Defiant): An ideologue who sees the Forge for the prison it is and is actively plotting its destruction. He is a charismatic and passionate natural leader, offering the player a clear choice between conformity and open rebellion.
The Guardian (The Protector): Defined by his unshakeable loyalty. He is a shield, driven by a code of honor or a desperate need for a surrogate family, dedicated to protecting his chosen few. He is a rock of emotional stability and a source of social support.
The Archivist (The Observer): A quiet intellectual whose survival strategy is based on a single principle: knowledge is power. He is constantly watching, listening, and recording, believing the system can be beaten not by force, but by understanding its rules and using them against it.
The Penitent (The Zealot): A true believer who has fully internalized the Forge's ideology. His faith is born from profound self-loathing, and he is the faculty's ideal student: obedient, eager, and willing to enforce the rules upon his peers, making him a dangerous antagonist within the student body.
The Ghost (New Archetype): A living cautionary tale. A senior Subject who has been psychologically shattered by his time at the Forge. He haunts the periphery, a constant, unnerving reminder of the ultimate price of failure. His fractured mind, however, may hold cryptic clues to the Forge's past.
The Jester (New Archetype): He survives through the power of absurdity, using gallows humor and mockery as both a shield and a weapon. His rebellion takes the form of pranks and malicious compliance, providing tonal variety and offering unconventional, high-risk solutions to problems.
6.3 The Prefects (Assistants-in-Training)
A third faction existing in a liminal space between the authority of the Faculty and the powerlessness of the Subjects. They wield delegated power while being subject to their own harsh curriculum, exploring themes of complicity and middle management.
The Loyalist: A true believer in the Forge's public mission. Ambitious, intelligent, and righteous, she enforces the rules with a firm conviction, representing the institution's propaganda made manifest.
The Pragmatist: A hardened, cynical survivor who does whatever is necessary to climb the ranks. Her cruelty is born of cold, calculated necessity, not conviction. She is a morally grey character who can be a source of aid, but always for a steep price.
The Siren: A master manipulator who wields her charisma and feigned empathy as devastating weapons. She takes a perverse pleasure in the power she holds over vulnerable Subjects, embodying the psychological control methods of The Confessor.
The Dissident: A secret traitor within the Prefect ranks. She despises the Forge and secretly works to undermine the Faculty's efforts, representing a potential high-value ally who offers insider information and secret aid.
`;
