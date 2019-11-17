(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.defaultsdeep');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * App configuration.
 *
 * Uses settings in config/production.js, with any properties set by
 * config/staging.js or config/local.js overriding them depending upon the
 * environment.
 *
 * This file should not be modified.  Instead, modify one of:
 *
 *  - config/production.js
 *      Production settings (base).
 *  - config/staging.js
 *      Overrides to production if ENV is staging.
 *  - config/local.js
 *      Overrides if local.js exists.
 *      This last file is gitignored, so you can safely change it without
 *      polluting the repo.
 */

var configurations = {'production': require('./config/production.js'),'staging': require('./config/staging.js')};
var config = configurations.local || {};

if ("development" === 'staging') {
  (0, _lodash2.default)(config, configurations.staging);
}
(0, _lodash2.default)(config, configurations.production);

// The require doesn't play super well with es6 imports. It creates an internal
// 'default' property. Export that.
exports.default = config.default;

},{"./config/production.js":"/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/config/production.js","./config/staging.js":"/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/config/staging.js","lodash.defaultsdeep":"lodash.defaultsdeep"}],"/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/config/production.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  environment: 'production'
};

},{}],"/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/config/staging.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  environment: 'staging'
};

},{}],"/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/main.js":[function(require,module,exports){
'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Environment', _config2.default.environment);

},{"./config":"/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/config.js"}]},{},["/Users/rorynealon/Documents/git/maptician-mapgician/app/assets/scripts/main.js"])

//# sourceMappingURL=bundle.js.map
