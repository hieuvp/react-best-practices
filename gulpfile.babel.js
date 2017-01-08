import 'babel-polyfill';
import gulp from 'gulp';
import wait from 'gulp-wait';
import shell from 'gulp-shell';
import runSequence from 'run-sequence';

const path = {
  parent: '/',
  nodeModules: 'node_modules',
  flowTyped: 'flow-typed',
  build: 'build',
};

gulp.task('install-node-modules', () => gulp.src(path.parent)
  .pipe(shell(`rm -rf ${path.nodeModules}`))
  .pipe(wait(1000))
  .pipe(shell('yarn install'))
);

gulp.task('install-flow-typed', () => gulp.src(path.parent)
  .pipe(shell(`rm -rf ${path.flowTyped}`))
  .pipe(wait(1000))
  .pipe(shell('flow-typed install'))
);

gulp.task('clean-install', ['install-node-modules'], (callback) => {
  runSequence('install-flow-typed', callback);
});

gulp.task('deploy-to-firebase', () => gulp.src(path.parent)
  .pipe(shell(`rm -rf ${path.build}`))
  .pipe(wait(1000))
  .pipe(shell('npm run build'))
  .pipe(wait(1000))
  .pipe(shell('firebase deploy'))
  .pipe(wait(1000))
  .pipe(shell(`rm -rf ${path.build}`))
);
