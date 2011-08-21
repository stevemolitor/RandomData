# RandomData

Generate random test data for your application.  Thisis a portial port of the ruby [random-data](http://random-data.rubyforge.org/) gem.  It is written in coffescript but can be used from Javascript as well (since coffescript generates Javascript).

## CoffeeScript Example

    random = require 'random-data'
     
    randomUser = 
      login: random.string 10
      password: random.string 10
      first_name: random.firstName()
      middle_initial: random.middleInitial()
      last_name: random.lastName()
      address_line_1: random.addressLine1()
      address_line_2: random.addressLine2()
      city: random.city()
      state: random.usStateName()
      zip: random.usZipLong()
      home_phone: random.usPhone()
      cell_phone: random.usPhone()
     
    console.log randomUser

Output:

    { login: 'Dq,,9Qaskg',
      password: ',7,3vHqF,,',
      first_name: 'Michael',
      middle_initial: 'X',
      last_name: 'Taylor',
      address_line_1: '1978 Larch Pkwy',
      address_line_2: 'Bldg 982',
      city: 'Bela',
      state: 'Illinois',
      zip: '12345-1234',
      home_phone: '209-611-9742',
      cell_phone: '714-181-10467' }

## API Documentation

See [Docco Docs](./docs/RandomData.html) for the [Docco](http://jashkenas.github.com/docco) generated documentation and code.