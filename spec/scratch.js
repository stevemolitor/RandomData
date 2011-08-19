var f, log;
log = console.log;
f = function(a) {
  if (a.length === 0) {
    return log("done");
  } else {
    log("length is " + a.length);
    a.shift();
    return f(a);
  }
};
f([1, 2, 3]);