var test = require('tape');
var sieveOfErathosthenes = require('../sieve-of-eratosthenes');

test('sieveOfErathosthenes', function (t) {
  t.plan(26);

  var sievePrimes = sieveOfErathosthenes(100);

  var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  t.equal(sievePrimes.length, primes.length);

  for (var i = 0; i < primes.length; i++) {
    t.equal(sievePrimes[i], primes[i]);
  }
});
