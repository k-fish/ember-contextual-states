/* eslint-env node */
const childProcess = require('child_process');
const { execSync } = childProcess;

module.exports = {
  message: "Release %@",
  publish: true,
  afterPublish: function(project, versions) {
    runCommand('git config core.autocrlf true && ember github-pages:commit --message "Released ' + versions.next + '"');
    runCommand('git push origin gh-pages:gh-pages');
  },
};

function runCommand(command) {
  console.log(`Running: ${command}`);
  const output = execSync(command, { encoding: 'utf8', stdio:[0,1,2] });
  console.log(output);
}
