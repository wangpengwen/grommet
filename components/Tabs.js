'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Intl = require('../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _CSSClassnames = require('../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.TABS;

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs(props, context) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props, context));

    _this._activateTab = _this._activateTab.bind(_this);

    _this.state = {
      activeIndex: props.activeIndex,
      justify: props.justify
    };
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((nextProps.activeIndex || 0 === nextProps.activeIndex) && this.state.activeIndex !== nextProps.activeIndex) {
        this.setState({ activeIndex: nextProps.activeIndex });
      }
    }
  }, {
    key: '_activateTab',
    value: function _activateTab(index) {
      this.setState({ activeIndex: index });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var justify = _props.justify;
      var responsive = _props.responsive;
      var activeIndex = this.state.activeIndex;
      var intl = this.context.intl;

      var classes = (0, _classnames3.default)(CLASS_ROOT, className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--justify-' + justify, justify), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), _classnames));

      var activeContainer = void 0;
      var activeTitle = void 0;
      var tabs = _react2.default.Children.map(children, function (tab, index) {

        var tabProps = tab.props || tab._store.props || {};

        var isTabActive = index === activeIndex;

        if (isTabActive) {
          activeContainer = tabProps.children;
          activeTitle = tabProps.title;
        }

        return _react2.default.cloneElement(tab, {
          active: isTabActive,
          id: 'tab-' + index,
          onRequestForActive: function onRequestForActive() {
            _this2._activateTab(index);
          }
        });
      }, this);

      var tabContentTitle = _Intl2.default.getMessage(intl, 'Tab Contents', {
        activeTitle: activeTitle
      });

      return _react2.default.createElement(
        'div',
        { role: 'tablist' },
        _react2.default.createElement(
          'ul',
          { className: classes },
          tabs
        ),
        _react2.default.createElement(
          'div',
          { 'aria-label': tabContentTitle, role: 'tabpanel' },
          activeContainer
        )
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.displayName = 'Tabs';
exports.default = Tabs;


Tabs.propTypes = {
  activeIndex: _react.PropTypes.number,
  justify: _react.PropTypes.oneOf(['start', 'center', 'end']),
  responsive: _react.PropTypes.bool
};

Tabs.contextTypes = {
  intl: _react.PropTypes.object
};

Tabs.defaultProps = {
  activeIndex: 0,
  justify: 'center',
  responsive: true
};
module.exports = exports['default'];