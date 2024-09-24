let mix = require('laravel-mix');
let path = require('path');

require('./nova.mix');

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/field.css', 'css')
  .nova('trinityrank/google-map-with-autocomplete');

mix.webpackConfig({
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '.vue'],
    alias: {
      'laravel-nova': path.resolve(__dirname, 'node_modules/laravel-nova')
    }
  }
});