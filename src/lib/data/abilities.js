/**
 * Pokemon Abilities Dataset with Descriptions
 * Includes generation-specific notes for abilities with mechanical changes
 */

// Helper function to capitalize ability names
const toLabel = (str) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

export const Abilities = [
  {
    id: 'adaptability',
    label: 'Adaptability',
    description: 'Powers up moves of the same type as the Pokémon.'
  },
  {
    id: 'aerilate',
    label: 'Aerilate',
    description: 'Normal-type moves become Flying-type and gain 1.2× power.'
  },
  {
    id: 'aftermath',
    label: 'Aftermath',
    description: 'Damages the attacker if it knocks out the Pokémon with a contact move.'
  },
  {
    id: 'air-lock',
    label: 'Air Lock',
    description: 'Eliminates the effects of weather.'
  },
  {
    id: 'analytic',
    label: 'Analytic',
    description: 'Boosts move power when the Pokémon moves last.'
  },
  {
    id: 'anger-point',
    label: 'Anger Point',
    description: 'Maximizes Attack when hit by a critical hit.'
  },
  {
    id: 'anticipation',
    label: 'Anticipation',
    description: 'Senses an opposing Pokémon\'s dangerous moves.'
  },
  {
    id: 'arena-trap',
    label: 'Arena Trap',
    description: 'Prevents opposing Pokémon from fleeing.'
  },
  {
    id: 'armor-tail',
    label: 'Armor Tail',
    description: 'Makes opposing Pokémon unable to use priority moves.'
  },
  {
    id: 'aroma-veil',
    label: 'Aroma Veil',
    description: 'Protects allies from attacks that limit their move choices.'
  },
  {
    id: 'as-one-glastrier',
    label: 'As One Glastrier',
    description: 'Combines Unnerve and Chilling Neigh abilities.'
  },
  {
    id: 'as-one-spectrier',
    label: 'As One Spectrier',
    description: 'Combines Unnerve and Grim Neigh abilities.'
  },
  {
    id: 'aura-break',
    label: 'Aura Break',
    description: 'Reverses "Aura" Abilities to weaken affected moves.'
  },
  {
    id: 'bad-dreams',
    label: 'Bad Dreams',
    description: 'Damages opposing sleeping Pokémon.'
  },
  {
    id: 'ball-fetch',
    label: 'Ball Fetch',
    description: 'Retrieves a failed Poké Ball (if not holding an item).'
  },
  {
    id: 'battery',
    label: 'Battery',
    description: 'Powers up ally Pokémon\'s special moves.'
  },
  {
    id: 'battle-armor',
    label: 'Battle Armor',
    description: 'Hard armor protects from critical hits.'
  },
  {
    id: 'battle-bond',
    label: 'Battle Bond',
    description: 'Transform into Ash-Greninja after KOing an opponent.'
  },
  {
    id: 'beads-of-ruin',
    label: 'Beads Of Ruin',
    description: 'Lowers the Sp. Def of all other Pokémon.'
  },
  {
    id: 'beast-boost',
    label: 'Beast Boost',
    description: 'Boosts highest stat after KOing an opponent.'
  },
  {
    id: 'berserk',
    label: 'Berserk',
    description: 'Boosts Sp. Atk when HP drops below half.'
  },
  {
    id: 'big-pecks',
    label: 'Big Pecks',
    description: 'Protects from Defense-lowering effects.'
  },
  {
    id: 'blaze',
    label: 'Blaze',
    description: 'Powers up Fire-type moves when HP is low.'
  },
  {
    id: 'bulletproof',
    label: 'Bulletproof',
    description: 'Protects from ball and bomb moves.'
  },
  {
    id: 'cheek-pouch',
    label: 'Cheek Pouch',
    description: 'Restores HP when the Pokémon eats a Berry.'
  },
  {
    id: 'chilling-neigh',
    label: 'Chilling Neigh',
    description: 'Boosts Attack after KOing an opponent.'
  },
  {
    id: 'chlorophyll',
    label: 'Chlorophyll',
    description: 'Boosts Speed in harsh sunlight.'
  },
  {
    id: 'clear-body',
    label: 'Clear Body',
    description: 'Prevents other Pokémon from lowering stats.'
  },
  {
    id: 'cloud-nine',
    label: 'Cloud Nine',
    description: 'Eliminates the effects of weather.'
  },
  {
    id: 'color-change',
    label: 'Color Change',
    description: 'Changes the Pokémon\'s type to the type of the move used on it.'
  },
  {
    id: 'comatose',
    label: 'Comatose',
    description: 'Always drowsing; treats as asleep but can still move.'
  },
  {
    id: 'commander',
    label: 'Commander',
    description: 'Commands from inside Dondozo\'s mouth.'
  },
  {
    id: 'competitive',
    label: 'Competitive',
    description: 'Sharply boosts Sp. Atk when stats are lowered.'
  },
  {
    id: 'compound-eyes',
    label: 'Compound Eyes',
    description: 'Boosts the Pokémon\'s accuracy.',
    generationNote: 'Also increases wild held item rate in Gen 5+'
  },
  {
    id: 'contrary',
    label: 'Contrary',
    description: 'Inverts stat changes.'
  },
  {
    id: 'corrosion',
    label: 'Corrosion',
    description: 'Can poison Steel and Poison types.'
  },
  {
    id: 'costar',
    label: 'Costar',
    description: 'Copies ally\'s stat changes on entering battle.'
  },
  {
    id: 'cotton-down',
    label: 'Cotton Down',
    description: 'Lowers Speed of all Pokémon when hit.'
  },
  {
    id: 'cud-chew',
    label: 'Cud Chew',
    description: 'Can eat the same Berry twice.'
  },
  {
    id: 'curious-medicine',
    label: 'Curious Medicine',
    description: 'Resets allies\' stat changes on entering battle.'
  },
  {
    id: 'cursed-body',
    label: 'Cursed Body',
    description: 'May disable a move used on the Pokémon.'
  },
  {
    id: 'cute-charm',
    label: 'Cute Charm',
    description: 'Contact may cause infatuation.'
  },
  {
    id: 'damp',
    label: 'Damp',
    description: 'Prevents use of self-destructing moves.'
  },
  {
    id: 'dancer',
    label: 'Dancer',
    description: 'Copies dance moves used by others.'
  },
  {
    id: 'dark-aura',
    label: 'Dark Aura',
    description: 'Powers up Dark-type moves of all Pokémon.'
  },
  {
    id: 'dauntless-shield',
    label: 'Dauntless Shield',
    description: 'Boosts Defense on entering battle.'
  },
  {
    id: 'dazzling',
    label: 'Dazzling',
    description: 'Prevents priority moves from hitting.'
  },
  {
    id: 'defeatist',
    label: 'Defeatist',
    description: 'Lowers Attack and Sp. Atk when HP is below half.'
  },
  {
    id: 'defiant',
    label: 'Defiant',
    description: 'Sharply boosts Attack when stats are lowered.'
  },
  {
    id: 'delta-stream',
    label: 'Delta Stream',
    description: 'Creates strong winds that weaken super-effective moves against Flying types.'
  },
  {
    id: 'desolate-land',
    label: 'Desolate Land',
    description: 'Creates extremely harsh sunlight that nullifies Water-type moves.'
  },
  {
    id: 'disguise',
    label: 'Disguise',
    description: 'Avoids damage once per battle.'
  },
  {
    id: 'download',
    label: 'Download',
    description: 'Boosts Attack or Sp. Atk based on opponent\'s lower defensive stat.'
  },
  {
    id: 'dragons-maw',
    label: 'Dragons Maw',
    description: 'Powers up Dragon-type moves.'
  },
  {
    id: 'drizzle',
    label: 'Drizzle',
    description: 'Summons rain when entering battle.'
  },
  {
    id: 'drought',
    label: 'Drought',
    description: 'Summons harsh sunlight when entering battle.'
  },
  {
    id: 'dry-skin',
    label: 'Dry Skin',
    description: 'Restores HP in rain or when hit by Water; reduces HP in harsh sunlight and increases Fire damage.'
  },
  {
    id: 'early-bird',
    label: 'Early Bird',
    description: 'Awakens from sleep quickly.'
  },
  {
    id: 'earth-eater',
    label: 'Earth Eater',
    description: 'Restores HP when hit by Ground-type moves.'
  },
  {
    id: 'effect-spore',
    label: 'Effect Spore',
    description: 'Contact may poison, paralyze, or put to sleep.'
  },
  {
    id: 'electric-surge',
    label: 'Electric Surge',
    description: 'Creates Electric Terrain when entering battle.'
  },
  {
    id: 'electromorphosis',
    label: 'Electromorphosis',
    description: 'Becomes charged when hit, boosting the next Electric-type move.'
  },
  {
    id: 'emergency-exit',
    label: 'Emergency Exit',
    description: 'Switches out when HP drops below half.'
  },
  {
    id: 'fairy-aura',
    label: 'Fairy Aura',
    description: 'Powers up Fairy-type moves of all Pokémon.'
  },
  {
    id: 'filter',
    label: 'Filter',
    description: 'Reduces damage from super-effective moves.'
  },
  {
    id: 'flame-body',
    label: 'Flame Body',
    description: 'Contact may burn the attacker.'
  },
  {
    id: 'flare-boost',
    label: 'Flare Boost',
    description: 'Powers up special moves when burned.'
  },
  {
    id: 'flash-fire',
    label: 'Flash Fire',
    description: 'Powers up Fire-type moves if hit by one.'
  },
  {
    id: 'flower-gift',
    label: 'Flower Gift',
    description: 'Boosts Attack and Sp. Def of allies in harsh sunlight.'
  },
  {
    id: 'flower-veil',
    label: 'Flower Veil',
    description: 'Prevents stat/status problems for Grass-type allies.'
  },
  {
    id: 'fluffy',
    label: 'Fluffy',
    description: 'Halves damage from contact moves but doubles Fire damage.'
  },
  {
    id: 'forecast',
    label: 'Forecast',
    description: 'Changes type based on weather.'
  },
  {
    id: 'forewarn',
    label: 'Forewarn',
    description: 'Alerts to an opponent\'s strongest move.'
  },
  {
    id: 'friend-guard',
    label: 'Friend Guard',
    description: 'Reduces damage to allies.'
  },
  {
    id: 'frisk',
    label: 'Frisk',
    description: 'Identifies an opponent\'s held item.'
  },
  {
    id: 'full-metal-body',
    label: 'Full Metal Body',
    description: 'Prevents other Pokémon from lowering stats.'
  },
  {
    id: 'fur-coat',
    label: 'Fur Coat',
    description: 'Halves damage from physical moves.'
  },
  {
    id: 'gale-wings',
    label: 'Gale Wings',
    description: 'Flying-type moves have priority.',
    generationChanges: {
      legacy: 'Gen 6: Always has priority',
      modern: 'Gen 7+: Only at full HP'
    }
  },
  {
    id: 'galvanize',
    label: 'Galvanize',
    description: 'Normal-type moves become Electric-type and gain 1.2× power.'
  },
  {
    id: 'gluttony',
    label: 'Gluttony',
    description: 'Eats Berries early when HP drops below ¼ (instead of ½).'
  },
  {
    id: 'good-as-gold',
    label: 'Good As Gold',
    description: 'Immune to status moves.'
  },
  {
    id: 'gooey',
    label: 'Gooey',
    description: 'Contact lowers the attacker\'s Speed.'
  },
  {
    id: 'gorilla-tactics',
    label: 'Gorilla Tactics',
    description: 'Boosts Attack but can only use the first selected move.',
    generationChanges: {
      legacy: 'Gen 8: Locked into first move',
      modern: 'Gen 9: Can switch moves freely'
    }
  },
  {
    id: 'grass-pelt',
    label: 'Grass Pelt',
    description: 'Boosts Defense on Grassy Terrain.'
  },
  {
    id: 'grassy-surge',
    label: 'Grassy Surge',
    description: 'Creates Grassy Terrain when entering battle.'
  },
  {
    id: 'grim-neigh',
    label: 'Grim Neigh',
    description: 'Boosts Sp. Atk after KOing an opponent.'
  },
  {
    id: 'guard-dog',
    label: 'Guard Dog',
    description: 'Immune to Intimidate and cannot be forced to switch.'
  },
  {
    id: 'gulp-missile',
    label: 'Gulp Missile',
    description: 'Returns with prey after using Surf or Dive; damages attacker when hit.'
  },
  {
    id: 'guts',
    label: 'Guts',
    description: 'Boosts Attack when affected by a status condition.'
  },
  {
    id: 'hadron-engine',
    label: 'Hadron Engine',
    description: 'Creates Electric Terrain and boosts Sp. Atk on it.'
  },
  {
    id: 'harvest',
    label: 'Harvest',
    description: 'May restore a consumed Berry.'
  },
  {
    id: 'healer',
    label: 'Healer',
    description: 'May heal an ally\'s status condition.'
  },
  {
    id: 'heatproof',
    label: 'Heatproof',
    description: 'Halves damage from Fire-type moves and burn.'
  },
  {
    id: 'heavy-metal',
    label: 'Heavy Metal',
    description: 'Doubles the Pokémon\'s weight.'
  },
  {
    id: 'honey-gather',
    label: 'Honey Gather',
    description: 'May gather Honey after battle.'
  },
  {
    id: 'huge-power',
    label: 'Huge Power',
    description: 'Doubles the Pokémon\'s Attack stat.'
  },
  {
    id: 'hunger-switch',
    label: 'Hunger Switch',
    description: 'Changes form between Full Belly and Hangry Mode each turn.'
  },
  {
    id: 'hustle',
    label: 'Hustle',
    description: 'Boosts Attack but lowers accuracy.'
  },
  {
    id: 'hydration',
    label: 'Hydration',
    description: 'Cures status conditions in rain.'
  },
  {
    id: 'hyper-cutter',
    label: 'Hyper Cutter',
    description: 'Prevents other Pokémon from lowering Attack.'
  },
  {
    id: 'ice-body',
    label: 'Ice Body',
    description: 'Restores HP in hail or snow.'
  },
  {
    id: 'ice-face',
    label: 'Ice Face',
    description: 'Physical attacks only damage the ice head; restored in hail or snow.'
  },
  {
    id: 'ice-scales',
    label: 'Ice Scales',
    description: 'Halves damage from special moves.'
  },
  {
    id: 'illuminate',
    label: 'Illuminate',
    description: 'Raises accuracy (outside of battle: increases wild encounter rate).'
  },
  {
    id: 'illusion',
    label: 'Illusion',
    description: 'Appears as the last Pokémon in the party until hit.'
  },
  {
    id: 'immunity',
    label: 'Immunity',
    description: 'Cannot be poisoned.'
  },
  {
    id: 'imposter',
    label: 'Imposter',
    description: 'Transforms into the opponent upon entering battle.'
  },
  {
    id: 'infiltrator',
    label: 'Infiltrator',
    description: 'Passes through barriers and substitutes.'
  },
  {
    id: 'innards-out',
    label: 'Innards Out',
    description: 'Damages the attacker when knocked out.'
  },
  {
    id: 'inner-focus',
    label: 'Inner Focus',
    description: 'Prevents flinching and Intimidate.'
  },
  {
    id: 'insomnia',
    label: 'Insomnia',
    description: 'Prevents sleep.'
  },
  {
    id: 'intimidate',
    label: 'Intimidate',
    description: 'Lowers opposing Pokémon\'s Attack when entering battle.'
  },
  {
    id: 'intrepid-sword',
    label: 'Intrepid Sword',
    description: 'Boosts Attack when entering battle.'
  },
  {
    id: 'iron-barbs',
    label: 'Iron Barbs',
    description: 'Damages attackers on contact.'
  },
  {
    id: 'iron-fist',
    label: 'Iron Fist',
    description: 'Powers up punching moves.'
  },
  {
    id: 'justified',
    label: 'Justified',
    description: 'Boosts Attack when hit by Dark-type moves.'
  },
  {
    id: 'keen-eye',
    label: 'Keen Eye',
    description: 'Prevents accuracy reduction and ignores evasion boosts.'
  },
  {
    id: 'klutz',
    label: 'Klutz',
    description: 'Cannot use held items.'
  },
  {
    id: 'leaf-guard',
    label: 'Leaf Guard',
    description: 'Prevents status conditions in harsh sunlight.'
  },
  {
    id: 'levitate',
    label: 'Levitate',
    description: 'Gives immunity to Ground-type moves.'
  },
  {
    id: 'libero',
    label: 'Libero',
    description: 'Changes type to match the move it\'s about to use.',
    generationChanges: {
      legacy: 'Gen 8: Changes before every move',
      modern: 'Gen 9: Only once per switch-in'
    }
  },
  {
    id: 'light-metal',
    label: 'Light Metal',
    description: 'Halves the Pokémon\'s weight.'
  },
  {
    id: 'lightning-rod',
    label: 'Lightning Rod',
    description: 'Draws in Electric-type moves and raises Sp. Atk.'
  },
  {
    id: 'limber',
    label: 'Limber',
    description: 'Cannot be paralyzed.'
  },
  {
    id: 'lingering-aroma',
    label: 'Lingering Aroma',
    description: 'Contact changes the attacker\'s Ability to Lingering Aroma.'
  },
  {
    id: 'liquid-ooze',
    label: 'Liquid Ooze',
    description: 'Damages attackers using draining moves.'
  },
  {
    id: 'liquid-voice',
    label: 'Liquid Voice',
    description: 'Sound-based moves become Water-type.'
  },
  {
    id: 'long-reach',
    label: 'Long Reach',
    description: 'Uses moves without making contact.'
  },
  {
    id: 'magic-bounce',
    label: 'Magic Bounce',
    description: 'Reflects status moves back at the attacker.'
  },
  {
    id: 'magic-guard',
    label: 'Magic Guard',
    description: 'Only damaged by attacks.'
  },
  {
    id: 'magician',
    label: 'Magician',
    description: 'Steals the target\'s held item on hit.'
  },
  {
    id: 'magma-armor',
    label: 'Magma Armor',
    description: 'Cannot be frozen.'
  },
  {
    id: 'magnet-pull',
    label: 'Magnet Pull',
    description: 'Prevents Steel-type Pokémon from fleeing.'
  },
  {
    id: 'marvel-scale',
    label: 'Marvel Scale',
    description: 'Boosts Defense when affected by a status condition.'
  },
  {
    id: 'mega-launcher',
    label: 'Mega Launcher',
    description: 'Powers up pulse and aura moves.'
  },
  {
    id: 'merciless',
    label: 'Merciless',
    description: 'Moves always critical hit poisoned targets.'
  },
  {
    id: 'mimicry',
    label: 'Mimicry',
    description: 'Type changes based on terrain.'
  },
  {
    id: 'minus',
    label: 'Minus',
    description: 'Boosts Sp. Atk if Plus or Minus ally is present.'
  },
  {
    id: 'mirror-armor',
    label: 'Mirror Armor',
    description: 'Reflects stat-lowering effects.'
  },
  {
    id: 'misty-surge',
    label: 'Misty Surge',
    description: 'Creates Misty Terrain when entering battle.'
  },
  {
    id: 'mold-breaker',
    label: 'Mold Breaker',
    description: 'Moves ignore Abilities that would affect them.'
  },
  {
    id: 'moody',
    label: 'Moody',
    description: 'Sharply raises one stat and lowers another each turn.'
  },
  {
    id: 'motor-drive',
    label: 'Motor Drive',
    description: 'Boosts Speed when hit by Electric-type moves.'
  },
  {
    id: 'moxie',
    label: 'Moxie',
    description: 'Boosts Attack after KOing an opponent.'
  },
  {
    id: 'multiscale',
    label: 'Multiscale',
    description: 'Halves damage when at full HP.'
  },
  {
    id: 'multitype',
    label: 'Multitype',
    description: 'Type changes based on held Plate.'
  },
  {
    id: 'mummy',
    label: 'Mummy',
    description: 'Contact changes the attacker\'s Ability to Mummy.'
  },
  {
    id: 'mycelium-might',
    label: 'Mycelium Might',
    description: 'Status moves ignore Abilities but move last.'
  },
  {
    id: 'natural-cure',
    label: 'Natural Cure',
    description: 'Cures status conditions when switching out.'
  },
  {
    id: 'neuroforce',
    label: 'Neuroforce',
    description: 'Powers up super-effective moves.'
  },
  {
    id: 'neutralizing-gas',
    label: 'Neutralizing Gas',
    description: 'Neutralizes all Abilities while present.'
  },
  {
    id: 'no-guard',
    label: 'No Guard',
    description: 'Ensures all moves hit, by and against the Pokémon.'
  },
  {
    id: 'normalize',
    label: 'Normalize',
    description: 'All moves become Normal-type.'
  },
  {
    id: 'oblivious',
    label: 'Oblivious',
    description: 'Prevents infatuation and Intimidate.'
  },
  {
    id: 'opportunist',
    label: 'Opportunist',
    description: 'Copies opponent\'s stat increases.'
  },
  {
    id: 'orichalcum-pulse',
    label: 'Orichalcum Pulse',
    description: 'Creates harsh sunlight and boosts Attack on it.'
  },
  {
    id: 'overcoat',
    label: 'Overcoat',
    description: 'Protects from weather damage and powder moves.'
  },
  {
    id: 'overgrow',
    label: 'Overgrow',
    description: 'Powers up Grass-type moves when HP is low.'
  },
  {
    id: 'own-tempo',
    label: 'Own Tempo',
    description: 'Prevents confusion and Intimidate.'
  },
  {
    id: 'parental-bond',
    label: 'Parental Bond',
    description: 'Parent and child attack together.',
    generationChanges: {
      legacy: 'Gen 6: Second hit deals 50% damage',
      modern: 'Gen 7+: Second hit deals 25% damage'
    }
  },
  {
    id: 'pastel-veil',
    label: 'Pastel Veil',
    description: 'Protects self and allies from poison.'
  },
  {
    id: 'perish-body',
    label: 'Perish Body',
    description: 'Contact causes both Pokémon to faint in 3 turns.'
  },
  {
    id: 'pickpocket',
    label: 'Pickpocket',
    description: 'Steals the attacker\'s held item on contact.'
  },
  {
    id: 'pickup',
    label: 'Pickup',
    description: 'May pick up items.'
  },
  {
    id: 'pixilate',
    label: 'Pixilate',
    description: 'Normal-type moves become Fairy-type and gain 1.2× power.'
  },
  {
    id: 'plus',
    label: 'Plus',
    description: 'Boosts Sp. Atk if Plus or Minus ally is present.'
  },
  {
    id: 'poison-heal',
    label: 'Poison Heal',
    description: 'Restores HP when poisoned instead of taking damage.'
  },
  {
    id: 'poison-point',
    label: 'Poison Point',
    description: 'Contact may poison the attacker.'
  },
  {
    id: 'poison-touch',
    label: 'Poison Touch',
    description: 'May poison a target on contact.'
  },
  {
    id: 'power-construct',
    label: 'Power Construct',
    description: 'Changes form when HP drops below half.'
  },
  {
    id: 'power-of-alchemy',
    label: 'Power Of Alchemy',
    description: 'Copies the Ability of a defeated ally.'
  },
  {
    id: 'power-spot',
    label: 'Power Spot',
    description: 'Powers up allies\' moves.'
  },
  {
    id: 'prankster',
    label: 'Prankster',
    description: 'Gives priority to status moves.',
    generationChanges: {
      legacy: 'Gen 6: Works against all types',
      modern: 'Gen 7+: Fails against Dark-types'
    }
  },
  {
    id: 'pressure',
    label: 'Pressure',
    description: 'Makes opposing Pokémon use 2 PP instead of 1.'
  },
  {
    id: 'primordial-sea',
    label: 'Primordial Sea',
    description: 'Creates heavy rain that nullifies Fire-type moves.'
  },
  {
    id: 'prism-armor',
    label: 'Prism Armor',
    description: 'Reduces damage from super-effective moves.'
  },
  {
    id: 'propeller-tail',
    label: 'Propeller Tail',
    description: 'Ignores move redirection from Abilities.'
  },
  {
    id: 'protean',
    label: 'Protean',
    description: 'Changes type to match the move it\'s about to use.',
    generationChanges: {
      legacy: 'Gen 6-8: Changes before every move',
      modern: 'Gen 9: Only once per switch-in'
    }
  },
  {
    id: 'protosynthesis',
    label: 'Protosynthesis',
    description: 'Boosts highest stat in harsh sunlight or with Booster Energy.'
  },
  {
    id: 'psychic-surge',
    label: 'Psychic Surge',
    description: 'Creates Psychic Terrain when entering battle.'
  },
  {
    id: 'punk-rock',
    label: 'Punk Rock',
    description: 'Powers up sound moves and reduces damage from them.'
  },
  {
    id: 'pure-power',
    label: 'Pure Power',
    description: 'Doubles the Pokémon\'s Attack stat.'
  },
  {
    id: 'purifying-salt',
    label: 'Purifying Salt',
    description: 'Immune to status conditions and halves Ghost-type damage.'
  },
  {
    id: 'quark-drive',
    label: 'Quark Drive',
    description: 'Boosts highest stat on Electric Terrain or with Booster Energy.'
  },
  {
    id: 'queenly-majesty',
    label: 'Queenly Majesty',
    description: 'Prevents priority moves from hitting.'
  },
  {
    id: 'quick-draw',
    label: 'Quick Draw',
    description: 'May move first occasionally.'
  },
  {
    id: 'quick-feet',
    label: 'Quick Feet',
    description: 'Boosts Speed when affected by a status condition.'
  },
  {
    id: 'rain-dish',
    label: 'Rain Dish',
    description: 'Restores HP in rain.'
  },
  {
    id: 'rattled',
    label: 'Rattled',
    description: 'Boosts Speed when hit by Bug, Dark, or Ghost moves.'
  },
  {
    id: 'receiver',
    label: 'Receiver',
    description: 'Copies the Ability of a defeated ally.'
  },
  {
    id: 'reckless',
    label: 'Reckless',
    description: 'Powers up recoil moves.'
  },
  {
    id: 'refrigerate',
    label: 'Refrigerate',
    description: 'Normal-type moves become Ice-type and gain 1.2× power.'
  },
  {
    id: 'regenerator',
    label: 'Regenerator',
    description: 'Restores 1/3 HP when switching out.'
  },
  {
    id: 'ripen',
    label: 'Ripen',
    description: 'Doubles the effect of Berries.'
  },
  {
    id: 'rivalry',
    label: 'Rivalry',
    description: 'Deals more damage to same gender, less to opposite.'
  },
  {
    id: 'rks-system',
    label: 'Rks System',
    description: 'Type changes based on held Memory.'
  },
  {
    id: 'rock-head',
    label: 'Rock Head',
    description: 'Protects from recoil damage.'
  },
  {
    id: 'rocky-payload',
    label: 'Rocky Payload',
    description: 'Powers up Rock-type moves.'
  },
  {
    id: 'rough-skin',
    label: 'Rough Skin',
    description: 'Damages attackers on contact.'
  },
  {
    id: 'run-away',
    label: 'Run Away',
    description: 'Enables sure escape from wild Pokémon.'
  },
  {
    id: 'sand-force',
    label: 'Sand Force',
    description: 'Powers up Rock, Ground, and Steel moves in a sandstorm.'
  },
  {
    id: 'sand-rush',
    label: 'Sand Rush',
    description: 'Boosts Speed in a sandstorm.'
  },
  {
    id: 'sand-spit',
    label: 'Sand Spit',
    description: 'Creates a sandstorm when hit.'
  },
  {
    id: 'sand-stream',
    label: 'Sand Stream',
    description: 'Summons a sandstorm when entering battle.'
  },
  {
    id: 'sand-veil',
    label: 'Sand Veil',
    description: 'Boosts evasion in a sandstorm.'
  },
  {
    id: 'sap-sipper',
    label: 'Sap Sipper',
    description: 'Boosts Attack when hit by Grass-type moves.'
  },
  {
    id: 'schooling',
    label: 'Schooling',
    description: 'Forms a school when HP is above 25%.'
  },
  {
    id: 'scrappy',
    label: 'Scrappy',
    description: 'Enables Normal and Fighting moves to hit Ghost types.'
  },
  {
    id: 'screen-cleaner',
    label: 'Screen Cleaner',
    description: 'Removes effects of Light Screen, Reflect, and Aurora Veil when entering battle.'
  },
  {
    id: 'seed-sower',
    label: 'Seed Sower',
    description: 'Creates Grassy Terrain when hit.'
  },
  {
    id: 'serene-grace',
    label: 'Serene Grace',
    description: 'Doubles the chance of move effects occurring.'
  },
  {
    id: 'shadow-shield',
    label: 'Shadow Shield',
    description: 'Halves damage when at full HP.'
  },
  {
    id: 'shadow-tag',
    label: 'Shadow Tag',
    description: 'Prevents opposing Pokémon from fleeing.'
  },
  {
    id: 'sharpness',
    label: 'Sharpness',
    description: 'Powers up slicing moves.'
  },
  {
    id: 'shed-skin',
    label: 'Shed Skin',
    description: 'May cure status conditions.'
  },
  {
    id: 'sheer-force',
    label: 'Sheer Force',
    description: 'Powers up moves but removes their effects.'
  },
  {
    id: 'shell-armor',
    label: 'Shell Armor',
    description: 'Hard armor protects from critical hits.'
  },
  {
    id: 'shield-dust',
    label: 'Shield Dust',
    description: 'Blocks additional effects of attacks.'
  },
  {
    id: 'shields-down',
    label: 'Shields Down',
    description: 'Changes form when HP drops below half.'
  },
  {
    id: 'simple',
    label: 'Simple',
    description: 'Doubles stat changes.'
  },
  {
    id: 'skill-link',
    label: 'Skill Link',
    description: 'Multi-hit moves always hit the maximum times.'
  },
  {
    id: 'slow-start',
    label: 'Slow Start',
    description: 'Halves Attack and Speed for 5 turns after entering battle.'
  },
  {
    id: 'slush-rush',
    label: 'Slush Rush',
    description: 'Boosts Speed in hail or snow.'
  },
  {
    id: 'sniper',
    label: 'Sniper',
    description: 'Powers up critical hits.'
  },
  {
    id: 'snow-cloak',
    label: 'Snow Cloak',
    description: 'Boosts evasion in hail or snow.'
  },
  {
    id: 'snow-warning',
    label: 'Snow Warning',
    description: 'Summons snow when entering battle.'
  },
  {
    id: 'solar-power',
    label: 'Solar Power',
    description: 'Boosts Sp. Atk in harsh sunlight but loses HP.'
  },
  {
    id: 'solid-rock',
    label: 'Solid Rock',
    description: 'Reduces damage from super-effective moves.'
  },
  {
    id: 'soul-heart',
    label: 'Soul Heart',
    description: 'Boosts Sp. Atk when any Pokémon faints.'
  },
  {
    id: 'soundproof',
    label: 'Soundproof',
    description: 'Gives immunity to sound-based moves.'
  },
  {
    id: 'speed-boost',
    label: 'Speed Boost',
    description: 'Boosts Speed each turn.'
  },
  {
    id: 'stakeout',
    label: 'Stakeout',
    description: 'Doubles damage to Pokémon switching in.'
  },
  {
    id: 'stall',
    label: 'Stall',
    description: 'Always moves last.'
  },
  {
    id: 'stalwart',
    label: 'Stalwart',
    description: 'Ignores move redirection from Abilities.'
  },
  {
    id: 'stamina',
    label: 'Stamina',
    description: 'Boosts Defense when hit.'
  },
  {
    id: 'stance-change',
    label: 'Stance Change',
    description: 'Changes form based on move used.'
  },
  {
    id: 'static',
    label: 'Static',
    description: 'Contact may paralyze the attacker.'
  },
  {
    id: 'steadfast',
    label: 'Steadfast',
    description: 'Boosts Speed when flinched.'
  },
  {
    id: 'steam-engine',
    label: 'Steam Engine',
    description: 'Drastically boosts Speed when hit by Fire or Water moves.'
  },
  {
    id: 'steelworker',
    label: 'Steelworker',
    description: 'Powers up Steel-type moves.'
  },
  {
    id: 'steely-spirit',
    label: 'Steely Spirit',
    description: 'Powers up Steel-type moves of the user and allies.',
    generationChanges: {
      legacy: 'Gen 8: Allies only',
      modern: 'Gen 9: User and allies'
    }
  },
  {
    id: 'stench',
    label: 'Stench',
    description: 'May cause the target to flinch.'
  },
  {
    id: 'sticky-hold',
    label: 'Sticky Hold',
    description: 'Prevents held item from being removed.'
  },
  {
    id: 'storm-drain',
    label: 'Storm Drain',
    description: 'Draws in Water-type moves and raises Sp. Atk.'
  },
  {
    id: 'strong-jaw',
    label: 'Strong Jaw',
    description: 'Powers up biting moves.'
  },
  {
    id: 'sturdy',
    label: 'Sturdy',
    description: 'Cannot be knocked out with one hit; immune to OHKO moves.',
    generationChanges: {
      legacy: 'Gen 3-4: Only prevents OHKO moves',
      modern: 'Gen 5+: Also survives any hit at full HP'
    }
  },
  {
    id: 'suction-cups',
    label: 'Suction Cups',
    description: 'Negates moves that force switching out.'
  },
  {
    id: 'super-luck',
    label: 'Super Luck',
    description: 'Heightened critical hit ratio.'
  },
  {
    id: 'supreme-overlord',
    label: 'Supreme Overlord',
    description: 'Powers up based on number of fainted allies.'
  },
  {
    id: 'surge-surfer',
    label: 'Surge Surfer',
    description: 'Doubles Speed on Electric Terrain.'
  },
  {
    id: 'swarm',
    label: 'Swarm',
    description: 'Powers up Bug-type moves when HP is low.'
  },
  {
    id: 'sweet-veil',
    label: 'Sweet Veil',
    description: 'Prevents self and allies from falling asleep.'
  },
  {
    id: 'swift-swim',
    label: 'Swift Swim',
    description: 'Boosts Speed in rain.'
  },
  {
    id: 'sword-of-ruin',
    label: 'Sword Of Ruin',
    description: 'Lowers the Defense of all other Pokémon.'
  },
  {
    id: 'symbiosis',
    label: 'Symbiosis',
    description: 'Passes held item to an ally when they use theirs.'
  },
  {
    id: 'synchronize',
    label: 'Synchronize',
    description: 'Passes poison, paralysis, or burn to the attacker.'
  },
  {
    id: 'tablets-of-ruin',
    label: 'Tablets Of Ruin',
    description: 'Lowers the Attack of all other Pokémon.'
  },
  {
    id: 'tangled-feet',
    label: 'Tangled Feet',
    description: 'Boosts evasion when confused.'
  },
  {
    id: 'tangling-hair',
    label: 'Tangling Hair',
    description: 'Contact lowers the attacker\'s Speed.'
  },
  {
    id: 'technician',
    label: 'Technician',
    description: 'Powers up weak moves.'
  },
  {
    id: 'telepathy',
    label: 'Telepathy',
    description: 'Avoids damage from allies.'
  },
  {
    id: 'teravolt',
    label: 'Teravolt',
    description: 'Moves ignore Abilities that would affect them.'
  },
  {
    id: 'thermal-exchange',
    label: 'Thermal Exchange',
    description: 'Boosts Attack when hit by Fire-type moves; cannot be burned.'
  },
  {
    id: 'thick-fat',
    label: 'Thick Fat',
    description: 'Halves damage from Fire and Ice moves.'
  },
  {
    id: 'tinted-lens',
    label: 'Tinted Lens',
    description: 'Powers up "not very effective" moves.'
  },
  {
    id: 'torrent',
    label: 'Torrent',
    description: 'Powers up Water-type moves when HP is low.'
  },
  {
    id: 'tough-claws',
    label: 'Tough Claws',
    description: 'Powers up contact moves.'
  },
  {
    id: 'toxic-boost',
    label: 'Toxic Boost',
    description: 'Powers up physical moves when poisoned.'
  },
  {
    id: 'toxic-chain',
    label: 'Toxic Chain',
    description: 'May badly poison the target.'
  },
  {
    id: 'toxic-debris',
    label: 'Toxic Debris',
    description: 'Scatters Toxic Spikes when hit by physical moves.'
  },
  {
    id: 'trace',
    label: 'Trace',
    description: 'Copies the opponent\'s Ability.'
  },
  {
    id: 'transistor',
    label: 'Transistor',
    description: 'Powers up Electric-type moves.'
  },
  {
    id: 'triage',
    label: 'Triage',
    description: 'Gives priority to healing moves.'
  },
  {
    id: 'truant',
    label: 'Truant',
    description: 'Can only move every other turn.'
  },
  {
    id: 'turboblaze',
    label: 'Turboblaze',
    description: 'Moves ignore Abilities that would affect them.'
  },
  {
    id: 'unaware',
    label: 'Unaware',
    description: 'Ignores stat changes when attacking or being attacked.'
  },
  {
    id: 'unburden',
    label: 'Unburden',
    description: 'Doubles Speed when the held item is used or lost.'
  },
  {
    id: 'unnerve',
    label: 'Unnerve',
    description: 'Makes opposing Pokémon unable to eat Berries.'
  },
  {
    id: 'unseen-fist',
    label: 'Unseen Fist',
    description: 'Contact moves can hit through protection.'
  },
  {
    id: 'vessel-of-ruin',
    label: 'Vessel Of Ruin',
    description: 'Lowers the Sp. Atk of all other Pokémon.'
  },
  {
    id: 'victory-star',
    label: 'Victory Star',
    description: 'Boosts the accuracy of the Pokémon and its allies.'
  },
  {
    id: 'vital-spirit',
    label: 'Vital Spirit',
    description: 'Prevents sleep.'
  },
  {
    id: 'volt-absorb',
    label: 'Volt Absorb',
    description: 'Restores HP when hit by Electric-type moves.'
  },
  {
    id: 'wandering-spirit',
    label: 'Wandering Spirit',
    description: 'Swaps Abilities with the attacker on contact.'
  },
  {
    id: 'water-absorb',
    label: 'Water Absorb',
    description: 'Restores HP when hit by Water-type moves.'
  },
  {
    id: 'water-bubble',
    label: 'Water Bubble',
    description: 'Powers up Water-type moves; halves Fire damage; cannot be burned.'
  },
  {
    id: 'water-compaction',
    label: 'Water Compaction',
    description: 'Sharply boosts Defense when hit by Water-type moves.'
  },
  {
    id: 'water-veil',
    label: 'Water Veil',
    description: 'Cannot be burned.'
  },
  {
    id: 'weak-armor',
    label: 'Weak Armor',
    description: 'Physical hits lower Defense but sharply raise Speed.'
  },
  {
    id: 'well-baked-body',
    label: 'Well Baked Body',
    description: 'Immune to Fire-type moves; sharply raises Defense when hit by one.'
  },
  {
    id: 'white-smoke',
    label: 'White Smoke',
    description: 'Prevents other Pokémon from lowering stats.'
  },
  {
    id: 'wimp-out',
    label: 'Wimp Out',
    description: 'Switches out when HP drops below half.'
  },
  {
    id: 'wind-power',
    label: 'Wind Power',
    description: 'Becomes charged when hit by wind moves, boosting the next Electric-type move.'
  },
  {
    id: 'wind-rider',
    label: 'Wind Rider',
    description: 'Boosts Attack when hit by wind moves; immune to wind moves.'
  },
  {
    id: 'wonder-guard',
    label: 'Wonder Guard',
    description: 'Only super-effective moves deal damage.'
  },
  {
    id: 'wonder-skin',
    label: 'Wonder Skin',
    description: 'Lowers accuracy of status moves targeting the Pokémon.'
  },
  {
    id: 'zen-mode',
    label: 'Zen Mode',
    description: 'Changes form when HP drops below half.'
  },
  {
    id: 'zero-to-hero',
    label: 'Zero To Hero',
    description: 'Transforms into Hero Form when switching out.'
  }
].sort((a, b) => a.label.localeCompare(b.label))

// Create a map for O(1) lookup by ID
export const AbilitiesMap = Abilities.reduce((map, ability) => {
  map[ability.id] = ability
  return map
}, {})
