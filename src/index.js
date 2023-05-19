/* const { validatePath, convertToAbsolutePath } = require('./convertPath');
const { readDirectory } = require('./getFiles');
const { readAllFilesMd, getContent } = require('./readFile');

// eslint-disable-next-line no-unused-vars
const pathExist = process.argv[2];
console.log(validatePath(pathExist));
// eslint-disable-next-line no-shadow
/* const mdLinks = (pathExist) => {
  // eslint-disable-next-line no-new
  new Promise((resolve, rejects) => {
    if (validatePath === true) {
      const namePath = convertToAbsolutePath(pathExist);
      console.log('La ruta si existe: ', namePath);
      console.log(readDirectory(namePath));
      console.log(readAllFilesMd(namePath));
      console.log(getContent(namePath));
      resolve(namePath);
      if (namePath === undefined) {
        // eslint-disable-next-line prefer-promise-reject-errors
        rejects('La ruta no existe, o no esta bien escrita. Por favor verificalo de nuevo');
      }
    }
  });
};

mdLinks(pathExist).then((res) => {
  console.log(res);
}).catch((err) => console.log(err));
module.exports = { mdLinks };
// función md-links
// eslint-disable-next-line no-shadow
/* const mdLinks = (pathExist) => new Promise((resolve, reject) => {
  if (validatePath(pathExist)) {
    const transformPath = convertToAbsolutePath(pathExist);
    // console.log('La ruta existe: ', transformPath);
    const getMd = getContent(transformPath);
    const probar = readAllFilesMd(getMd);
    resolve(probar);
  } else {
    reject(/* console.log('Error, la ruta no existe '));
  }
});

mdLinks(pathExist)
  .then((probar) => {
    console.log(probar);
  }).catch((error) => { console.log(error); });

module.exports = { mdLinks }; */
