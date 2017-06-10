'use strict';

var camelcase = require('camel-case');
var extend = require('extend-shallow');
var gradients = require('./gradients.json');

module.exports = function(name, options) {
  if (name === 'default') {
    return '';
  }

  var opts = extend({}, options);
  opts = extend({}, opts, opts.hash);
  var gradient;

  for (var i = 0; i < gradients.length; i++) {
    var ele = gradients[i];
    if (camelcase(ele.name) === camelcase(name)) {
      gradient = ele.colors;
      break;
    }
  }

  if (!gradient) {
    return '';
  }
  if (opts.reverse) {
    gradient = gradient.slice().reverse();
  }

  var to = gradient[1];
  var from = gradient[0];

  return 'background-color: ' + to + ';\n  background-image: linear-gradient(to left, ' + from + ', ' + to + ');';
};
