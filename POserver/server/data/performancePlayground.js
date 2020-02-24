const { performance } = require('perf_hooks');

doSomething = (num) => {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(i);
  }
};

var t0 = performance.now();

doSomething(1111112); // <---- The function you're measuring time for

var t1 = performance.now();

console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
