import Component from '@ember/component';
import layout from '../templates/components/contextual-states';
import { computed } from '@ember/object';
import { next } from '@ember/runloop';
import RSVP from 'rsvp';

const errors = {
  stateDoesNotExist: ({ stateName, availableStates }) => `The state '${stateName}' does not exist in ${availableStates}`
};

export default Component.extend({
  layout,

  tagName: '',

  currentState: '',

  initialState: '',

  separateContent: true,

  init() {
    this._super(...arguments);
    this.set('contextualStateAPIs', []);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.didReceiveInitialState();
  },

  didReceiveInitialState() {
    if (!this.get('currentState') && this.get('initialState') !== this.get('_initialState')) {
      this.set('_initialState', this.get('initialState'));
    }
  },

  availableStates: computed.mapBy('contextualStateAPIs', 'stateName'),

  _findExistingStateIndex(stateName) {
    const contextualStateAPIs = this.get('contextualStateAPIs');
    return contextualStateAPIs.map(api => api.get('stateName')).indexOf(stateName);
  },

  willChangeState() { return RSVP.resolve() },

  didChangeState() {},

  canSetState(stateName) {
    const availableStates = this.get('availableStates');
    const existingIndex = this._findExistingStateIndex(stateName);

    if (existingIndex < 0) {
      throw errors.stateDoesNotExist({ stateName, availableStates });
    }

    return true;
  },

  actions: {
    registerContextualState(stateAPI) {
      const stateName = stateAPI.get('stateName');

      next(() => {
        if (!this.get('currentState') && (!this.get('_initialState') || this.get('_initialState') === stateName)) {
          this.set('currentState', stateName);
        }

        const contextualStateAPIs = this.get('contextualStateAPIs');
        const existingIndex = this._findExistingStateIndex(stateName);

        if (existingIndex >= 0) {
          contextualStateAPIs[existingIndex] = stateAPI;
          const newAPIs = [ ...contextualStateAPIs ];
          this.set('contextualStateAPIs', newAPIs);
        } else {
          const newAPIs = [...contextualStateAPIs, stateAPI];
          this.set('contextualStateAPIs', newAPIs);
        }
      });
    },

    canSetState(stateName) {
      return this.canSetState(stateName);
    },

    setState(stateName) {
      if (!this.canSetState(stateName)) {
        return RSVP.reject();
      }

      const willChangePromise = this.get('willChangeState')();

      if (willChangePromise === false) {
        return RSVP.reject();
      }

      let chainedPromise = willChangePromise;
      if (typeof willChange === 'object' && !willChange.then) {
        chainedPromise = RSVP.resolve();
      }

      this.set('transitioningToState', stateName);

      return chainedPromise.then(() => {
        this.set('currentState', stateName);
        this.set('transitioningToState', '');
        this.get('didChangeState')();
      });
    }
  }
});
