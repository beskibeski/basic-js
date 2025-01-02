const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((array, arrayIndex) => 
    array.map((__, elementIndex) => {
      let count = 0;
      if (arrayIndex > 0) {
        if (matrix[arrayIndex - 1][elementIndex - 1] || matrix[arrayIndex - 1][elementIndex] || matrix[arrayIndex - 1][elementIndex + 1])
        count += 1;
      }      
      if (arrayIndex < matrix.length - 1) {
        if (matrix[arrayIndex + 1][elementIndex - 1] || matrix[arrayIndex + 1][elementIndex] || matrix[arrayIndex + 1][elementIndex + 1]) {
          count += 1;
        }        
      }
      if (elementIndex > 0 && matrix[arrayIndex][elementIndex - 1]) {
        count += 1;
      }
      if (elementIndex < array.length - 1 && matrix[arrayIndex][elementIndex + 1]) {
        count += 1;
      }
      return count;      
  }))
}

module.exports = {
  minesweeper
};
