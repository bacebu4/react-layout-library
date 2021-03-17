"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createShadowStyle = createShadowStyle;
exports.withShadowStyles = withShadowStyles;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function createShadowStyle() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 3,
    y: 2,
    b: 17,
    s: 2,
    color: "rgba(114, 114, 114, 0.15)"
  };
  return function withCustomShadowStyles(Component) {
    var ComponentWithAddedProps = (0, _styledComponents["default"])(Component)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      box-shadow: ", "px ", "px ", "px ", "px ", ";\n    "])), opts.x, opts.y, opts.b, opts.s, opts.color);
    return ComponentWithAddedProps;
  };
}

function withShadowStyles(Component) {
  var ComponentWithAddedProps = (0, _styledComponents["default"])(Component)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-shadow: 3px 2px 17px 2px rgba(114, 114, 114, 0.15);\n  "])));
  return ComponentWithAddedProps;
}