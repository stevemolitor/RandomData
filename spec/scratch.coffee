log = console.log

f = (a) ->
  if a.length is 0
    log "done"
  else
    log "length is #{a.length}"
    a.shift()
    f a

f [1, 2, 3]
