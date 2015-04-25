(function(root) {
  'use strict';

  function sieveOfErathosthenes(max) {
    var flags = [];
    var primes = [];
    var prime = 2;

    var n = max;
    while(n--) {
      flags[max-n] = true;
    }

    for (prime = 2; prime < Math.sqrt(max); prime++) {
      if (flags[prime]) {
        for (var j = prime + prime; j < max; j += prime) {
          flags[j] = false;
        }
      }
    }

    for (var i = 2; i < max; i++) {
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
