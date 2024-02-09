// Write your solution in this file!
var customerName = 'bob';

function customerName(name) {
  return customerName('bob');
}

function upperCaseCustomerName(name) {
  customerName = customerName.toUpperCase('BOB');
}

console.log(customerName); // Output: bob
upperCaseCustomerName;
console.log(customerName); // Output: BOB

var bestCustomer = undefined

function setBestCustomer(name) {
    bestCustomer = ('not bob');
}

console.log(setBestCustomer);
setBestCustomer;

function overwriteBestCustomer(name) {
    bestCustomer = 'maybe bob';
}
console.log(overwriteBestCustomer);

function changeLeastFavoriteCustomer(newCustomer) {
    const leastFavoriteCustomer = 'Assignment to constant variable.';
    leastFavoriteCustomer = newCustomer; // Attempting to reassign a value to a constant variable
  }
