# Shiny Sprites Feature - Summary

## What Worked

### Shiny Toggle Button (pokemon-selector.svelte)
Added a star toggle button next to the Ability dropdown on each encounter row. When toggled on, the star turns gold with an amber border and background. Implemented as a hidden checkbox with a styled `<label>` wrapping a sparkle character. The `shiny` boolean and the pokemon's `imgId` are persisted to the store when toggled.

**Changed:** Wrapped the Ability `AutoCompleteV2` and the new toggle in a `<span>` with `inline-flex` so they sit side by side in the same grid cell.

### Large Shiny Pokemon Images (Box, Graveyard, Boss Battle)
These views use `createImgUrl()` from `$utils/rewrites.js` to generate full-size sprite URLs. The function builds URLs like `/assets/img/pokemon/shiny-{imgId}.png`, which are served by a SvelteKit route handler (`src/routes/assets/img/pokemon/[variant]-[id].[type]/+server.js`) that loads individual sprites from the `pokemon-sprites` npm package's `shiny/` directory.

- **box/+page.svelte:** Changed `shiny: p.status === 6` to `shiny: p.shiny || p.status === 6` in `createImgUrl` call. Also updated the shiny star indicator to show for explicitly-shiny pokemon, not just status 6.
- **Grave.svelte:** Added `shiny` prop, passed through to `createImgUrl()`.
- **graveyard/+page.svelte:** Passes `shiny={p.shiny}` to the `Grave` component.
- **BossBattle/Team.svelte:** Changed sprite function to read `p?.original?.shiny || p?.original?.status === 6` instead of just checking the status parameter.

### Shiny Image at Top of Compare Screen (Card.svelte)
The large pokemon image in the boss battle comparison card now shows shiny sprites. Changed the `sprite()` function to check `p?.original?.shiny || p?.original?.status === 6` instead of passing status as a separate parameter. The image URL is built by `createImgUrl()` and served by the same route handler as above.

### Shiny PIcon in Compare Side Panels (CardContent.svelte, Controls.svelte)
Added an `isShiny` callback prop to the `Controls` component and wired it through from `CardContent`. Each pokemon button in the box list, team list, and gym team list now passes `shiny={isShiny(p)}` and `imgId={p?.imgId}` to `PIcon`.

### Gym Badge Filter Buttons in Box Tab
Fixed during the same changes to `box/+page.svelte`.

## What Didn't Work

### Shiny Mini Sprites on Game Tab and Team Header (PokemonIcon / PIcon)

The `PIcon` component renders the small pixel-art pokemon icons used in the Game tab encounter rows and the top-bar team display. These icons use a **CSS sprite sheet** — a single PNG image (`pokemon-v6.png`) where each pokemon is a tiny region selected by `background-position` rules in `_pokemon.css`.

A shiny sprite sheet (`pokemon-shiny.png`) exists, but **the two sheets have completely different layouts**. The sprites are arranged differently, with different dimensions (v6 is 639KB, shiny is 986KB) and different sprite positions. This means you cannot simply swap the `background-image` and reuse the same CSS `background-position` values.

#### Attempt 1: CSS class `shiny` on the `<i>` element (Commits 20db278, 9e08183)
- Added `class:shiny` to the `<i>` tag in `PokemonIcon.svelte`
- Added `.pkm.shiny { background-image: url(../img/pokemon-shiny.png); }` to the served `_pokemon.css`
- **Why it failed:** The `.pkm.shiny` rule swaps to `pokemon-shiny.png`, but the `background-position` values in `_pokemon.css` are calculated for `pokemon-v6.png`'s layout. The two sprite sheets have different arrangements, so every pokemon shows the wrong sprite or blank space.

#### Attempt 2: Individual `<img>` tags (Commit de776e0)
- When `shiny && imgId`, rendered an `<img src="/assets/img/pokemon/shiny-{imgId}.png">` instead of the CSS sprite `<i>` element
- Sized the image with `max-height: 24px; width: auto; image-rendering: pixelated`
- **Why it failed:** The individual sprites from the npm package are 96x96 full-size sprites, not the tiny pixel-art icons from the sprite sheet. Scaling a 96x96 sprite down to ~24px tall looks and behaves differently from the native mini icons (which are ~11-40px wide, tightly packed in the sprite sheet). The size, alignment, and visual style don't match the normal mini sprites.

#### Attempt 3: Back to CSS class (Commit 24afc2e)
- Reverted to the `class:shiny` approach, re-adding the `.pkm.shiny` CSS rule
- **Why it failed:** Same reason as Attempt 1 — the sprite sheets have incompatible layouts.

### Current State of PokemonIcon.svelte
The component currently uses the CSS class approach (Attempt 3). It adds `class:shiny` to the `<i>` element and the served CSS has `.pkm.shiny { background-image: url(../img/pokemon-shiny.png); }`. This does not display correct shiny mini sprites because of the layout mismatch.

### What Would Fix It
The mini shiny sprite problem requires one of:
1. **Generate a new `pokemon-shiny-v6.png`** sprite sheet with the same layout and positions as `pokemon-v6.png`, just with shiny colors. This would make the CSS class swap work correctly.
2. **Generate separate CSS position rules** for `.pkm.shiny.pkm-{name}` selectors that map to the actual positions in `pokemon-shiny.png`.
3. **Use a different mini sprite source** that provides shiny variants in a compatible format.

## Files Changed (Full Branch Diff from main)

| File | Changes |
|------|---------|
| `src/lib/components/pokemon-selector.svelte` | Shiny toggle UI, state management, store persistence |
| `src/lib/components/core/PokemonIcon.svelte` | Added `shiny` and `imgId` props, `class:shiny` on `<i>` |
| `src/lib/components/compare/Card.svelte` | Shiny-aware `sprite()` function for large images |
| `src/lib/components/compare/CardContent.svelte` | Added `isShiny` callback, passed to Controls |
| `src/lib/components/compare/Controls.svelte` | Accept `isShiny` prop, pass to PIcon |
| `src/lib/components/BossBattle/Team.svelte` | Shiny-aware sprite function |
| `src/lib/components/TeamBuilder/mini-team.svelte` | Pass `shiny` and `imgId` to PIcon |
| `src/routes/(app)/box/+page.svelte` | Shiny flag in createImgUrl, shiny star indicator |
| `src/routes/(app)/graveyard/+page.svelte` | Pass `shiny` to Grave component |
| `src/routes/(app)/graveyard/Grave.svelte` | Accept `shiny` prop, use in createImgUrl |
| `src/routes/assets/[resource].css/_pokemon.css` | Added `.pkm.shiny` CSS rule |
