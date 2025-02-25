const glob = require('glob');
// const fse = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const dir = path.resolve(__dirname, '../scaffolds');
const pattern = '*/package.json';
const files = glob.sync(pattern, {
  cwd: dir,
});

files.forEach((item) => {
  const dirname = item.split('/')[0];
  const dirpath = path.resolve(dir, dirname);
  const pkgPath = path.resolve(dir, item);
  // eslint-disable-next-line import/no-dynamic-require
  const pkgData = require(pkgPath);
  const { name: npmName } = pkgData;

  console.log('start publish', npmName);

  execSync('pwd', {
    stdio: 'inherit',
    cwd: dirpath,
  });
  execSync('tnpm update', {
    stdio: 'inherit',
    cwd: dirpath,
  });
  execSync('npm version patch', {
    stdio: 'inherit',
    cwd: dirpath,
  });
  execSync('npm publish', {
    stdio: 'inherit',
    cwd: dirpath,
  });
  execSync('tnpm sync', {
    stdio: 'inherit',
    cwd: dirpath,
  });

  console.log('publish success', npmName);
});
