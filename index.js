const {PromiseProxy} = require('promiseproxy')

const schema = require('./schema')

const ChromePromiseProxy = target => PromiseProxy(target, schema)

module.exports = ChromePromiseProxy
