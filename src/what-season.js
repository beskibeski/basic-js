const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  };
  if (!Date.parse(date) || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  };
  
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();
  const day = date.getDate();

  const dateToRemake = day > 0 ? month + 1 : month;

  if (dateToRemake === 12 || dateToRemake === 1 || dateToRemake === 2) {
    return seasons[0];
  }
  if (dateToRemake === 3 || dateToRemake === 4 || dateToRemake === 5) {
    return seasons[1];
  }
  if (dateToRemake === 6 || dateToRemake === 7 || dateToRemake === 8) {
    return seasons[2];
  }
  if (dateToRemake === 9 || dateToRemake === 10 || dateToRemake === 11) {
    return seasons[3];
  }
}

module.exports = {
  getSeason
};
