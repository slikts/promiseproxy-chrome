[![view on npm](http://img.shields.io/npm/v/promiseproxy-chrome.svg)](https://www.npmjs.org/package/promiseproxy-chrome) [![Greenkeeper badge](https://badges.greenkeeper.io/slikts/promiseproxy-chrome.svg)](https://greenkeeper.io/)

# Promisified Chrome API

[PromiseProxy](https://github.com/slikts/promiseproxy) with a [schema](schema.js) for the [Chrome JavaScript APIs](https://developer.chrome.com/extensions/api_index).

## Requirements

 * Node.js 6+, Chrome or other ES2015 `Proxy` object supporting environment

## Installation

```
npm install promiseproxy-chrome
```

## Usage

```js
// Promisify the global chrome object
const _chrome = require('promiseproxy-chrome')(chrome)
// Callback methods return promises when the callback parameter is null or undefined
_chrome.tabs.query(info).then(callback)
```

### Build

```
npm run build
```

#### Updating api.json

Use in console on each page of the Chrome API docs:
```js
localStorage.methods = JSON.stringify(Object.assign(JSON.parse(localStorage.methods), { [location.pathname]: $$('#toc .pln').filter(x => /callback/i.test(x.textContent)).map(x => x.closest('.prettyprint').textContent) }))
```

Copy contents of `localStorage.methods` to `api.json`.

### Test

```
npm install --only=dev
npm run test
```

## License

MIT
