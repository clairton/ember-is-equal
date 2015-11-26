import { isEqual } from 'is-equal/helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

test('equals', function(assert) {
  var result = isEqual([42, 42]);
  assert.ok(result);
});

test('not equals', function(assert) {
  var result = isEqual([42, 41]);
  assert.ok(!result);
});

test('another type', function(assert) {
  var result = isEqual([42, '42']);
  assert.ok(!result);
});
