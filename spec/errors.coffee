put = console.log

handler = (fns..., callback, res) ->
  if fns.length is 0
    callback null, res
  else
    fn = fns.shift()
    fn (err, res) ->
      if err
        callback err


fn1 = (callback) ->
  put 'fn1 called'
  callback null, 1

fn2 = (callback) ->
  put 'fn2 called'
  callback null, 2

fn3 = (callback) ->
  put 'fn3 called'
  callback 'error'

fn4 = (callback) ->
  put 'fn4 called'
  callback null, 4

handler fn1, fn2, fn3, fn4, (err, res) ->
  put "result is #{res}" unless err

handler fn1, fn2, fn4, (err, res) ->
  put "result is #{res}" unless err
