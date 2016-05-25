const {PromiseProxy} = require('promiseproxy')

const schema = require('./schema')

const ChromePromiseProxy = target => PromiseProxy(target, schema)

module.exports = ChromePromiseProxy

let _z = ChromePromiseProxy({tabs: {query:(a, b) => b()}})

_z.tabs.query({})
