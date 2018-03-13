import Component from '@ember/component';
import layout from '../../templates/components/contextual-states/contextual-state';
import EmberObject, { computed } from '@ember/object';
import RSVP from 'rsvp';

const errors = {
  stateDoesNotExist: ({ stateName, availableStates }) => `The state '${stateName}' does not exist in ${availableStates}`
};

const component = Component.extend({
  layout,

  tagName: '',

  isActive: computed('stateName', 'currentState', function() {
    return this.get('stateName') === this.get('currentState');
  }),

  // isLoading is true when transitioning away.
  isLoading: computed('stateName', 'currentState', 'transitioningToState', function() {
    return this.get('transitioningToState') && this.get('stateName') === this.get('currentState');
  }),

  willTransition() { return RSVP.resolve() },

  didTransition() {},

  didReceiveAttrs() {
    this._super(...arguments);
    this.updateAPI();
  },

  updateAPI() {
    this.get('registerContextualState')(EmberObject.create({
      stateName: this.get('stateName'),
      isActive: this.get('isActive'),
      isLoading: this.get('isLoading')
    }));
  },

  actions: {
    canSetState() {},
    setState(stateName, parentSetState) {

    }
  }
});

component.reopenClass({
  positionalParams: ['stateName']
});

export default component;
