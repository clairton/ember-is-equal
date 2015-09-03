import Ember from 'ember';

export function isEqual(v1, v2) {
	return v1 === v2;
}

export default Ember.Handlebars.makeBoundHelper(isEqual);
