/**
 * Created by HieuVP on 1/19/17.
 */
import lazypipe from 'lazypipe';
import shell from 'gulp-shell';
import wait from 'gulp-wait';

/**
 * @param {string} command
 * @param {number} interval
 */
export default function runShell(command, interval = 1000) {
  return lazypipe()
    .pipe(shell, command)
    .pipe(wait, interval)();
}
