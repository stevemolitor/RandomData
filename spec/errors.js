var fn1, fn2, fn3, fn4, handler, put;
var __slice = Array.prototype.slice;
put = console.log;
handler = function() {
  var callback, fn, fns, res, _i;
  fns = 3 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 2) : (_i = 0, []), callback = arguments[_i++], res = arguments[_i++];
  if (fns.length === 0) {
    return callback(null, res);
  } else {
    fn = fns.shift();
    return fn(function(err, res) {
      if (err) {
        return callback(err);
      }
    });
  }
};
fn1 = function(callback) {
  put('fn1 called');
  return callback(null, 1);
};
fn2 = function(callback) {
  put('fn2 called');
  return callback(null, 2);
};
fn3 = function(callback) {
  put('fn3 called');
  return callback('error');
};
fn4 = function(callback) {
  put('fn4 called');
  return callback(null, 4);
};
handler(fn1, fn2, fn3, fn4, function(err, res) {
  if (!err) {
    return put("result is " + res);
  }
});
handler(fn1, fn2, fn4, function(err, res) {
  if (!err) {
    return put("result is " + res);
  }
});