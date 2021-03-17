"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexBox = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  margin-left: ", "px;\n  margin-top: ", "px;\n  margin: ", ";\n  width: ", ";\n  height: ", ";\n"])), function (props) {
  return props.direction;
}, function (props) {
  return props.jc;
}, function (props) {
  return props.ai;
}, function (props) {
  return props.ml;
}, function (props) {
  return props.mt;
}, function (props) {
  return props.margin;
}, function (props) {
  return props.w;
}, function (props) {
  return props.h;
});

exports.FlexBox = FlexBox;