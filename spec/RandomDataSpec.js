var log, random;
random = require('../lib/RandomData');
log = console.log;
describe('dummy-data', function() {
  it('should genrate random numnbers in specified range', function() {
    var i;
    i = random.number(10);
    return expect((0 <= i && i <= 10)).toBe(true);
  });
  it('should generate boolean values', function() {
    return expect([true, false]).toContain(random.trueOrFalse());
  });
  it('should generate random strings of specified lengths', function() {
    expect(random.string(0).length).toEqual(0);
    expect(random.string(1).length).toEqual(1);
    return expect(random.string(2).length).toEqual(2);
  });
  it('should generate random string with default length of 16', function() {
    return expect(random.string().length).toEqual(16);
  });
  it('should generate random female first names', function() {
    return expect(random.DATA.female_first_names).toContain(random.femaleFirstName());
  });
  it('should genrate random male first names', function() {
    return expect(random.DATA.male_first_names).toContain(random.maleFirstName());
  });
  it('should genrate random first names', function() {
    var all_names;
    all_names = random.DATA.female_first_names + random.DATA.male_first_names;
    return expect(all_names).toContain(random.firstName());
  });
  it('should generate random last names', function() {
    return expect(random.DATA.last_names).toContain(random.lastName());
  });
  it('should generate random middle initials', function() {
    return expect(random.middleInitial().length).toBe(1);
  });
  it('should generate random address line 1 values', function() {
    var line1;
    return expect(line1 = random.addressLine1()).toMatch(/^[1-9]\d{1,3} \w+/);
  });
  it('should generate random address line 2 values', function() {
    return expect(random.addressLine2()).toMatch(/^\w+ [1-9]\d{1,2}$/);
  });
  it('should generate random cities', function() {
    return expect(random.DATA.cities).toContain(random.city());
  });
  it('should generate random US state abbreviation', function() {
    return expect(random.usStateAbbreviation()).toMatch(/^[A-W][A-Z]$/);
  });
  it('should generate random US state full name', function() {
    return expect(random.usStateName()).toMatch(/^[A-W].+$/);
  });
  it('should generate random US 5 digit zip codes', function() {
    return expect(random.usZipShort()).toMatch(/^\d{5}$/);
  });
  it('should generate random US 9 digit zip codes', function() {
    return expect(random.usZipLong()).toMatch(/^\d{5}-\d{4}$/);
  });
  it('should generate random countries', function() {
    return expect(random.DATA.countries).toContain(random.country());
  });
  return it('should generate random international phone numbers', function() {
    return expect(random.internationalPhone()).toMatch(/^011-\d/);
  });
});