(function(root) {
  'use strict';

  function sieveOfErathosthenes(max) {
    var flags = [];
    var primes = [];
    var prime = 2;
    var i;
    var j;

    var n = max;
    while(n--) {
      flags[max-n] = true;
    }

    for (i = prime; i < Math.sqrt(max); i++) {
      if (flags[i]) {
        for (j = i + i; j < max; j += i) {
          flags[j] = false;
        }
      }
    }

    for (i = prime; i < max; i++) {
      if (flags[i]) {
        primes.push(i);
      }
    }

    return primes;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = sieveOfErathosthenes;
    }
    exports.sieveOfErathosthenes = sieveOfErathosthenes;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return sieveOfErathosthenes;
    });
  } else {
    root.sieveOfErathosthenes = sieveOfErathosthenes;
  }

})(this);
