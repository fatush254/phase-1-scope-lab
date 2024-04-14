// Write your solution in this file!
var customerName = 'bob';

// Define upperCaseCustomerName function
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define setBestCustomer function
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Define overwriteBestCustomer function
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Define changeLeastFavoriteCustomer function
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'someone else';
  leastFavoriteCustomer = 'bobby'; // This line will throw an error due to trying to reassign a constant
}

// Export the functions
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
