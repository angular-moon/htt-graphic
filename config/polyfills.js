/* eslint-disable */
'use strict';
import UAParser from 'ua-parser-js';

var parser = new UAParser();
var result = parser.getResult();

//
/**
 * IE11 对 Map 和 Set 部分支持, 所以还是需要引入 polyfill
 * https://kangax.github.io/compat-table/es6/#test-Map
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
 */
var gtIE11 = result.browser.name === 'IE' && result.browser.version >= 11;
// React 16 depends
if (typeof Map === 'undefined' || gtIE11) {
  require('core-js/es6/map');
}
if (typeof Set === 'undefined' || gtIE11) {
  require('core-js/es6/set');
}
// Array.fill
if (!Array.prototype.fill) {
  require('core-js/fn/array/fill');
}
// Array.from
if (!Array.prototype.from) {
  require('core-js/fn/array/from');
}
// Array.findIndex
if (!Array.prototype.findIndex) {
  require('core-js/fn/array/find-index');
}
// Array.includes
if (!Array.prototype.includes) {
  require('core-js/fn/array/includes');
}
// Array.find
if (!Array.prototype.find) {
  require('core-js/fn/array/find');
}
// String.includes
if (!String.prototype.includes) {
  require('core-js/fn/string/includes');
}
// Object.values
if (!Object.prototype.values) {
  require('core-js/fn/object/values');
}

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
