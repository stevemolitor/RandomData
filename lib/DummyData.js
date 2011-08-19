var ALL_CHARS, ALL_NAMES, ALPHA_CHARS, rand, randomElement;
exports.DATA = {
  female_first_names: ['Alison', 'Ann', 'Anna', 'Anne', 'Barbara', 'Betty', 'Beryl', 'Carol', 'Charlotte', 'Cheryl', 'Deborah', 'Diana', 'Donna', 'Dorothy', 'Elizabeth', 'Eve', 'Felicity', 'Fiona', 'Helen', 'Helena', 'Jennifer', 'Jessica', 'Judith', 'Karen', 'Kimberly', 'Laura', 'Linda', 'Lisa', 'Lucy', 'Margaret', 'Maria', 'Mary', 'Michelle', 'Nancy', 'Patricia', 'Polly', 'Robyn', 'Ruth', 'Sandra', 'Sarah', 'Sharon', 'Susan', 'Tabitha', 'Ursula', 'Victoria', 'Wendy'],
  male_first_names: ['Adam', 'Anthony', 'Arthur', 'Brian', 'Charles', 'Christopher', 'Daniel', 'David', 'Donald', 'Edgar', 'Edward', 'Edwin', 'George', 'Harold', 'Herbert', 'Hugh', 'James', 'Jason', 'John', 'Joseph', 'Kenneth', 'Kevin', 'Marcus', 'Mark', 'Matthew', 'Michael', 'Paul', 'Philip', 'Richard', 'Robert', 'Roger', 'Ronald', 'Simon', 'Steven', 'Terry', 'Thomas', 'William'],
  last_names: ['Abel', 'Anderson', 'Andrews', 'Anthony', 'Baker', 'Brown', 'Burrows', 'Clark', 'Clarke', 'Clarkson', 'Davidson', 'Davies', 'Davis', 'Dent', 'Edwards', 'Garcia', 'Grant', 'Hall', 'Harris', 'Harrison', 'Jackson', 'Jeffries', 'Jefferson', 'Johnson', 'Jones', 'Kirby', 'Kirk', 'Lake', 'Lee', 'Lewis', 'Martin', 'Martinez', 'Major', 'Miller', 'Moore', 'Oates', 'Peters', 'Peterson', 'Robertson', 'Robinson', 'Rodriguez', 'Smith', 'Smythe', 'Stevens', 'Taylor', 'Thatcher', 'Thomas', 'Thompson', 'Walker', 'Washington', 'White', 'Williams', 'Wilson', 'Yorke'],
  trees: ['Acacia', 'Beech', 'Birch', 'Cedar', 'Cherry', 'Chestnut', 'Elm', 'Larch', 'Laurel', 'Linden', 'Maple', 'Oak', 'Pine', 'Rose', 'Walnut', 'Willow'],
  famous_people: ['Adams', 'Franklin', 'Jackson', 'Jefferson', 'Lincoln', 'Madison', 'Washington', 'Wilson'],
  places: ['Highland', 'Hill', 'Park', 'Woodland', 'Sunset', 'Virginia'],
  ordinal_streets: ['1st', '2nd', '4th', '5th', '34th', '42nd']
};
ALL_NAMES = exports.DATA.female_first_names.concat(exports.DATA.male_first_names);
ALPHA_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
ALL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
rand = function(n) {
  return Math.floor(Math.random() * n);
};
randomElement = function(array) {
  return array[rand(array.length)];
};
exports.randomNumber = rand;
exports.trueOrFalse = function() {
  var _ref;
  return (_ref = rand(2) === 1) != null ? _ref : {
    "true": false
  };
};
exports.string = function(length) {
  var i;
  if (length == null) {
    length = 16;
  }
  return ((function() {
    var _results;
    _results = [];
    for (i = 0; 0 <= length ? i < length : i > length; 0 <= length ? i++ : i--) {
      _results.push(ALL_CHARS[rand(ALL_CHARS.length)]);
    }
    return _results;
  })()).join('');
};
exports.femaleFirstName = function() {
  return randomElement(exports.DATA.female_first_names);
};
exports.maleFirstName = function() {
  return randomElement(exports.DATA.male_first_names);
};
exports.firstName = function() {
  return randomElement(ALL_NAMES);
};
exports.lastName = function() {
  return randomElement(exports.DATA.last_names);
};
exports.middleInitial = function() {
  return exports.randomString(1);
};