var ALL_CHARS, ALL_NAMES, ALPHA_CHARS, STATE_ABBREVS, STATE_NAMES, rand, randomElement, state, stringOfNumbers;
exports.DATA = {
  female_first_names: ['Alison', 'Ann', 'Anna', 'Anne', 'Barbara', 'Betty', 'Beryl', 'Carol', 'Charlotte', 'Cheryl', 'Deborah', 'Diana', 'Donna', 'Dorothy', 'Elizabeth', 'Eve', 'Felicity', 'Fiona', 'Helen', 'Helena', 'Jennifer', 'Jessica', 'Judith', 'Karen', 'Kimberly', 'Laura', 'Linda', 'Lisa', 'Lucy', 'Margaret', 'Maria', 'Mary', 'Michelle', 'Nancy', 'Patricia', 'Polly', 'Robyn', 'Ruth', 'Sandra', 'Sarah', 'Sharon', 'Susan', 'Tabitha', 'Ursula', 'Victoria', 'Wendy'],
  male_first_names: ['Adam', 'Anthony', 'Arthur', 'Brian', 'Charles', 'Christopher', 'Daniel', 'David', 'Donald', 'Edgar', 'Edward', 'Edwin', 'George', 'Harold', 'Herbert', 'Hugh', 'James', 'Jason', 'John', 'Joseph', 'Kenneth', 'Kevin', 'Marcus', 'Mark', 'Matthew', 'Michael', 'Paul', 'Philip', 'Richard', 'Robert', 'Roger', 'Ronald', 'Simon', 'Steven', 'Terry', 'Thomas', 'William'],
  last_names: ['Abel', 'Anderson', 'Andrews', 'Anthony', 'Baker', 'Brown', 'Burrows', 'Clark', 'Clarke', 'Clarkson', 'Davidson', 'Davies', 'Davis', 'Dent', 'Edwards', 'Garcia', 'Grant', 'Hall', 'Harris', 'Harrison', 'Jackson', 'Jeffries', 'Jefferson', 'Johnson', 'Jones', 'Kirby', 'Kirk', 'Lake', 'Lee', 'Lewis', 'Martin', 'Martinez', 'Major', 'Miller', 'Moore', 'Oates', 'Peters', 'Peterson', 'Robertson', 'Robinson', 'Rodriguez', 'Smith', 'Smythe', 'Stevens', 'Taylor', 'Thatcher', 'Thomas', 'Thompson', 'Walker', 'Washington', 'White', 'Williams', 'Wilson', 'Yorke'],
  street_names: ['Acacia', 'Beech', 'Birch', 'Cedar', 'Cherry', 'Chestnut', 'Elm', 'Larch', 'Laurel', 'Linden', 'Maple', 'Oak', 'Pine', 'Rose', 'Walnut', 'Willow', 'Adams', 'Franklin', 'Jackson', 'Jefferson', 'Lincoln', 'Madison', 'Washington', 'Wilson'],
  street_types: ['St', 'Ave', 'Rd', 'Blvd', 'Pl', 'Pkwy', 'Ct', 'Circle'],
  line_2_types: ['Apt', 'Bsmt', 'Bldg', 'Dept', 'Fl', 'Frnt', 'Hngr', 'Lbby', 'Lot', 'Lowr', 'Ofc', 'Ph', 'Pier', 'Rear', 'Rm', 'Side', 'Slip', 'Spc', 'Stop', 'Ste', 'Trlr', 'Unit', 'Uppr'],
  cities: ['Midway', 'Mount Pleasant', 'Greenwood', 'Franklin', 'Oak Grove', 'Centerville', 'Salem', 'Georgetown', 'Fairview', 'Riverside', 'Rotorua', 'Tauranga', 'Whakatane', 'Taupo', 'Wanganui', 'Nababeep', 'Aggeneys', 'Pofadder', 'Polokwane', 'Bela', 'Bela', 'Goukamma', 'Karatara', 'Tswane', 'Prieska', 'Upington', 'Hoopstad', 'Bultfontein', 'Wesselsbron', 'Bothaville', 'Trompsburg', 'Henneman', 'Musina', 'Ogies', 'Kgatlahong', 'Tembisa', 'Tekoza', 'Sebokeng', 'Muntaung', 'Umnkomaaz'],
  us_states: [['Alaska', 'AK'], ['Alabama', 'AL'], ['Arkansas', 'AR'], ['Arizona', 'AZ'], ['California', 'CA'], ['Colorado', 'CO'], ['Connecticut', 'CT'], ['District of Columbia', 'DC'], ['Delaware', 'DE'], ['Florida', 'FL'], ['Georgia', 'GA'], ['Hawaii', 'HI'], ['Iowa', 'IA'], ['Idaho', 'ID'], ['Illinois', 'IL'], ['Indiana', 'IN'], ['Kansas', 'KS'], ['Kentucky', 'KY'], ['Louisiana', 'LA'], ['Massachusetts', 'MA'], ['Maryland', 'MD'], ['Maine', 'ME'], ['Michigan', 'MI'], ['Minnesota', 'MN'], ['Missouri', 'MO'], ['Mississippi', 'MS'], ['Montana', 'MT'], ['North Carolina', 'NC'], ['North Dakota', 'ND'], ['Nebraska', 'NE'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'], ['New Mexico', 'NM'], ['Nevada', 'NV'], ['New York', 'NY'], ['Ohio', 'OH'], ['Oklahoma', 'OK'], ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'], ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Virginia', 'VA'], ['Vermont', 'VT'], ['Washington', 'WA'], ['Wisconsin', 'WI'], ['West Virginia', 'WV'], ['Wyoming', 'WY']],
  countries: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Channel Islands", "Chile", "China", "Colombia", "Comoros", "Congo, Dem. Rep.", "Congo, Rep.", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt, Arab Rep.", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faeroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia, The", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong, China", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Rep.", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Dem. Rep.", "Korea, Rep.", "Kuwait", "Kyrgyz Republic", "Lao PDR", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao, China", "Macedonia, FYR", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Fed. Sts.", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russian Federation", "Rwanda", "Samoa", "San Marino", "São Tomé and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "St. Kitts and Nevis", "St. Lucia", "St. Vincent and the Grenadines", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela, RB", "Vietnam", "Virgin Islands (U.S.)", "West Bank and Gaza", "Yemen, Rep.", "Zambia", "Zimbabwe"]
};
ALL_NAMES = exports.DATA.female_first_names.concat(exports.DATA.male_first_names);
ALPHA_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
ALL_CHARS = ALPHA_CHARS.concat('abcdefghijklmnopqrstuvwxyz0123456789');
STATE_NAMES = (function() {
  var _i, _len, _ref, _results;
  _ref = exports.DATA.us_states;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    state = _ref[_i];
    _results.push(state[0]);
  }
  return _results;
})();
STATE_ABBREVS = (function() {
  var _i, _len, _ref, _results;
  _ref = exports.DATA.us_states;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    state = _ref[_i];
    _results.push(state[1]);
  }
  return _results;
})();
rand = function(n) {
  return Math.floor(Math.random() * n);
};
randomElement = function(array) {
  return array[rand(array.length)];
};
exports.number = rand;
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
  return exports.string(1);
};
exports.addressLine1 = function() {
  return "" + (rand(4000) + 1) + " " + (randomElement(exports.DATA.street_names)) + " " + (randomElement(exports.DATA.street_types));
};
exports.addressLine2 = function() {
  return "" + (randomElement(exports.DATA.line_2_types)) + " " + (exports.number(999) + 1);
};
exports.city = function() {
  return randomElement(exports.DATA.cities);
};
exports.usStateAbbreviation = function() {
  return randomElement(STATE_ABBREVS);
};
exports.usStateName = function() {
  return randomElement(STATE_NAMES);
};
stringOfNumbers = function(n) {
  var i;
  return ((function() {
    var _results;
    _results = [];
    for (i = 1; 1 <= n ? i <= n : i >= n; 1 <= n ? i++ : i--) {
      _results.push(i);
    }
    return _results;
  })()).join("");
};
exports.usZipShort = function() {
  return stringOfNumbers(5);
};
exports.usZipLong = function() {
  return "" + (stringOfNumbers(5)) + "-" + (stringOfNumbers(4));
};
exports.country = function() {
  return randomElement(exports.DATA.countries);
};
exports.usPhone = function() {
  return "" + (rand(900) + 100) + "-" + (rand(900) + 100) + "-" + (rand(10000) + 1000);
};
exports.internationalPhone = function() {
  return "011-" + (rand(100) + 1) + "-" + (rand(100) + 10) + "-" + (rand(10000) + 1000);
};