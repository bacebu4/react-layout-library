"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLayoutStyles = withLayoutStyles;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function withLayoutStyles(Component) {
  var ComponentWithAddedProps = (0, _styledComponents["default"])(Component)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    if (props.mt) {
      return "margin-top: ".concat(props.mt, "px;");
    }

    return "";
  }, function (props) {
    if (props.mb) {
      return "margin-bottom: ".concat(props.mb, "px;");
    }

    return "";
  }, function (props) {
    if (props.ml) {
      return "margin-left: ".concat(props.ml, "px;");
    }

    return "";
  }, function (props) {
    if (props.mr) {
      return "margin-right: ".concat(props.mr, "px;");
    }

    return "";
  });
  return ComponentWithAddedProps;
}