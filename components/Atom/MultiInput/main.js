"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fillPolyfill = _interopRequireDefault(require("./fill"));

var _InputBox = _interopRequireDefault(require("./InputBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactIndividualCharacterInputBoxes = /*#__PURE__*/function (_Component) {
  _inherits(ReactIndividualCharacterInputBoxes, _Component);

  var _super = _createSuper(ReactIndividualCharacterInputBoxes);

  function ReactIndividualCharacterInputBoxes(props) {
    var _this;

    _classCallCheck(this, ReactIndividualCharacterInputBoxes);

    _this = _super.call(this, props);
    _this.state = {
      characterArray: Array(props.amount).fill(null)
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.inputElements = {};
    // _fillPolyfill["default"];
    return _this;
  }

  _createClass(ReactIndividualCharacterInputBoxes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.inputElements['input0'].select();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.amount !== nextProps.amount || this.props.inputRegExp !== nextProps.inputRegExp) {
        return true;
      }

      return false;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var items = [];

      for (var i = 0; i < this.props.amount; i++) {
        items.push( /*#__PURE__*/_react["default"].createElement(_InputBox["default"], {
          type: this.props.password ? 'password' : 'text',
          key: i,
          handleKeyDown: this.handleKeyDown,
          handleFocus: this.handleFocus,
          handleChange: this.handleChange,
          name: 'input' + i,
          inputProps: this.props.inputProps && this.props.inputProps[i],
          inputRef: function inputRef(el) {
            if (!el) return;
            _this2.inputElements[el.name] = el;
          }
        }));
      }

      return items;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, this.renderItems()));
    }
  }, {
    key: "handleChange",
    value: function handleChange(_ref) {
      var target = _ref.target;

      if (target.value.match(this.props.inputRegExp)) {
        this.focusNextChar(target);
        this.setModuleOutput(target);
      } else {
        target.value = this.state.characterArray[target.name.replace('input', '')];
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(_ref2) {
      var target = _ref2.target,
          key = _ref2.key;

      if (key === 'Backspace') {
        if (target.value === '' && target.previousElementSibling !== null) {
          target.previousElementSibling.value = '';
          this.focusPrevChar(target);
        } else {
          target.value = '';
        }

        this.setModuleOutput(target);
      } else if (key === 'ArrowLeft') {
        this.focusPrevChar(target);
      } else if (key === 'ArrowRight' || key === ' ') {
        this.focusNextChar(target);
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(_ref3) {
      var target = _ref3.target;
      var el = target; // In most browsers .select() does not work without the added timeout.

      setTimeout(function () {
        el.select();
      }, 0);
    }
  }, {
    key: "focusPrevChar",
    value: function focusPrevChar(target) {
      if (target.previousElementSibling !== null) {
        target.previousElementSibling.focus();
      }
    }
  }, {
    key: "focusNextChar",
    value: function focusNextChar(target) {
      if (target.nextElementSibling !== null) {
        target.nextElementSibling.focus();
      }
    }
  }, {
    key: "setModuleOutput",
    value: function setModuleOutput() {
      var _this3 = this;

      this.setState(function (prevState) {
        var updatedCharacters = prevState.characterArray.map(function (character, number) {
          return _this3.inputElements['input' + number].value;
        });
        return {
          characterArray: updatedCharacters
        };
      }, function () {
        return _this3.props.handleOutputString(_this3.state.characterArray.join(''));
      });
    }
  }]);

  return ReactIndividualCharacterInputBoxes;
}(_react.Component);

ReactIndividualCharacterInputBoxes.defaultProps = {
  amount: 5,
  autoFocus: false,
  inputRegExp: /^[0-9]$/,
  password: false
};
ReactIndividualCharacterInputBoxes.propTypes = {
  amount: _propTypes["default"].number,
  autoFocus: _propTypes["default"].bool,
  inputRegExp: _propTypes["default"].instanceOf(RegExp),
  password: _propTypes["default"].bool,
  handleOutputString: _propTypes["default"].func.isRequired
};
var _default = ReactIndividualCharacterInputBoxes;
exports["default"] = _default;