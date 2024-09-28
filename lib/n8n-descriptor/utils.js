const _ = require('lodash');

function normalizeName (name) {
  // remove all special characters, keep only alphanumeric and spaces
  const n = name.replace(/[^a-zA-Z0-9 ]/g, '');
  const n2 = _.trim(n);
  // capitalize first letter of each word
  const n3 = n2.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  return n3;
}

module.exports = {
  normalizeName,
};
