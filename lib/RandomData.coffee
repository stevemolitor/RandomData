data = require './Data'

rand = (n) -> Math.floor(Math.random() * n)

randomElement = (array) ->
  array[rand(array.length)]


# Generates a random number between 0...n, exclusive.
exports.number = rand

# Generates true or false.
exports.trueOrFalse = ->
  rand(2) is 1 ? true : false

# Generates a random alphanumeric string of given length. Default length is 16.
exports.string = (length = 16) ->
  (data.all_chars[rand data.all_chars.length] for i in [0...length]).join('')

# Generates random female first name.
exports.femaleFirstName = ->
  randomElement(data.female_first_names)

# Generates random male first name.
exports.maleFirstName = ->
  randomElement(data.male_first_names)

# Generates random first name (male or female).
exports.firstName = ->
  randomElement(data.all_names)

# Generates random last name.
exports.lastName = ->
  randomElement(data.last_names)

# Generates single character alpha string.
exports.middleInitial = ->
  randomElement data.upper_alphas

# Generates random first address line.
exports.addressLine1 = ->
  "#{rand(4000) + 1} #{randomElement(data.street_names)} #{randomElement(data.street_types)}"

# Generates random second address line.
exports.addressLine2 = ->
  "#{randomElement(data.line_2_types)} #{exports.number(999) + 1}"

# Generates a random city.
exports.city = ->
  randomElement(data.cities)

# Generates a random 2 character US state abbrevation.
exports.usStateAbbreviation = ->
  randomElement(data.state_abbrevs)

# Generates a random US state full name.
exports.usStateName = ->
  randomElement(data.state_names)

stringOfNumbers = (n) ->
  (i for i in [1..n]).join("")  # when we upgrade to node.js 0.5 we can use its util.format method

# Generates a random 5 digit US zip code.  Note:  the zip code may not
# be an actual US zip code, but the format will be valid.
exports.usZipShort = ->
  stringOfNumbers 5

# Generates a random 9 digit US zip code in the zip+4 format. For
# example, '12345-0123'.  Note: the zip code may not be an actual US
# zip code, but the format will be valid.
exports.usZipLong = ->
  "#{stringOfNumbers 5}-#{stringOfNumbers 4}"

# Generates a random country name.
exports.country = ->
  randomElement data.countries

# Generates a random US phone number
exports.usPhone = ->
  "#{rand(900) + 100}-#{rand(900)+100}-#{rand(10000)+1000}"

# Generates a random international phone number
exports.internationalPhone = ->
  "011-#{rand(100) + 1}-#{rand(100)+10}-#{rand(10000)+1000}"
