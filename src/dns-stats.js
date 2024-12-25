const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  
  const countDomains = (domainsArray) => {
    const newDomainsArray = [];
    let newDomain = '';
    
    for (let i = 0; i < domainsArray.length; i += 1) {
    	newDomain = `${newDomain}.${domainsArray[i]}`;
      newDomainsArray.push(newDomain);
    }
   
    newDomainsArray.forEach((domain) => {
      if (result.hasOwnProperty(domain)) {
        result[domain] += 1;
      } else {
     	  result[domain] = 1;
      }
    })
  };
  
  const reversedDomains = domains.map((element) => element.split('.').reverse());
  for (let i = 0; i < reversedDomains.length; i += 1) {
    countDomains(reversedDomains[i]);
  }

  return result;
};

module.exports = {
  getDNSStats
};
