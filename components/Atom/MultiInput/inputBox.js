"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  width: 30px;\n  height: 40px;\n  margin: 2px;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 34px;\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',\n    Arial sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents["default"].input(_templateObject());

var InputBox = function InputBox(_ref) {
  var type = _ref.type,
      key = Math.floor(Math.random() * (100 - 0 + 1) + 0),
      handleKeyDown = _ref.handleKeyDown,
      handleChange = _ref.handleChange,
      handleFocus = _ref.handleFocus,
      name = _ref.name,
      inputRef = _ref.inputRef,
      inputProps = _ref.inputProps;
  return /*#__PURE__*/_react["default"].createElement(Input, _extends({}, inputProps, {
    type: type,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    onFocus: handleFocus,
    maxLength: "1",
    key: key,
    name: name,
    ref: inputRef
  }));
};

InputBox.propTypes = {
  name: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  handleKeyDown: _propTypes["default"].func,
  handleFocus: _propTypes["default"].func,
  handleChange: _propTypes["default"].func,
  inputRef: _propTypes["default"].func,
  inputProps: _propTypes["default"].object
};
var _default = InputBox;
exports["default"] = _default;