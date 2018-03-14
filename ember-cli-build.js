'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    includeHighlightStyle: false,
    snippetPaths: ['tests/dummy/app/templates/snippets'],
    sassOptions: {
      includePaths: 'node_modules/bulma/'
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('vendor/tomorrow.css');

  return app.toTree();
};