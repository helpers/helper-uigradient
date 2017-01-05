'use strict';

require('mocha');
var assert = require('assert');
var handlebars = require('handlebars');
var helper = require('..');

describe('helper-uigradient', function() {
  describe('helper', function() {
    it('should work as a function', function() {
      assert.equal(helper('Man of Steel'), 'background-color: #061161;\n  background-image: linear-gradient(to left, #780206, #061161);');
    });
  });

  describe('handlebars', function() {
    it('should work as a handlebars helper', function() {
      handlebars.registerHelper('uigradient', helper);
      var fn = handlebars.compile('{{uigradient "Man of Steel"}}');
      assert.equal(fn(), 'background-color: #061161;\n  background-image: linear-gradient(to left, #780206, #061161);');
    });
  });
});
