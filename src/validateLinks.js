const validateLinksAll = (arrayMd) => arrayMd.map((link) => fetch(link.href)
  .then((response) => ({
    href: link.href,
    text: link.text,
    file: link.file,
    status: response.status,
    message: response.status >= 200 && response.status < 300 ? 'ok' : 'fail',
  })));
// return Promise.all(...arrayPromises);

module.exports = { validateLinksAll };
