const ghpages = require('gh-pages');
const path = require('path');

console.log('Publishing to github pages')

const buildDir = path.join(__dirname, 'build');
ghpages.publish(buildDir, (err) => {
  if (err) {
    console.log('error', err)
  }
});