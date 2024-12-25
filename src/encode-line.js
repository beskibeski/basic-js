const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = '';
  let char = '';
  let counter = 1;
  const array = str.split('');

  for (let i = 0; i <= array.length; i += 1) {
    if (i === 0) {
      char = array[i];
    } else {
      if (array[i] === char) {
        counter += 1;
      } else {        
        newString = `${newString}${counter > 1 ? counter : ''}${char}`;
        counter = 1;
        char = array[i];
      }
    }
  }
  
  return newString;
}

module.exports = {
  encodeLine
};
