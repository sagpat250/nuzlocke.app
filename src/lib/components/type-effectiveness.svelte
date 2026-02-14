<script>
  import { calculateTypeEffectiveness, groupTypeEffectiveness, formatMultiplier } from '$lib/utils/calculateTypeEffectiveness'
  import TypeBadge from './type-badge.svelte'
  import { capitalise } from '$lib/utils/string'

  export let types = []

  $: effectiveness = calculateTypeEffectiveness(types)
  $: grouped = groupTypeEffectiveness(effectiveness)
  $: weaknesses = [...grouped.quadruple, ...grouped.double]
  $: resistances = [...grouped.quarter, ...grouped.half]
  $: immunities = grouped.immune
</script>

<div class="type-effectiveness w-full">
  {#if weaknesses.length > 0}
    <div class="mb-3">
      <h4 class="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
        Weak To
      </h4>
      <div class="flex flex-wrap gap-1.5">
        {#each weaknesses as { type, multiplier }}
          <div class="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800">
            <TypeBadge {type} />
            <span class="text-xs font-bold text-red-600 dark:text-red-400">
              {formatMultiplier(multiplier)}
            </span>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if resistances.length > 0}
    <div class="mb-3">
      <h4 class="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
        Resists
      </h4>
      <div class="flex flex-wrap gap-1.5">
        {#each resistances as { type, multiplier }}
          <div class="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800">
            <TypeBadge {type} />
            <span class="text-xs font-bold text-green-600 dark:text-green-400">
              {formatMultiplier(multiplier)}
            </span>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if immunities.length > 0}
    <div class="mb-3">
      <h4 class="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
        Immune To
      </h4>
      <div class="flex flex-wrap gap-1.5">
        {#each immunities as { type, multiplier }}
          <div class="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 dark:bg-gray-800">
            <TypeBadge {type} />
            <span class="text-xs font-bold text-gray-500 dark:text-gray-400">
              {formatMultiplier(multiplier)}
            </span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .type-effectiveness {
    @apply border-t border-gray-200 pt-3 dark:border-gray-700;
  }
</style>
