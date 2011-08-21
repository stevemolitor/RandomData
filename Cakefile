{exec} = require 'child_process'

show_output = (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'build', 'Build JS files', ->
  exec 'coffee --compile --output lib/ src/', (err, stdout, stderr) ->
    show_output err, stdout, stderr
    console.log "Build completed successfully." unless err

task 'spec', 'Run Jasmine specs', ->
  exec 'jasmine-node spec', show_output

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