const { validatePath, convertToAbsolutePath } = require('./convertPath');
const { readDirectory } = require('./getFiles');
const { readAllFilesMd } = require('./readFile');
const { validateLinksAll } = require('./validateLinks');

const pathExist = process.argv[2];

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (!validatePath(path)) {
    reject((error) => console.log(error));
  } else {
    const pathAbsolute = convertToAbsolutePath(path);
    const getArrayMd = readDirectory(pathAbsolute);
    readAllFilesMd(getArrayMd)
      .then((res) => {
        const prueba = res.flat();
        resolve(Promise.all(validateLinksAll(prueba)));
      })
      .catch((err) => console.log(err));
  }
});

mdLinks(pathExist, {}).then((res) => console.log(res));

module.exports = { mdLinks };
