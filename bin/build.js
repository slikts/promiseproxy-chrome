'use strict'

const {readFileSync} = require('fs')

const data = JSON.parse(readFileSync('api.json'))

const parse = ([x, y]) => {
  const path = x.split('.').slice(1)
  const index = y.split(',').findIndex(z => /callback/.test(z))
  return [path, index]
}

const flat = Object.keys(data)
.map(x => data[x])
.filter(x => x.length)
.reduce((p, n) => p.concat(n))
.map(x => x.trim().split('('))
.map(parse)

const schema = {}

flat.forEach(([path, index]) => path.reduce((obj, key, i, arr) => {
  const last = i === arr.length - 1
  return obj[key] = last ? index : (obj[key] || {})
}, schema))

const formatted = JSON.stringify(schema, null, 2).replace(/"/g, '')
console.log(`/* Generated from api.json */
module.exports = ${formatted}`)
