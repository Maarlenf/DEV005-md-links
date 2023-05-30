/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const validatePath = (pathExist) => {
  if (fs.existsSync(pathExist)) {
    return true;
  }
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
