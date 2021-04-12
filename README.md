# twind-plugin-capsize

[Capsize](https://github.com/seek-oss/capsize) integration for [Twind](https://github.com/tw-in-js/twind).

## Usage

```js
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
    // Find the metrics for you font on https://seek-oss.github.io/capsize/
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
