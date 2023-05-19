const fs = require('fs');
const { readDirectory } = require('./getFiles');

// eslint-disable-next-line no-unused-vars
const pathExist = process.argv[2];

const getContent = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

// eslint-disable-next-line no-shadow
const readAllFilesMd = (pathExist) => {
  const getFileMd = readDirectory(pathExist);
  const array = getFileMd.forEach((element) => getContent(element));
  return array;
};

readAllFilesMd(pathExist);
// console.log(readDirectory(pathExist));
// getContent(getFileMd);
module.exports = {
  getContent, readAllFilesMd,
};
