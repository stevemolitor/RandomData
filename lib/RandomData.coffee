random = {}

data = require './Data'


#### General random generators

# Generates a random number between 0...n, exclusive.  For example
# `random.number(2) will return either `0` or `1`.
random.number = (n) -> Math.floor(Math.random() * n)

# Picks a random element from an array.
random.element = (array) ->
  array[random.number array.length]

# Randomly returns `true` or `false`.
random.trueOrFalse = ->
  random.number(2) is 1 ? true : false


#### Strings

# Generates a random alphanumeric string of given length. Default length is 16.
random.string = (length = 16) ->
  (data.all_chars[random.number data.all_chars.length] for i in [0...length]).join('')

# Generates a random string of digits of given length.
random.stringOfNumbers = (n) ->
  (i for i in [1..n]).join("")  # when we upgrade to node.js 0.5 we can use its util.format method


#### Names

# Picks a random female first name.
random.femaleFirstName = ->
  random.element data.female_first_names

# Picks a random male first name.
random.maleFirstName = ->
  random.element data.male_first_names

# Picks random first name (male or female).
random.firstName = ->
  random.element data.all_names

# Picks random last name.
random.lastName = ->
  random.element data.last_names

# Returns a random letter between 'A'..'Z'.
random.middleInitial = ->
  random.element data.upper_alphas


#### Locations

# Generates random first address line.
random.addressLine1 = ->
  "#{random.number(4000) + 1} #{random.element data.street_names} #{random.element data.street_types}"

# Generates random second address line.
random.addressLine2 = ->
  "#{random.element data.line_2_types} #{random.number(999) + 1}"

# Picks a random city, for example `'St. Louis'`.
random.city = ->
  random.element data.cities

# Picks a random 2 character US state abbrevation, for example `'MO'`.
random.usStateAbbreviation = ->
  random.element data.state_abbrevs

# Picks a random US state full name, for example `'Missouri'`.
random.usStateName = ->
  random.element data.state_names

# Generates a random 5 digit US zip code.  Note:  the zip code may not
# be an actual US zip code, but the format will be valid.
random.usZipShort = ->
  random.stringOfNumbers 5

# Generates a random 9 digit US zip code in the zip+4 format. For
# example, `'12345-0123'`.  Note: the zip code may not be an actual US
# zip code, but the format will be valid.
random.usZipLong = ->
  "#{random.stringOfNumbers 5}-#{random.stringOfNumbers 4}"

# Picks a random country name.
random.country = ->
  random.element data.countries

#### Phone Numbers

# Generates a random US phone number.  For example `'628-611-6473'`.
random.usPhone = ->
  "#{random.number(900) + 100}-#{random.number(900)+100}-#{random.number(10000)+1000}"

# Generates a random international phone number, for example `'011-54-16-10169'`.
random.internationalPhone = ->
  "011-#{random.number(100) + 1}-#{random.number(100)+10}-#{random.number(10000)+1000}"


module.exports = random