/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
const { validatePath, convertToAbsolutePath } = require('./convertPath');
const { readDirectory } = require('./getFiles');
const { readAllFilesMd } = require('./readFile');
const { validateLinksAll } = require('./validateLinks');
// const { countObjStats, countObjsValidateStats } = require('./validator');
// const { countObjValidate, countObjStats, countObjsValidateStats } = require('./validator');

// const pathExist = process.argv[2];

// eslint-disable-next-line no-unused-vars
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
          resolve(Promise.all(validateLinksAll(joinArray)));
        } else {
          resolve(joinArray);
        }
      }).catch((err) => {
        console.log('This:', err);
      });
  }
});
/* if (options === 1) { resolve(Promise.all(validateLinksAll(res))); }
        if (options === 2) { resolve(countObjStats(res)); }
        if (options === 1 && options === 2) { resolve(countObjsValidateStats(res)); } */
/* const everyLinks = */
/* resolve(Promise.all(validateLinksAll(everyLinks))); */
// eslint-disable-next-line no-console

// eslint-disable-next-line no-console
// mdLinks(pathExist, {}).then((res) => console.log('Estos son los links con sus validaciones: ',
// res)).catch();
// console.log(typeof mdLinks);
module.exports = { mdLinks };
