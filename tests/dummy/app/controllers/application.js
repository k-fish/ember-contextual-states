import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  i18n: service(),

  githubUrl: 'https://github.com/k-fish/ember-contextual-states'
});
