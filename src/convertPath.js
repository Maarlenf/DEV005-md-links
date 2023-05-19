// import { marked } from 'marked';
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-unused-vars
const pathExist = process.argv[2];

// funcion que valida si la ruta existe
// eslint-disable-next-line no-shadow
const validatePath = (pathExist) => {
  if (fs.existsSync(pathExist)) {
    console.log('La ruta si existe', pathExist);
    return true;
  }
  console.log('Según la validación de existencia, la ruta no existe');
  return false;
};

// función que verifica si la ruta es absoluta, si no, la convierte
// eslint-disable-next-line no-shadow
const convertToAbsolutePath = (pathExist) => {
  if (path.isAbsolute(pathExist)) {
    console.log('esta es la ruta: ', pathExist);
    return pathExist;
  }
  console.log('la ruta no era absoluta: ', path.resolve(pathExist));
  return path.resolve(pathExist);
};

validatePath(pathExist);
convertToAbsolutePath(pathExist);

module.exports = {
  validatePath, convertToAbsolutePath,
};
