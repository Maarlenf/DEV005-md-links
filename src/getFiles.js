const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-shadow
const readDirectory = (pathExist) => {
  const allMd = [];
  let subDirectories = [];
  if (fs.statSync(pathExist).isFile() && path.extname(pathExist) === '.md') {
    allMd.push(pathExist);
  } else {
    const allDirectory = fs.readdirSync(pathExist);
    allDirectory.forEach((file) => {
      if (file !== 'node_modules' && file !== '.git') {
        const newFile = path.resolve(pathExist, file);
        if (path.extname(newFile) === '.md') {
          allMd.push(newFile);
        } else if (fs.statSync(newFile).isDirectory()) {
          subDirectories = readDirectory(newFile);
          if (subDirectories.length > 0) {
            allMd.push(...subDirectories);
          }
        }
      }
    });
  }
  return allMd;
};

// console.log(readDirectory(pathExist));
/* const allDirectory = fs.readdirSync(allPath);
console.log(allDirectory); */

module.exports = {
  readDirectory,
};
