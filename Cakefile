{exec} = require 'child_process'

show_output = (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'build', 'Build JS files', ->
  exec 'coffee --compile --output lib/ src/', show_output

task 'spec', 'Run Jasmine specs', ->
  exec 'jasmine-node spec', show_output

task 'test', 'Run Jasmine specs', ->
  exec 'expresso test', show_output

task 'clean', 'Removes .js files created from build task', ->
  exec 'rm -rf lib', show_output

task 'doc', 'rebuild the Docco documentation', ->
  exec([
    'docco src/RandomData.coffee'
    'mv docs/RandomData.html index.html'
    'mv docs/docco.css .'
    'rm -r docs'
  ].join(' && '), (err) ->
    throw err if err
    console.log "Built docco docs successfully" unless err
  )