random = require '../lib/RandomData'
assert = require 'assert'

# Mock out random number function to make tests deterministic:
random.number = (n) -> 1

module.exports =
  'generates boolean values': ->
     assert.equal true, random.trueOrFalse()

  'generates random strings of specified lengths': ->
    assert.equal '', random.string(0)
    assert.equal 'B', random.string(1)
    assert.equal 'BB', random.string(2)
    assert.equal 'BBB', random.string(3)

  'generates random string with default length of 16': ->
    assert.equal 'BBBBBBBBBBBBBBBB', random.string()

   # Person names
  'generates random female first names': ->
    assert.equal 'Ann', random.femaleFirstName()

  'generates random male first names': ->
    assert.equal 'Anthony', random.maleFirstName()

  'generates random first names': ->
    assert.equal 'Ann', random.firstName()

  'generates random last names': ->
    assert.equal 'Anderson', random.lastName()

  'generates random middle initials': ->
    assert.equal 'B', random.middleInitial()

  # Locations
  'generates random address line 1 values': ->
    assert.equal '2 Beech Ave', random.addressLine1()

  'generates random address line 2 values': ->
    assert.equal 'Bsmt 2', random.addressLine2()

  'generates random cities': ->
    assert.equal 'Mount Pleasant', random.city()

  'should generate random US state abbreviation': ->
    assert.equal 'AL', random.usStateAbbreviation()

  'generates random US state full name': ->
    assert.equal 'Alabama', random.usStateName()

  'generates random US 5 digit zip codes': ->
    assert.equal '11111', random.usZipShort()

  'generates random US 9 digit zip codes': ->
    assert.equal '11111-1111', random.usZipLong()

  'generates random countries': ->
    assert.equal 'Albania', random.country()

  'generates random US phone number': ->
    assert.equal '101-101-1001', random.usPhone()

  'generates random international phone numbers': ->
    assert.equal '011-2-11-1001', random.internationalPhone()
