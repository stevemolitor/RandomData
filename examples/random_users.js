var i, num_users, random, randomUser, users;
random = require('../lib/RandomData');
randomUser = function() {
  return {
    login: random.string(10),
    password: random.string(10),
    first_name: random.firstName(),
    middle_initial: random.middleInitial(),
    last_name: random.lastName(),
    address_line_1: random.addressLine1(),
    address_line_2: random.addressLine2(),
    city: random.city(),
    state: random.usStateName(),
    zip: random.usZipLong(),
    home_phone: random.usPhone(),
    cell_phone: random.usPhone()
  };
};
if (process.argv.length !== 3) {
  console.log("random_users.coffee: Generate random user data.");
  console.log("Usage:  coffee [ NUM_USERS ]");
  process.exit(1);
}
num_users = Number(process.argv[2]);
users = (function() {
  var _results;
  _results = [];
  for (i = 1; 1 <= num_users ? i <= num_users : i >= num_users; 1 <= num_users ? i++ : i--) {
    _results.push(randomUser());
  }
  return _results;
})();
console.log(users);