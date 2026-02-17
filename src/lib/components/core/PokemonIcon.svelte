<script>
  export let name = 'unknown-pokemon2',
    className = '',
    type = 'm',
    shiny = false,
    imgId = null
</script>

<span class="pk{type}-wrapper {$$restProps.class || ''} {className}">
  {#if shiny && imgId}
    <img
      src="/assets/img/pokemon/shiny-{imgId}.png"
      alt=""
      class="pkm-shiny-img"
    />
  {:else}
    <i
      class:pkm-sevii={name?.includes('sevii')}
      class:pkm-hoennian={name?.includes('-hoenn')}
      class="pk{type} pk{type}-{name}"
    />
  {/if}
  <slot />
</span>

<style>
  .pkm-shiny-img {
    display: inline-block;
    max-height: 24px;
    width: auto;
    image-rendering: pixelated;
    vertical-align: middle;
  }
</style>
