# sieve-of-eratosthenes

[Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) algorithm implementation in JavaScript.

[![Sieve of Eratosthemes algorithm](http://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

[source](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

[![NPM](https://nodei.co/npm/sieve-of-eratosthenes.png)](https://nodei.co/npm/sieve-of-eratosthenes)

# Install

```bash
npm install sieve-of-eratosthenes
```

```bash
bower install sieve-of-eratosthenes
```

# Usage

```javascript
var sieveOfErathosthenes = require('sieve-of-eratosthenes');

var primes = sieveOfErathosthenes(100);

console.log(primes);
//
[ 2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97 ]
```

# License

MIT
