import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contextual-states/contextual-state/state-content', 'Integration | Component | contextual states/contextual state/state content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contextual-states/contextual-state/state-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contextual-states/contextual-state/state-content}}
      template block text
    {{/contextual-states/contextual-state/state-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
