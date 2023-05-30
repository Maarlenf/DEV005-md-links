const path = require('path');
const { readFile } = require('fs');
const { validatePath, convertToAbsolutePath } = require('../src/convertPath');
const { mdLinks } = require('../src/index');
const { readDirectory } = require('../src/getFiles');
const { getLinks, getContent, readAllFilesMd } = require('../src/readFile');
const { validateLinksAll } = require('../src/validateLinks');
const {
  pathExist, pathProbe, exampleGetLink, convertToGetLink,
  exampleMDfiles, mockValidateLinks, mockGetContent,
} = require('./mockData');
const { beforeEach, afterEach } = require('node:test');
const fetch = require('node-fetch');
const { error } = require('console');
jest.mock('node-fetch', () => {
  const otherProbe = [
    {
      href: 'https://aula.cdichile.org/mod/quiz/view.php?id=227&forceview=1',
      text: 'un link',
      file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
      text: 'otro roto',
      file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
    }
  ];
  return jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
    const result = otherProbe.map((link) => ({
      href: link.href,
      text: link.text,
      file: link.file,
      status: 200,
      message: 'ok',
    }))
    resolve(result);
  }));
  })


describe('validatePath', () => {
  it('It is a function', () => {
    expect(typeof validatePath).toBe('function');
  });
  it('It should confirm if the path exists', () => {
    expect(validatePath(pathExist)).toBeTruthy();
  });
  it('should return false if there is not path', () => {
    expect(validatePath('')).toBeFalsy();
  });
});

describe('convertToAbsolutePath', () => {
  it('if the path is relavite return path', () => {
    expect(convertToAbsolutePath(pathProbe)).toBe(pathProbe);
  });
  it('if the path is absolute return absolute', () => {
    if (path.isAbsolute('C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links')) {
      expect(convertToAbsolutePath('C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links')).toBe('C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links');
    }
  });
});

describe('function to read the directory and return the content with extension .md', () => {
  it('should return array with file extension .md', () => {
    expect(readDirectory('C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja')).toEqual(exampleMDfiles);
  });
  it('should return [] if the directory dont have .md', () => {
    expect(readDirectory('C:/Users/Marle/OneDrive/Escritorio/md-links/DEV005-md-links/probar')).toEqual([]);
  });
  it('is the path is file and your extension is .md return too', () => {
    expect(readDirectory(pathProbe)).toEqual(exampleMDfiles);
  });
});

describe('getFiles', () => {
  it('getLinks is a function return array with object to link', () => {
    expect(getLinks(convertToGetLink, pathProbe)).toEqual(mockGetContent);
  });
  it('getContent should read file and convert result to array object', async () => {
    await getContent(pathProbe);
    readFile(pathProbe, 'utf8', (err, convertToGetLink) => {
      // eslint-disable-next-line no-console
      if (err) { console.log('there fail:', err); }
      const watch = getLinks(convertToGetLink, pathProbe);
      expect(watch).toEqual(exampleGetLink);
      expect(err).toBe(null);
    });
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
  it('call readAllFilesMd', async () => {
    const probe = readDirectory('C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja');
    await readAllFilesMd(probe)
      .then((res) => {
        // const array = res.flat;
        expect(res.flat()).toEqual(exampleGetLink);
      })
  });
 it('call readAllFilesMd --validate', async () => {
    const probe = readDirectory('C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja');
    await readAllFilesMd(probe)
      .then((res) => {
        const arrayLinks = res.flat();
        return expect(validateLinksAll(arrayLinks)).toEqual(Promise.all(mockValidateLinks));
      });
});
});
