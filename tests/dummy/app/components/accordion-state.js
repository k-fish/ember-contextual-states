import Component from '@ember/component';
import { computed } from '@ember/object';

const component = Component.extend({
  classNameBindings: ['colour', 'isActive'],

  isActive: computed('currentState', 'stateName', function() {
    return this.get('currentState') === this.get('stateName');
  }),

  classNames: 'accordion-state',

  mouseEnter() {
    this.get('setState')(this.get('stateName'));
  }
});

component.reopenClass({
  positionalParams: ['stateName']
});

export default component;
