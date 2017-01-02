import 'babel-polyfill';
import gulp from 'gulp';
import dependencyManager from './build-system/DependencyManager';

gulp.task('clean-install', () => {
  dependencyManager.clean();
  dependencyManager.install();
});
