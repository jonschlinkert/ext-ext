# ext-ext [![NPM version](https://badge.fury.io/js/ext-ext.png)](http://badge.fury.io/js/ext-ext)

> Extension of the node.js path.extname method.

## Install
Install with [npm](npmjs.org):

```bash
npm i ext-ext --save-dev
```

## Usage

```js
var ext = require('ext-ext');
var filepath = 'foo/bar/baz.min.js';

console.log(ext(filepath));
//=> '.min.js'

console.log(ext(filepath, {extDot: 'first'}));
//=> '.min'

console.log(ext(filepath, {extDot: 'last'}));
//=> '.js'
```

See [the tests](./test) for more examples.


## Tests

In the command line, run:

```bash
mocha
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 17, 2014._