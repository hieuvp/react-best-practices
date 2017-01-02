import 'babel-polyfill';
import gulp from 'gulp';
import wait from 'gulp-wait';
import shell from 'gulp-shell';
import copy from 'gulp-copy';
import runSequence from 'run-sequence';

const path = {
  parent: '/',
  nodeModules: 'node_modules',
  flowTyped: 'flow-typed',
  definitelyTyped: 'definitely-typed',
};

const definitelyTypedSource = [];

gulp.task('install-node-modules', () => gulp.src(path.parent)
  .pipe(shell(`rm -rf ${path.nodeModules}`))
  .pipe(wait(1000))
  .pipe(shell('npm install'))
);

gulp.task('install-flow-typed', () => gulp.src(path.parent)
  .pipe(shell(`rm -rf ${path.flowTyped}`))
  .pipe(wait(1000))
  .pipe(shell('flow-typed install'))
);

gulp.task('install-definitely-typed', () => gulp.src(definitelyTypedSource)
  .pipe(shell(`rm -rf ${path.definitelyTyped}`))
  .pipe(wait(1000))
  .pipe(copy(path.definitelyTyped, {prefix: 10}))
);

gulp.task('clean-install', ['install-node-modules'], (callback) => {
  runSequence('install-flow-typed', 'install-definitely-typed', callback);
});
