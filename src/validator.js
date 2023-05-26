const countObjStats = (arrayMd) => {
  const mySet = new Set(arrayMd.map((e) => e.href));
  return {
    Total: arrayMd.length,
    Unique: mySet.size,
  };
};

const countObjsValidateStats = (arrayMd) => {
  const mySet = new Set(arrayMd.map((e) => e.href));
  const findBroken = arrayMd.filter((key) => key.message === 'fail');
  return {
    Total: arrayMd.length,
    Unique: mySet.size,
    Broken: findBroken.length,
  };
};

module.exports = { countObjStats, countObjsValidateStats };
