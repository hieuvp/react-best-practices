import 'babel-polyfill';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import runSequence from 'run-sequence';
import runShell from './build-system/runShell';
import Configuration from './src/constant/Configuration';

const path = {
  root: '/',
  nodeModules: 'node_modules',
  flowTyped: 'flow-typed',
  build: 'build',
};

const isDevelopment = (Configuration.profile === Configuration.Environment.DEVELOPMENT);
const isStaging = (Configuration.profile === Configuration.Environment.STAGING);
const isProduction = (Configuration.profile === Configuration.Environment.PRODUCTION);

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
  .pipe(gulpIf(isDevelopment, runShell('firebase deploy -P development')))
  .pipe(gulpIf(isStaging, runShell('firebase deploy -P staging')))
  .pipe(gulpIf(isProduction, runShell('firebase deploy -P production')))
  .pipe(runShell(`rm -rf ${path.build}`))
);
