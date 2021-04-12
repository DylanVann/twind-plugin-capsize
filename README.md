# twind-plugin-capsize

[Capsize](https://github.com/seek-oss/capsize) integration for [Twind](https://github.com/tw-in-js/twind).

## Usage

### Setup

```js
import { setup } from 'twind'
import { twindPluginCapsize } from 'twind-plugin-capsize'

setup({
  theme: {
    fontFamily: {
      // Add the font.
      main: ['Roboto', 'sans-serif'],
    },
  },
  plugins: {
    ...typography(),
    // Pass in the font metrics.
    // Find the metrics for your font on https://seek-oss.github.io/capsize/
    'cap-main': twindPluginCapsize({
      capHeight: 1456,
      ascent: 1900,
      descent: -500,
      lineGap: 0,
      unitsPerEm: 2048,
    }),
  },
})
```

### Use

Note: It is currently assumed your font sizes and line heights are specified in rem.

```tsx
import {tw} from 'twind'

const className = tw`cap-main`

// Use font sizes from your theme.
// Corresponding line height will also be read.
const className = tw`cap-main-xl`

// Use font size and line height from theme.
const className = tw`cap-main-xl-7`
```
