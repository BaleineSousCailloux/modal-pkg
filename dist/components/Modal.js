"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./styles/Modal.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Modal = _ref => {
  let {
    message,
    isShowing,
    onClose
  } = _ref;
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setIsVisible(isShowing);
  }, [isShowing]);
  return /*#__PURE__*/_react.default.createElement("div", null, isVisible ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-window"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-button",
    onClick: onClose
  }, "X"), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-message"
  }, message))) : /*#__PURE__*/_react.default.createElement("div", null));
};
Modal.propTypes = {
  message: _propTypes.default.string.isRequired,
  isShowing: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired
};
var _default = Modal;
exports.default = _default;