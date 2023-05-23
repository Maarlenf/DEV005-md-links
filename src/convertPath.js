// import { marked } from 'marked';
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-unused-vars
const pathExist = process.argv[2];

// funcion que valida si la ruta existe
// eslint-disable-next-line no-shadow
const validatePath = (pathExist) => {
  if (fs.existsSync(pathExist)) {
    return true;
  }
  return false;
};

// función que verifica si la ruta es absoluta, si no, la convierte
// eslint-disable-next-line no-shadow
const convertToAbsolutePath = (pathExist) => {
  if (path.isAbsolute(pathExist)) {
    return pathExist;
  }

  return path.resolve(pathExist);
};

module.exports = {
  validatePath, convertToAbsolutePath,
};
