const { src, parallel, series, dest } = require('gulp')
const sass = require('gulp-sass')
const es = require('gulp-eslint')
const minify = require('gulp-minify')
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass')

exports.default = parallel(series(eslint, mini), sassCompile, pipeContent)
exports.compileJS = series(eslint, mini)
exports.lint = eslint
exports.compileSASS = sassCompile

function eslint () {
  return src(['**/*.js', '!node_modules/**', '!docs/**'])
    .pipe(es({ fix: true }))
    .pipe(es.format())
    .pipe(es.failAfterError())
}

function mini () {
  return src(['gen.js', '!node_modules/**', '!docs/**'])
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      noSource: true,
      preserveComments: 'some'
    }))
    .pipe(dest('./docs/'))
}

function sassCompile () {
  return src('style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest('./docs/'))
}

function pipeContent () {
  return src(['index.html', 'LICENSE'])
    .pipe(dest('./docs/'))
}
