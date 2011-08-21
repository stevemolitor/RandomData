## Description
# RandomData is a node.js module that generates random test data for
# your application.  It is a partial port of the ruby
# [random-data](http://random-data.rubyforge.org/) gem.  It is written
# in coffescript but can be used from JavaScript as well (since
# coffescript generates Javascript).

## Installation
#     npm install random-data

## Example
#
#     random = require 'random-data'
#
#     randomUser =
#       login: random.string 10
#       password: random.string 10
#       first_name: random.firstName()
#       middle_initial: random.middleInitial()
#       last_name: random.lastName()
#       address_line_1: random.addressLine1()
#       address_line_2: random.addressLine2()
#       city: random.city()
#       state: random.usStateName()
#       zip: random.usZipLong()
#       home_phone: random.usPhone()
#       cell_phone: random.usPhone()
#
#     console.log randomUser

# Output:

#     { login: 'Dq,,9Qaskg',
#       password: ',7,3vHqF,,',
#       first_name: 'Michael',
#       middle_initial: 'X',
#       last_name: 'Taylor',
#       address_line_1: '1978 Larch Pkwy',
#       address_line_2: 'Bldg 982',
#       city: 'Bela',
#       state: 'Illinois',
#       zip: '12345-1234',
#       home_phone: '209-611-9742',
#       cell_phone: '714-181-10467' }


## Source Code

#### Housekeeping

# Object that will hold our exports.
random = {}

# Import data (list of names, cities, etc).
data = require './Data'


#### Functions

##### General random generators

# Generates a random number between 0...n, exclusive.  For example
# `random.number(3)` will return `0`, `1` or `2`.
random.number = (n) -> Math.floor(Math.random() * n)

# Picks a random element from an array.
random.element = (array) ->
  array[random.number array.length]

# Randomly returns `true` or `false`.
random.trueOrFalse = ->
  random.number(2) is 1 ? true : false


##### Strings

# Generates a random alphanumeric string of given length. Default length is 16.
random.string = (length = 16) ->
  (data.all_chars[random.number data.all_chars.length] for i in [0...length]).join('')

# Generates a random string of digits of given length.
random.stringOfNumbers = (n) ->
  (i for i in [1..n]).join("") # TODO: use util.format in node.js 0.5.x


##### Names

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


##### Locations

# Generates random first address line.
random.addressLine1 = ->
  "#{random.number(4000) + 1} #{random.element data.street_names} #{random.element data.street_types}"

# Generates random second address line.
random.addressLine2 = ->
  "#{random.element data.line_2_types} #{random.number(999) + 1}"

# Picks a random city, for example `'St. Louis'`.
random.city = ->
  random.element data.cities

# Picks a random 2 character US state abbreviation, for example `'MO'`.
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

##### Phone Numbers

# Generates a random US phone number.  For example `'628-611-6473'`.
random.usPhone = ->
  "#{random.number(900) + 100}-#{random.number(900)+100}-#{random.number(10000)+1000}"

# Generates a random international phone number, for example `'011-54-16-10169'`.
random.internationalPhone = ->
  "011-#{random.number(100) + 1}-#{random.number(100)+10}-#{random.number(10000)+1000}"

#### Exports
module.exports = random