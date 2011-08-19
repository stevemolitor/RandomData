exports.DATA =
  female_first_names: [
    'Alison', 'Ann', 'Anna', 'Anne', 'Barbara', 'Betty', 'Beryl', 'Carol', 'Charlotte', 'Cheryl', 'Deborah', 'Diana', 'Donna',
    'Dorothy', 'Elizabeth', 'Eve', 'Felicity', 'Fiona', 'Helen', 'Helena', 'Jennifer', 'Jessica', 'Judith', 'Karen', 'Kimberly',
    'Laura', 'Linda', 'Lisa', 'Lucy', 'Margaret', 'Maria', 'Mary', 'Michelle', 'Nancy', 'Patricia', 'Polly', 'Robyn', 'Ruth', 'Sandra',
    'Sarah', 'Sharon', 'Susan', 'Tabitha', 'Ursula', 'Victoria', 'Wendy'
  ]

  male_first_names: [
    'Adam', 'Anthony', 'Arthur', 'Brian', 'Charles', 'Christopher', 'Daniel', 'David', 'Donald', 'Edgar', 'Edward', 'Edwin',
    'George', 'Harold', 'Herbert', 'Hugh', 'James', 'Jason', 'John', 'Joseph', 'Kenneth', 'Kevin', 'Marcus', 'Mark', 'Matthew',
    'Michael', 'Paul', 'Philip', 'Richard', 'Robert', 'Roger', 'Ronald', 'Simon', 'Steven', 'Terry', 'Thomas', 'William'
  ]

  last_names: [
    'Abel', 'Anderson', 'Andrews', 'Anthony', 'Baker', 'Brown', 'Burrows', 'Clark', 'Clarke', 'Clarkson', 'Davidson', 'Davies', 'Davis',
    'Dent', 'Edwards', 'Garcia', 'Grant', 'Hall', 'Harris', 'Harrison', 'Jackson', 'Jeffries', 'Jefferson', 'Johnson', 'Jones',
    'Kirby', 'Kirk', 'Lake', 'Lee', 'Lewis', 'Martin', 'Martinez', 'Major', 'Miller', 'Moore', 'Oates', 'Peters', 'Peterson', 'Robertson',
    'Robinson', 'Rodriguez', 'Smith', 'Smythe', 'Stevens', 'Taylor', 'Thatcher', 'Thomas', 'Thompson', 'Walker', 'Washington', 'White',
    'Williams', 'Wilson', 'Yorke'
  ]

  trees: [
    'Acacia', 'Beech', 'Birch', 'Cedar', 'Cherry', 'Chestnut', 'Elm', 'Larch', 'Laurel', 'Linden', 'Maple', 'Oak', 'Pine',
    'Rose', 'Walnut', 'Willow'
  ]

  famous_people: [ 'Adams', 'Franklin', 'Jackson', 'Jefferson', 'Lincoln', 'Madison', 'Washington', 'Wilson' ]

  places: [ 'Highland', 'Hill', 'Park', 'Woodland', 'Sunset', 'Virginia' ]

  ordinal_streets: [ '1st', '2nd', '4th', '5th', '34th', '42nd' ]


ALL_NAMES = exports.DATA.female_first_names.concat(exports.DATA.male_first_names)

ALPHA_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

ALL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'


rand = (n) -> Math.floor(Math.random() * n)

randomElement = (array) ->
  array[rand(array.length)]


# Generates a random number between 0...n, exclusive.
exports.randomNumber = rand

# Generates true or false.
exports.trueOrFalse = ->
  rand(2) is 1 ? true : false

# Generates a random alphanumeric string of given length. Default length is 16.
exports.string = (length = 16) ->
  (ALL_CHARS[rand ALL_CHARS.length] for i in [0...length]).join('')

# Generates random female first name.
exports.femaleFirstName = ->
  randomElement(exports.DATA.female_first_names)

# Generates random male first name.
exports.maleFirstName = ->
  randomElement(exports.DATA.male_first_names)

# Generates random first name (male or female).
exports.firstName = ->
  randomElement(ALL_NAMES)

# Generates random last name.
exports.lastName = ->
  randomElement(exports.DATA.last_names)

# Generates single character alpha string.
exports.middleInitial = ->
  exports.randomString(1)