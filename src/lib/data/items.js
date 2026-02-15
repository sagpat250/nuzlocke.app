/**
 * Pokemon Held Items Dataset with Descriptions
 * Includes common held items found in Nuzlocke runs
 */

export const Items = [
  // Berries - HP Restoration
  { id: 'oran-berry', name: 'Oran Berry', description: 'Restores 10 HP when HP is low' },
  { id: 'sitrus-berry', name: 'Sitrus Berry', description: 'Restores 25% HP when HP drops below 50%' },
  { id: 'berry-juice', name: 'Berry Juice', description: 'Restores 20 HP when HP drops below 50%' },
  
  // Berries - Status Healing
  { id: 'cheri-berry', name: 'Cheri Berry', description: 'Cures paralysis' },
  { id: 'chesto-berry', name: 'Chesto Berry', description: 'Cures sleep' },
  { id: 'pecha-berry', name: 'Pecha Berry', description: 'Cures poison' },
  { id: 'rawst-berry', name: 'Rawst Berry', description: 'Cures burn' },
  { id: 'aspear-berry', name: 'Aspear Berry', description: 'Cures freeze' },
  { id: 'persim-berry', name: 'Persim Berry', description: 'Cures confusion' },
  { id: 'lum-berry', name: 'Lum Berry', description: 'Cures any status condition' },
  
  // Berries - Stat Boost
  { id: 'liechi-berry', name: 'Liechi Berry', description: 'Raises Attack when HP is low' },
  { id: 'ganlon-berry', name: 'Ganlon Berry', description: 'Raises Defense when HP is low' },
  { id: 'salac-berry', name: 'Salac Berry', description: 'Raises Speed when HP is low' },
  { id: 'petaya-berry', name: 'Petaya Berry', description: 'Raises Sp. Atk when HP is low' },
  { id: 'apicot-berry', name: 'Apicot Berry', description: 'Raises Sp. Def when HP is low' },
  { id: 'lansat-berry', name: 'Lansat Berry', description: 'Raises critical hit ratio when HP is low' },
  { id: 'starf-berry', name: 'Starf Berry', description: 'Sharply raises a random stat when HP is low' },
  { id: 'micle-berry', name: 'Micle Berry', description: 'Raises accuracy when HP is low' },
  
  // Berries - Damage Reduction
  { id: 'occa-berry', name: 'Occa Berry', description: 'Halves damage from super-effective Fire-type move' },
  { id: 'passho-berry', name: 'Passho Berry', description: 'Halves damage from super-effective Water-type move' },
  { id: 'wacan-berry', name: 'Wacan Berry', description: 'Halves damage from super-effective Electric-type move' },
  { id: 'rindo-berry', name: 'Rindo Berry', description: 'Halves damage from super-effective Grass-type move' },
  { id: 'yache-berry', name: 'Yache Berry', description: 'Halves damage from super-effective Ice-type move' },
  { id: 'chople-berry', name: 'Chople Berry', description: 'Halves damage from super-effective Fighting-type move' },
  { id: 'kebia-berry', name: 'Kebia Berry', description: 'Halves damage from super-effective Poison-type move' },
  { id: 'shuca-berry', name: 'Shuca Berry', description: 'Halves damage from super-effective Ground-type move' },
  { id: 'coba-berry', name: 'Coba Berry', description: 'Halves damage from super-effective Flying-type move' },
  { id: 'payapa-berry', name: 'Payapa Berry', description: 'Halves damage from super-effective Psychic-type move' },
  { id: 'tanga-berry', name: 'Tanga Berry', description: 'Halves damage from super-effective Bug-type move' },
  { id: 'charti-berry', name: 'Charti Berry', description: 'Halves damage from super-effective Rock-type move' },
  { id: 'kasib-berry', name: 'Kasib Berry', description: 'Halves damage from super-effective Ghost-type move' },
  { id: 'haban-berry', name: 'Haban Berry', description: 'Halves damage from super-effective Dragon-type move' },
  { id: 'colbur-berry', name: 'Colbur Berry', description: 'Halves damage from super-effective Dark-type move' },
  { id: 'babiri-berry', name: 'Babiri Berry', description: 'Halves damage from super-effective Steel-type move' },
  { id: 'chilan-berry', name: 'Chilan Berry', description: 'Halves damage from Normal-type move' },
  { id: 'roseli-berry', name: 'Roseli Berry', description: 'Halves damage from super-effective Fairy-type move' },
  
  // Type-Boosting Items
  { id: 'charcoal', name: 'Charcoal', description: 'Powers up Fire-type moves by 20%' },
  { id: 'mystic-water', name: 'Mystic Water', description: 'Powers up Water-type moves by 20%' },
  { id: 'miracle-seed', name: 'Miracle Seed', description: 'Powers up Grass-type moves by 20%' },
  { id: 'magnet', name: 'Magnet', description: 'Powers up Electric-type moves by 20%' },
  { id: 'never-melt-ice', name: 'Never-Melt-Ice', description: 'Powers up Ice-type moves by 20%' },
  { id: 'black-belt', name: 'Black Belt', description: 'Powers up Fighting-type moves by 20%' },
  { id: 'poison-barb', name: 'Poison Barb', description: 'Powers up Poison-type moves by 20%' },
  { id: 'soft-sand', name: 'Soft Sand', description: 'Powers up Ground-type moves by 20%' },
  { id: 'sharp-beak', name: 'Sharp Beak', description: 'Powers up Flying-type moves by 20%' },
  { id: 'twisted-spoon', name: 'Twisted Spoon', description: 'Powers up Psychic-type moves by 20%' },
  { id: 'silver-powder', name: 'Silver Powder', description: 'Powers up Bug-type moves by 20%' },
  { id: 'hard-stone', name: 'Hard Stone', description: 'Powers up Rock-type moves by 20%' },
  { id: 'spell-tag', name: 'Spell Tag', description: 'Powers up Ghost-type moves by 20%' },
  { id: 'dragon-fang', name: 'Dragon Fang', description: 'Powers up Dragon-type moves by 20%' },
  { id: 'black-glasses', name: 'Black Glasses', description: 'Powers up Dark-type moves by 20%' },
  { id: 'metal-coat', name: 'Metal Coat', description: 'Powers up Steel-type moves by 20%' },
  { id: 'silk-scarf', name: 'Silk Scarf', description: 'Powers up Normal-type moves by 20%' },
  { id: 'pixie-plate', name: 'Pixie Plate', description: 'Powers up Fairy-type moves by 20%' },
  
  // Choice Items
  { id: 'choice-band', name: 'Choice Band', description: 'Boosts Attack by 50% but locks into one move' },
  { id: 'choice-specs', name: 'Choice Specs', description: 'Boosts Sp. Atk by 50% but locks into one move' },
  { id: 'choice-scarf', name: 'Choice Scarf', description: 'Boosts Speed by 50% but locks into one move' },
  
  // Stat Boosting Items
  { id: 'leftovers', name: 'Leftovers', description: 'Restores 1/16 HP each turn' },
  { id: 'life-orb', name: 'Life Orb', description: 'Boosts move power by 30% but takes 10% HP per attack' },
  { id: 'assault-vest', name: 'Assault Vest', description: 'Boosts Sp. Def by 50% but can\'t use status moves' },
  { id: 'focus-sash', name: 'Focus Sash', description: 'Survives a fatal hit with 1 HP when at full HP' },
  { id: 'focus-band', name: 'Focus Band', description: '10% chance to survive a fatal hit with 1 HP' },
  { id: 'muscle-band', name: 'Muscle Band', description: 'Boosts power of physical moves by 10%' },
  { id: 'wise-glasses', name: 'Wise Glasses', description: 'Boosts power of special moves by 10%' },
  { id: 'expert-belt', name: 'Expert Belt', description: 'Boosts power of super-effective moves by 20%' },
  { id: 'scope-lens', name: 'Scope Lens', description: 'Raises critical hit ratio' },
  { id: 'razor-claw', name: 'Razor Claw', description: 'Raises critical hit ratio' },
  { id: 'wide-lens', name: 'Wide Lens', description: 'Boosts accuracy by 10%' },
  { id: 'zoom-lens', name: 'Zoom Lens', description: 'Boosts accuracy by 20% when moving last' },
  { id: 'metronome', name: 'Metronome', description: 'Boosts power of consecutive same move use' },
  
  // Defensive Items
  { id: 'rocky-helmet', name: 'Rocky Helmet', description: 'Damages attackers using contact moves' },
  { id: 'air-balloon', name: 'Air Balloon', description: 'Grants Ground immunity until hit' },
  { id: 'eviolite', name: 'Eviolite', description: 'Boosts Defense and Sp. Def by 50% for unevolved Pokémon' },
  { id: 'shell-bell', name: 'Shell Bell', description: 'Restores 1/8 of damage dealt as HP' },
  { id: 'absorb-bulb', name: 'Absorb Bulb', description: 'Raises Sp. Atk when hit by Water-type move' },
  { id: 'cell-battery', name: 'Cell Battery', description: 'Raises Attack when hit by Electric-type move' },
  { id: 'luminous-moss', name: 'Luminous Moss', description: 'Raises Sp. Def when hit by Water-type move' },
  { id: 'snowball', name: 'Snowball', description: 'Raises Attack when hit by Ice-type move' },
  { id: 'weakness-policy', name: 'Weakness Policy', description: 'Sharply raises Attack and Sp. Atk when hit by super-effective move' },
  
  // Status Items
  { id: 'flame-orb', name: 'Flame Orb', description: 'Burns the holder after one turn' },
  { id: 'toxic-orb', name: 'Toxic Orb', description: 'Badly poisons the holder after one turn' },
  { id: 'black-sludge', name: 'Black Sludge', description: 'Restores 1/16 HP for Poison-types; damages others' },
  { id: 'sticky-barb', name: 'Sticky Barb', description: 'Damages holder each turn; may transfer on contact' },
  
  // Special Items
  { id: 'kings-rock', name: 'King\'s Rock', description: '10% chance to make target flinch' },
  { id: 'razor-fang', name: 'Razor Fang', description: '10% chance to make target flinch' },
  { id: 'bright-powder', name: 'Bright Powder', description: 'Lowers opponent\'s accuracy by 10%' },
  { id: 'lax-incense', name: 'Lax Incense', description: 'Lowers opponent\'s accuracy by 10%' },
  { id: 'quick-claw', name: 'Quick Claw', description: '20% chance to move first' },
  { id: 'mental-herb', name: 'Mental Herb', description: 'Cures infatuation, Taunt, Encore, Torment, Disable, and Cursed Body' },
  { id: 'white-herb', name: 'White Herb', description: 'Restores lowered stats once' },
  { id: 'power-herb', name: 'Power Herb', description: 'Allows immediate use of two-turn moves once' },
  { id: 'big-root', name: 'Big Root', description: 'Boosts HP restored by draining moves by 30%' },
  { id: 'binding-band', name: 'Binding Band', description: 'Increases damage from binding moves' },
  { id: 'grip-claw', name: 'Grip Claw', description: 'Extends duration of binding moves' },
  { id: 'destiny-knot', name: 'Destiny Knot', description: 'If infatuated, infatuates the opponent too' },
  { id: 'red-card', name: 'Red Card', description: 'Forces the attacker to switch out' },
  { id: 'eject-button', name: 'Eject Button', description: 'Forces the holder to switch out when hit' },
  { id: 'lagging-tail', name: 'Lagging Tail', description: 'Makes holder move last in its priority bracket' },
  { id: 'iron-ball', name: 'Iron Ball', description: 'Halves Speed and makes Flying/Levitate weak to Ground' },
  
  // Mega Stones (common ones)
  { id: 'venusaurite', name: 'Venusaurite', description: 'Allows Venusaur to Mega Evolve' },
  { id: 'charizardite-x', name: 'Charizardite X', description: 'Allows Charizard to Mega Evolve into Mega Charizard X' },
  { id: 'charizardite-y', name: 'Charizardite Y', description: 'Allows Charizard to Mega Evolve into Mega Charizard Y' },
  { id: 'blastoisinite', name: 'Blastoisinite', description: 'Allows Blastoise to Mega Evolve' },
  { id: 'alakazite', name: 'Alakazite', description: 'Allows Alakazam to Mega Evolve' },
  { id: 'gengarite', name: 'Gengarite', description: 'Allows Gengar to Mega Evolve' },
  { id: 'kangaskhanite', name: 'Kangaskhanite', description: 'Allows Kangaskhan to Mega Evolve' },
  { id: 'gyaradosite', name: 'Gyaradosite', description: 'Allows Gyarados to Mega Evolve' },
  { id: 'aerodactylite', name: 'Aerodactylite', description: 'Allows Aerodactyl to Mega Evolve' },
  { id: 'mewtwonite-x', name: 'Mewtwonite X', description: 'Allows Mewtwo to Mega Evolve into Mega Mewtwo X' },
  { id: 'mewtwonite-y', name: 'Mewtwonite Y', description: 'Allows Mewtwo to Mega Evolve into Mega Mewtwo Y' },
  { id: 'ampharosite', name: 'Ampharosite', description: 'Allows Ampharos to Mega Evolve' },
  { id: 'scizorite', name: 'Scizorite', description: 'Allows Scizor to Mega Evolve' },
  { id: 'heracronite', name: 'Heracronite', description: 'Allows Heracross to Mega Evolve' },
  { id: 'blazikenite', name: 'Blazikenite', description: 'Allows Blaziken to Mega Evolve' },
  { id: 'swampertite', name: 'Swampertite', description: 'Allows Swampert to Mega Evolve' },
  { id: 'gardevoirite', name: 'Gardevoirite', description: 'Allows Gardevoir to Mega Evolve' },
  { id: 'sablenite', name: 'Sablenite', description: 'Allows Sableye to Mega Evolve' },
  { id: 'mawilite', name: 'Mawilite', description: 'Allows Mawile to Mega Evolve' },
  { id: 'aggronite', name: 'Aggronite', description: 'Allows Aggron to Mega Evolve' },
  { id: 'medichamite', name: 'Medichamite', description: 'Allows Medicham to Mega Evolve' },
  { id: 'manectite', name: 'Manectite', description: 'Allows Manectric to Mega Evolve' },
  { id: 'banettite', name: 'Banettite', description: 'Allows Banette to Mega Evolve' },
  { id: 'absolite', name: 'Absolite', description: 'Allows Absol to Mega Evolve' },
  { id: 'garchompite', name: 'Garchompite', description: 'Allows Garchomp to Mega Evolve' },
  { id: 'lucarionite', name: 'Lucarionite', description: 'Allows Lucario to Mega Evolve' },
  
  // Z-Crystals (Type-specific)
  { id: 'normalium-z', name: 'Normalium Z', description: 'Upgrades Normal-type move to Z-Move' },
  { id: 'firium-z', name: 'Firium Z', description: 'Upgrades Fire-type move to Z-Move' },
  { id: 'waterium-z', name: 'Waterium Z', description: 'Upgrades Water-type move to Z-Move' },
  { id: 'electrium-z', name: 'Electrium Z', description: 'Upgrades Electric-type move to Z-Move' },
  { id: 'grassium-z', name: 'Grassium Z', description: 'Upgrades Grass-type move to Z-Move' },
  { id: 'icium-z', name: 'Icium Z', description: 'Upgrades Ice-type move to Z-Move' },
  { id: 'fightinium-z', name: 'Fightinium Z', description: 'Upgrades Fighting-type move to Z-Move' },
  { id: 'poisonium-z', name: 'Poisonium Z', description: 'Upgrades Poison-type move to Z-Move' },
  { id: 'groundium-z', name: 'Groundium Z', description: 'Upgrades Ground-type move to Z-Move' },
  { id: 'flyinium-z', name: 'Flyinium Z', description: 'Upgrades Flying-type move to Z-Move' },
  { id: 'psychium-z', name: 'Psychium Z', description: 'Upgrades Psychic-type move to Z-Move' },
  { id: 'buginium-z', name: 'Buginium Z', description: 'Upgrades Bug-type move to Z-Move' },
  { id: 'rockium-z', name: 'Rockium Z', description: 'Upgrades Rock-type move to Z-Move' },
  { id: 'ghostium-z', name: 'Ghostium Z', description: 'Upgrades Ghost-type move to Z-Move' },
  { id: 'dragonium-z', name: 'Dragonium Z', description: 'Upgrades Dragon-type move to Z-Move' },
  { id: 'darkinium-z', name: 'Darkinium Z', description: 'Upgrades Dark-type move to Z-Move' },
  { id: 'steelium-z', name: 'Steelium Z', description: 'Upgrades Steel-type move to Z-Move' },
  { id: 'fairium-z', name: 'Fairium Z', description: 'Upgrades Fairy-type move to Z-Move' },
  
  // Evolution Items
  { id: 'moon-stone', name: 'Moon Stone', description: 'Evolves certain Pokémon' },
  { id: 'sun-stone', name: 'Sun Stone', description: 'Evolves certain Pokémon' },
  { id: 'fire-stone', name: 'Fire Stone', description: 'Evolves certain Pokémon' },
  { id: 'water-stone', name: 'Water Stone', description: 'Evolves certain Pokémon' },
  { id: 'thunder-stone', name: 'Thunder Stone', description: 'Evolves certain Pokémon' },
  { id: 'leaf-stone', name: 'Leaf Stone', description: 'Evolves certain Pokémon' },
  { id: 'shiny-stone', name: 'Shiny Stone', description: 'Evolves certain Pokémon' },
  { id: 'dusk-stone', name: 'Dusk Stone', description: 'Evolves certain Pokémon' },
  { id: 'dawn-stone', name: 'Dawn Stone', description: 'Evolves certain Pokémon' },
  { id: 'ice-stone', name: 'Ice Stone', description: 'Evolves certain Pokémon' },
  { id: 'oval-stone', name: 'Oval Stone', description: 'Evolves Happiny when held and leveled up during the day' },
  { id: 'everstone', name: 'Everstone', description: 'Prevents evolution' }
]

// Create a map for O(1) lookup by ID
export const ItemsMap = Items.reduce((map, item) => {
  map[item.id] = item
  return map
}, {})

// Also create lookup by name for flexibility
export const ItemsByName = Items.reduce((map, item) => {
  map[item.name.toLowerCase()] = item
  return map
}, {})
