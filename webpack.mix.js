/* eslint-disable */
const config = require('./webpack.config');
const mix = require('laravel-mix');
require('laravel-mix-eslint');

function resolve(dir) {
  return path.join(
    __dirname,
    '/resources/js',
    dir
  );
}

Mix.listen('configReady', webpackConfig => {
  // Add "svg" to image loader test
  const imageLoaderConfig = webpackConfig.module.rules.find(
    rule =>
      String(rule.test) ===
      String(/(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/)
  );
  imageLoaderConfig.exclude = resolve('icons');
});

mix.webpackConfig(config);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .extract([
    'vue',
    'axios',
  ])
  .options({
    processCssUrls: false,
  })
  .sass('resources/js/style/style.scss', 'public/css/app.css', {
    implementation: require('node-sass'),
  });

if (mix.inProduction()) {
  mix.version();
} else {
  if (process.env.USE_ES_LINT === 'true') {
    mix.eslint();
  }
  // Development settings
  mix
    .sourceMaps()
    .webpackConfig({
      devtool: 'cheap-eval-source-map', // Fastest for development
    });
}

/** Browser sync for hot-reload. */
mix.browserSync('127.0.0.1:8000');
