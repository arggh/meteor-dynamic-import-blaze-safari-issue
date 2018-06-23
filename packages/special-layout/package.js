Package.describe({
  name: 'arggh:special-layout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.1');
  
  api.use([
    'ecmascript',
    'templating',
    'blaze',
    'random',
    'jquery',
    'underscore',
    'tracker',
    'dynamic-import',
    'reactive-dict',
    'manuel:viewmodel',
    'es5-shim',
  ], ['client']);

  api.addFiles([
    'templates/effect/effect.js',
    'templates/element_wrapper/element_wrapper.js',
    'templates/names_element_view/names_element_view.js',
    'templates/nav_element_view/nav_element_view.js'
  ], 'client');
});