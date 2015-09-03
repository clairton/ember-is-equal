import Ember from 'ember';

export function isEqual(v1, v2) {
	console.log(v1 + ' ' + v2);
	return v1 === v2;
}

export default Ember.HTMLBars.makeBoundHelper(isEqual);
