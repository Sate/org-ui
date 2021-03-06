'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToTop = function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onMount) {
        this.scrollToTop();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_ref) {
      var newLocation = _ref.location;
      var _props = this.props,
          onMount = _props.onMount,
          location = _props.location;

      if (!onMount && location !== newLocation) {
        this.scrollToTop();
      }
    }
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return ScrollToTop;
}(_react.Component);

ScrollToTop.propTypes = {
  onMount: _propTypes2.default.bool,
  children: _propTypes2.default.element
};
ScrollToTop.defaultProps = {
  onMount: false
};
exports.default = ScrollToTop;