random = require '../lib/RandomData'

log = console.log

describe 'dummy-data', ->
  # numbers
  it 'should genrate random numnbers in specified range', ->
    i = random.number(10)
    expect(0 <= i <= 10).toBe true

  # booleans
  it 'should generate boolean values', ->
    expect([true, false]).toContain(random.trueOrFalse())

  # text
  it 'should generate random strings of specified lengths', ->
    expect(random.string(0).length).toEqual 0
    expect(random.string(1).length).toEqual 1
    expect(random.string(2).length).toEqual 2

  it 'should generate random string with default length of 16', ->
    expect(random.string().length).toEqual 16

  # Person names
  it 'should generate random female first names', ->
    expect(random.DATA.female_first_names).toContain(random.femaleFirstName())

  it 'should genrate random male first names', ->
    expect(random.DATA.male_first_names).toContain(random.maleFirstName())

  it 'should genrate random first names', ->
    all_names = random.DATA.female_first_names + random.DATA.male_first_names
    expect(all_names).toContain(random.firstName())

  it 'should generate random last names', ->
    expect(random.DATA.last_names).toContain(random.lastName())

  it 'should generate random middle initials', ->
    expect(random.middleInitial()).toMatch /^[A-Z]$/

  # Locations
  it 'should generate random address line 1 values', ->
    expect(line1 = random.addressLine1()).toMatch /^[1-9]\d{1,3} \w+/

  it 'should generate random address line 2 values', ->
    expect(random.addressLine2()).toMatch /^\w+ [1-9]\d{1,2}$/

  it 'should generate random cities', ->
    expect(random.DATA.cities).toContain(random.city())

  it 'should generate random US state abbreviation', ->
    expect(random.usStateAbbreviation()).toMatch /^[A-W][A-Z]$/

  it 'should generate random US state full name', ->
    expect(random.usStateName()).toMatch /^[A-W].+$/

  it 'should generate random US 5 digit zip codes', ->
    expect(random.usZipShort()).toMatch /^\d{5}$/

  it 'should generate random US 9 digit zip codes', ->
    expect(random.usZipLong()).toMatch /^\d{5}-\d{4}$/

  it 'should generate random countries', ->
    expect(random.DATA.countries).toContain random.country()

  it 'should generate random international phone numbers', ->
    expect(random.internationalPhone()).toMatch /^011-\d/


