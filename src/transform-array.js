const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }  
  const newArray = [...arr];
  while (newArray.includes('--discard-next') || newArray.includes('--discard-prev') || newArray.includes('--double-next') || newArray.includes('--double-prev')) {
    for (let i = 0; i < newArray.length; i += 1) {
      if (newArray[i] == '--discard-next' && i < newArray.length - 1) {
        newArray[i + 1] = '--to-delete';
        newArray[i] = '--to-delete';
        break;
      } else if (newArray[i] === '--discard-next') {
        newArray[i] = '--to-delete';
        break;
      }
      if (newArray[i] === '--double-next' && i < newArray.length - 1) { 
        newArray[i] = newArray[i + 1];
        break;
      } else if (newArray[i] === '--double-next') {
        newArray[i] = '--to-delete';
        break;
      }
      if (newArray[i] === '--double-prev' && i > 0) {
        newArray[i] = newArray[i - 1];
        break;
      } else if (newArray[i] === '--double-prev') {
        newArray[i] = '--to-delete';
        break;
      }
      if (newArray[i] === '--discard-prev' && i > 0) {
        newArray[i - 1] = '--to-delete';
        newArray[i] = '--to-delete';
        break;
      } else if (newArray[i] === '--discard-prev') {
        newArray[i] = '--to-delete';
        break;
      }
    }
  };
  return newArray.filter((element) => element !== '--to-delete' && element);
}

module.exports = {
  transform
};
