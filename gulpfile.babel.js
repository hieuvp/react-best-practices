import 'babel-polyfill';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import runShell from './build-system/runShell';

const path = {
  root: '/',
  nodeModules: 'node_modules',
  flowTyped: 'flow-typed',
  build: 'build',
};

gulp.task('install-node-modules', () => gulp.src(path.root)
  .pipe(runShell(`rm -rf ${path.nodeModules}`))
  .pipe(runShell('yarn install'))
);

gulp.task('install-flow-typed', () => gulp.src(path.root)
  .pipe(runShell(`rm -rf ${path.flowTyped}`))
  .pipe(runShell('flow-typed install'))
);

gulp.task('clean-install', ['install-node-modules'], (callback) => {
  runSequence('install-flow-typed', callback);
});

gulp.task('deploy-to-firebase', () => gulp.src(path.root)
  .pipe(runShell(`rm -rf ${path.build}`))
  .pipe(runShell('npm run build'))
  .pipe(runShell('firebase deploy'))
  .pipe(runShell(`rm -rf ${path.build}`))
);
