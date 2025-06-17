var Employee = require('./Employee')
var Customer = require('./Customer')

var personFactory = function (name, funds = 0, type, employeer) {
  if (type == 'employee') {
    return new Employee(
      name, funds, employeer
    )
  }
  return new Customer(name, funds)
}

module.exports = personFactory
