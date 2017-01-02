import 'babel-polyfill';
import gulp from 'gulp';
import shell from 'gulp-shell';

const path = {
  parent: './',
};

gulp.task('clean-install', () => gulp.src(path.parent)
  .pipe(shell('rm -rf node_modules'))
  .pipe(shell('rm -rf flow-typed'))
  .pipe(shell('npm install'))
  .pipe(shell('flow-typed install'))
);
