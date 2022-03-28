// Generated by CoffeeScript 1.3.3
// var fs, path;

// fs = require('fs');

// path = require('path');

module.exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^vendor/,
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/,
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      },
      order: {
        before: ['vendor/scripts/console-helper.js', 'vendor/scripts/jquery-1.7.2.min.js', 'vendor/scripts/handlebars-1.0.0.beta.6.js', 'vendor/scripts/ember-latest.js', 'vendor/scripts/ember-data-latest.js', 'vendor/scripts/ember-i18n-1.2.0.js', 'vendor/scripts/bootstrap.js', 'vendor/scripts/bootstrap-combobox.js', 'vendor/scripts/d3.v2.js', 'vendor/scripts/cubism.v1.js', 'vendor/scripts/jquery.ui.core.js', 'vendor/scripts/jquery.ui.widget.js', 'vendor/scripts/jquery.ui.mouse.js', 'vendor/scripts/jquery.ui.datepicker.js', 'vendor/scripts/jquery-ui-timepicker-addon.js', 'vendor/scripts/jquery.ui.slider.js', 'vendor/scripts/jquery.ui.sortable.js', 'vendor/scripts/jquery.ui.custom-effects.js', 'vendor/scripts/jquery.timeago.js', 'vendor/scripts/jquery.ajax-retry.js', 'vendor/scripts/workflow_visualization.js', 'vendor/scripts/rickshaw.js', 'vendor/scripts/spin.js', 'vendor/scripts/jquery.flexibleArea.js', 'vendor/scripts/FileSaver.js', 'vendor/scripts/Blob.js']
      }
    },
    stylesheets: {
      defaultExtension: 'css',
      joinTo: 'stylesheets/app.css',
      order: {
        before: [
          'vendor/styles/bootstrap.css', 
          'vendor/styles/font-awesome.css', 
          'vendor/styles/font-awesome-ie7.css', 
          'vendor/styles/cubism.css', 
          'vendor/styles/rickshaw.css', 
          'vendor/styles/bootstrap-combobox.css'
        ]
      }
    },
    templates: {
      precompile: true,
      defaultExtension: ['hbs'],
      joinTo: {
        'javascripts/app.js': /^app/
      },
      paths: {
        jquery: 'vendor/scripts/jquery-1.7.2.min.js',
        handlebars: 'vendor/scripts/handlebars-1.0.0.beta.6.js',
        ember: 'vendor/scripts/ember-latest.js'
      }
    }
  },
  server: {
    port: 3333,
    base: '/',
    run: 'no'
  }
};