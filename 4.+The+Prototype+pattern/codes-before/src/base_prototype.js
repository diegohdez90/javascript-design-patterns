var Customer = require('./Customer')

var base = new Customer();
base.addItemToList('Product 1');
base.addItemToList('Product 2');
base.addItemToList('Product 3');
base.addItemToList('Product 4');

module.exports = base
