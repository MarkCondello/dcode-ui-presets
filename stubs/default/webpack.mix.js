const mix = require("laravel-mix");

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

mix.js("resources/js/app.js", "public/js/app.js")
    .copy([
        "resources/sass/config/fonts/inter",
        "resources/sass/page-layouts/styleguide/branding/fonts/",
    ], "public/fonts/")
    .sass("resources/sass/app.scss", "public/css/app.css")
    .vue();
    
if (mix.inProduction()) {
    mix.version();
}
