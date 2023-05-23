/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const markdownIt = require('markdown-it');
const { JSDOM } = require('jsdom');

// función para traer links
const getLinks = (content, file) => {
  const allLinks = [];
  // eslint-disable-next-line new-cap
  const md = new markdownIt();
  const convertHTML = md.render(content);
  const dom = new JSDOM(convertHTML);
  const { document } = dom.window;
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    const text = link.textContent;
    if (href.startsWith('https')) {
      allLinks.push({ href, text, file });
    }
  });
  return allLinks;
};

const getContent = (pathMD) => new Promise((resolve, reject) => {
  fs.readFile(pathMD, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }
    const watch = getLinks(data, pathMD);
    resolve(watch);
  });
});

const readAllFilesMd = (arrayMd) => {
  // console.log(getFileMd);
  const arrayPromises = arrayMd.map((element) => getContent(element));
  return Promise.all(arrayPromises);
};

module.exports = {
  readAllFilesMd,
};
