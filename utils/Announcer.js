'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.announcePageLoaded = announcePageLoaded;
exports.announce = announce;

var _CSSClassnames = require('./CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.APP; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

function announcePageLoaded(title) {
  announce(title + ' page was loaded');
}

function announce(message) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'assertive';

  var announcer = document.querySelector('.' + CLASS_ROOT + '__announcer');
  announcer.setAttribute('aria-live', mode);
  announcer.innerHTML = message;
}

exports.default = { announce: announce, announcePageLoaded: announcePageLoaded };