'use strict'

const test = require('tape')

const chrome = require('../')(require('sinon-chrome'))

const z = [1, 2, 3]

chrome.tabs.query.yields(z)

test('callback', function (t) {
  chrome.tabs.query({}, (list) => {
    t.equal(list, z)
    t.end()
  })
})
test('promise', function (t) {
  chrome.tabs.query({}).then((list) => {
    t.equal(list, z)
    t.end()
  })
})
