import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('temp-picture-display', 'Integration | Component | temp picture display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{temp-picture-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#temp-picture-display}}
      template block text
    {{/temp-picture-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
