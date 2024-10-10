"use strict";

var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _lodash["default"].join(['Hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component());