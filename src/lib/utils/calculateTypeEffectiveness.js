import { typeChart, allTypes } from './typeChart'

/**
 * Calculate defensive type effectiveness for a Pokémon
 * 
 * @param {string[]} defenderTypes - Array of defensive types (1 or 2 types)
 * @returns {Array<{type: string, multiplier: number}>} Array of all 18 attacking types with their effectiveness multipliers
 */
export function calculateTypeEffectiveness(defenderTypes) {
  // Normalize types to lowercase
  const normalizedTypes = defenderTypes.map(t => t.toLowerCase())
  
  return allTypes.map(attackingType => {
    // Calculate multiplier for each defending type
    let multiplier = 1
    
    for (const defendingType of normalizedTypes) {
      const typeModifier = typeChart[attackingType]?.[defendingType] ?? 1
      multiplier *= typeModifier
    }
    
    return {
      type: attackingType,
      multiplier
    }
  })
}

/**
 * Group type effectiveness by multiplier for organized display
 * 
 * @param {Array<{type: string, multiplier: number}>} effectiveness
 * @returns {{immune: Array, quarter: Array, half: Array, neutral: Array, double: Array, quadruple: Array}}
 */
export function groupTypeEffectiveness(effectiveness) {
  return {
    immune: effectiveness.filter(e => e.multiplier === 0),
    quarter: effectiveness.filter(e => e.multiplier === 0.25),
    half: effectiveness.filter(e => e.multiplier === 0.5),
    neutral: effectiveness.filter(e => e.multiplier === 1),
    double: effectiveness.filter(e => e.multiplier === 2),
    quadruple: effectiveness.filter(e => e.multiplier === 4)
  }
}

/**
 * Format multiplier for display
 * 
 * @param {number} multiplier
 * @returns {string}
 */
export function formatMultiplier(multiplier) {
  if (multiplier === 0) return '0×'
  if (multiplier === 0.25) return '¼×'
  if (multiplier === 0.5) return '½×'
  if (multiplier === 1) return '1×'
  if (multiplier === 2) return '2×'
  if (multiplier === 4) return '4×'
  return `${multiplier}×`
}
