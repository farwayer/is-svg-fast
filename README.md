# is-svg-fast

The lib provides a fast basic check if a string is svg image in Node.js and
browser

## How to use

```bash
npm install is-svg-fast
```
or
```bash
yarn add is-svg-fast
```

```js
import {isSvg} from 'is-svg-fast'

const svg = `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny"
     viewBox="0 0 30 30">
  <desc>Example SVG file</desc>
  <rect x="10" y="10" width="10" height="10" fill="red"/>
</svg>`

isSvg(svg) // true
```
