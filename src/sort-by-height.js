const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arraySortedWithoutMinus = arr.filter((element) => element !== -1).sort((a, b) => a - b);

  const indexesOfMinusArray = arr.reduce((array, value, index) => {
    if (value === -1) {
      return [...array, index];
    } 
    return array;
  }, []);

  let count = 0;

  return arr.map((element, index) => {
    if (indexesOfMinusArray.includes(index)) {
      return element;
    } else {      
      const sortedElement = arraySortedWithoutMinus[count];
      count += 1;
      return sortedElement;
    }
  });  
}

module.exports = {
  sortByHeight
};
