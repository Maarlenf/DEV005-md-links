const pathExist = './';
const pathProbe = 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md';

const convertToGetLink = '[ ] Probaremos si funciona, [juego maiquel](https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit), [holaaa](https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit), [otro roto](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)';

const exampleGetLink = [
  {
    href: 'https://aula.cdichile.org/mod/quiz/view.php?id=227&forceview=1',
    text: 'un link',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
  },
  {
    href: 'https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit',
    text: 'juego maiquel',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
  },
  {
    href: 'https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit',
    text: 'holaaa',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: 'otro roto',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
  },
];

const exampleMDfiles = ['C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md'];

const mockValidateLinks = [
  {
    href: 'https://aula.cdichile.org/mod/quiz/view.php?id=227&forceview=1',
    text: 'un link',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit',
    text: 'juego maiquel',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit',
    text: 'holaaa',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
    status: 200,
    message: 'ok',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: 'otro roto',
    file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
    status: 404,
    message: 'fail',
  },
];

const mockGetContent = [{
  file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
  href: 'https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit',
  text: 'juego maiquel',
}, {
  file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
  href: 'https://www.zona-leros.com/juegos-pc/need-for-speed-hot-pursuit',
  text: 'holaaa',
}, {
  file: 'C:\\Users\\Marle\\OneDrive\\Escritorio\\md-links\\DEV005-md-links\\hacer\\jajaja\\prueba1.md',
  href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
  text: 'otro roto',
}];

module.exports = {
  pathExist,
  pathProbe,
  convertToGetLink,
  exampleGetLink,
  exampleMDfiles,
  mockValidateLinks,
  mockGetContent,
};
