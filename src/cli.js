const { mdLinks } = require('./index');
const { countObjsValidateStats, countObjStats } = require('./validator');

const pathExist = process.argv[2];
const options = {};
const validate = process.argv.includes('--validate');
const stats = process.argv.includes('--stats');

if (!validate && !stats) {
  options.stats = false;
  options.validate = false;
} else if (validate && !stats) {
  options.stats = false;
  options.validate = true;
} else if (!validate && stats) {
  options.stats = true;
  options.validate = false;
} else if (validate && stats) {
  options.stats = true;
  options.validate = true;
}

mdLinks(pathExist, options)
  .then((res) => {
    if (options.validate && options.stats) {
      console.log(countObjsValidateStats(res));
    } else if (options.stats) {
      console.log(countObjStats(res));
    } else {
      console.log(res);
    }
  })
  .catch(new Error('no se esta ejecutando'));
