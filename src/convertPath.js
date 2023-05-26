// import { marked } from 'marked';
const fs = require('fs');
const path = require('path');

const validatePath = (pathExist) => {
  if (fs.existsSync(pathExist)) {
    return true;
  }
  // eslint-disable-next-line no-console
  return console.log(`La ruta ingresada no existe: ${pathExist}`);
};

const convertToAbsolutePath = (pathExist) => {
  if (path.isAbsolute(pathExist)) {
    return pathExist;
  }
  return path.resolve(pathExist);
};

module.exports = {
  validatePath, convertToAbsolutePath,
};
