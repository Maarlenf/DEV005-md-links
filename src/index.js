/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
const { validatePath, convertToAbsolutePath } = require('./convertPath');
const { readDirectory } = require('./getFiles');
const { readAllFilesMd } = require('./readFile');
const { validateLinksAll } = require('./validateLinks');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (!validatePath(path)) {
    reject('La ruta ingresada no existe');
  } else {
    const pathAbsolute = convertToAbsolutePath(path);
    const getArrayMd = readDirectory(pathAbsolute);
    readAllFilesMd(getArrayMd)
      .then((res) => {
        const joinArray = res.flat();
        if (options.validate) {
          resolve(validateLinksAll(joinArray));
        } else {
          resolve(joinArray);
        }
      }).catch((err) => {
        console.log('This:', err);
      });
  }
});

module.exports = { mdLinks };
