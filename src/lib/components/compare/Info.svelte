<script>
  export let dmg,
    weakness,
    moves,
    pokemon = []

  const [team, opp] = pokemon

  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
  import { Shield } from '$icons'

  import TypeLogo from '$lib/components/type-logo.svelte'
  import TypeBadge from '$lib/components/type-badge.svelte'
  import TypeEffectiveness from '$lib/components/type-effectiveness.svelte'
  import { Tooltip } from '$lib/components/core'

  const toGroups = (name) => Object
        .entries(weakness[name] || {})
        .sort(([amod], [bmod]) => bmod - amod)

  const toFraction = (s) => {
    if (s == 0.25) return '¼'
    if (s == 0.5) return '½'
    return s
  }

  const dmgModMap = {
    1: 'neutral',
    2: 'Super Effective',
    4: '4x Super Effective',
    0.5: '½ not very effective',
    0.25: '¼ not very effective',
    0: 'no'
  }
</script>

<!-- Maximum Dmg modifier for defending pokemon -->
<div
  style="transform: translateY(-5.5px)"
  class="relative w-1/2 text-center tracking-tighter md:mr-4 md:w-auto"
>
  <span class="text-tiny">Max dmg</span>
  <Icon
    inline={true}
    height="2.2rem"
    class="mx-auto fill-current"
    icon={Shield}
  />
  <span
    class="absolute top-8 -mt-2 -translate-x-1/2 cursor-help font-mono text-2xl"
  >
    <Tooltip
      >Based on {opp.name}'s moveset, the maximum damage they could could do to {team.name}
      is {dmgModMap[dmg[team.alias][opp.alias] || 1]} damage.
    </Tooltip>

    {toFraction(dmg[team.alias][opp.alias] || 1)}x
  </span>
</div>

<!-- Phys vs Spec distribution -->
<div class="-mt-px w-1/2 text-tiny font-medium tracking-tighter md:w-auto">
  <span class="text-tiny font-normal">Dmg types</span>
  <div class="my-1 flex items-center gap-x-1">
    <TypeBadge type="physical" />
    {moves[opp.alias]?.physical || 0}%
  </div>
  <div class="flex items-center gap-x-1">
    <TypeBadge type="special" />
    {moves[opp.alias]?.special || 0}%
  </div>
</div>

<!-- Type weaknesses of attacking pokemon -->
<div class="mt-4.5 w-full md:ml-4 md:mt-px">
  <span class="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
    {opp.name}'s Type Matchups
  </span>

  <TypeEffectiveness types={opp.types} />
</div>
