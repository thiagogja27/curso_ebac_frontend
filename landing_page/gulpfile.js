const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss')     //recupera os arquivos//
     .pipe(sass({outputStyle: 'compressed'}))  //comprime os arquivos//
.pipe(gulp.dest('./dist/css'));                //coloca os arquivos  comprimidos em uma pasta dist //
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles*,scss',gulp.parallel(styles))
}