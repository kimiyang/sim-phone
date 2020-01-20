"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _button = _interopRequireDefault(require("antd/es/button"));

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var supportedPhones = ['iPhone7', 'iPhone7Plus', 'iPhone5', 'iPhoneX'];

var PhoneSimulator =
/*#__PURE__*/
function (_Component) {
  _inherits(PhoneSimulator, _Component);

  function PhoneSimulator(props) {
    var _this;

    _classCallCheck(this, PhoneSimulator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneSimulator).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderPhoneList", function () {
      var menu = _react["default"].createElement(_menu["default"], null, supportedPhones.map(function (phone, index) {
        return _react["default"].createElement(_menu["default"].Item, {
          key: "phone".concat(index),
          onClick: function onClick() {
            _this.setState({
              phone: phone
            });
          }
        }, phone);
      }));

      var phone = _this.state.phone;
      return _react["default"].createElement(_dropdown["default"], {
        overlay: menu,
        trigger: ['click']
      }, _react["default"].createElement(_button["default"], {
        className: "ant-dropdown-link"
      }, phone, " ", _react["default"].createElement(_icon["default"], {
        type: "down"
      })));
    });

    _this.state = {
      phone: 'iPhone7'
    };
    return _this;
  }

  _createClass(PhoneSimulator, [{
    key: "render",
    value: function render() {
      var phone = this.state.phone;

      var _ref = this.props || {},
          iframeUrl = _ref.iframeUrl,
          className = _ref.className;

      return _react["default"].createElement("div", {
        className: "phoneSimulator ".concat(className)
      }, _react["default"].createElement("div", {
        className: "demoArea"
      }, _react["default"].createElement("div", {
        className: "viewer-container"
      }, _react["default"].createElement("div", {
        className: "phoneList"
      }, this.renderPhoneList()), _react["default"].createElement("div", {
        className: phone
      }, _react["default"].createElement("div", {
        className: "component component-white"
      }, iframeUrl ? _react["default"].createElement("iframe", {
        id: "child_frame",
        title: "react-visualizor-iframe",
        width: "100%",
        height: "100%",
        src: iframeUrl,
        style: {
          borderWidth: 0
        }
      }) : null)))));
    }
  }]);

  return PhoneSimulator;
}(_react.Component);

var _default = PhoneSimulator;
exports["default"] = _default;