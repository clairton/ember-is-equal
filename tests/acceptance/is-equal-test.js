import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module("Acceptance: is-equal", {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    App.registry = App.buildRegistry();
    App.reset();
  }
});

test('Equal Same Type', function(assert) {
  visit('/').then(function() {
    var a = find('.equal-same-type');
    assert.equal(a.text(), 'true');
  });
});

test('Not Equal Same Value', function(assert) {
  visit('/').then(function() {
    var a = find('.not-equal-same-value');
    assert.equal(a.text(), 'false');
  });
});

test('Not Equal', function(assert) {
  visit('/').then(function() {
    var a = find('.not-equal');
    assert.equal(a.text(), 'false');
  });
});
