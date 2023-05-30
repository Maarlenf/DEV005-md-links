/* eslint-disable prefer-promise-reject-errors */
const fetch = require('node-fetch');

const validateLinksAll = (arrayMd) => new Promise((resolve, reject) => {
  const arrayPromises = arrayMd.map((link) => fetch(link.href)
    .then((response) => ({
      href: link.href,
      text: link.text,
      file: link.file,
      status: response.status,
      message: response.status >= 200 && response.status < 300 ? 'ok' : 'fail',
    })));
  Promise.all(arrayPromises).then((result) => resolve(result));
});

module.exports = { validateLinksAll };
