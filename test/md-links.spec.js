/* eslint-disable no-undef */
const { describe } = require('node:test');
const { validatePath, convertToAbsolutePath } = require('../src/convertPath');
const { mdLinks } = require('../src/index');

const pathExist = './';

describe('validatePath', () => {
  it('It is a function', () => {
    expect(typeof validatePath).toBe('function');
  });
  it('It should confirm if the path exists', () => {
    expect(validatePath(pathExist)).toBe(true);
  });
});

describe('convertToAbsolutePath', () => {
  it('if the path is Absolute return path', () => {
    expect(convertToAbsolutePath(pathExist)).toBe('C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links');
  });
});

describe('mdLinks', () => {
  it('It is should be function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('It is should to be a promise', () => {
    expect(mdLinks(pathExist)).toBeInstanceOf(Promise);
  });
  it('Is is error when the path not be exist', () => mdLinks('holaaaaaaa').catch((error) => {
    expect(error).toBe('La ruta ingresada no existe');
  }));
});
