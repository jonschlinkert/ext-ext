/*!
 * map-paths <https://github.com/jonschlinkert/map-paths>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */
'use strict';


var path = require('path');
var parsePath = require('parse-filepath');
var _ = require('lodash');


module.exports = function extext(filepath, options) {
  options = options || {};
  var result = '';

  var ext = parsePath(filepath).extname;
  var segments = parsePath(filepath).extSegments;

  if ('ext' in options && (!options.ext || options.ext === 'none')) {
    result = '';
  } else if (options.ext) {
    result = options.ext;
  } else if (options.extDot) {
    if (options.extDot === 'first') {
      result = _.first(segments) || ext;
    }
    if (options.extDot === 'last') {
      result = _.last(segments) || ext;
    }
  } else {
    result = ext;
  }

  return result;
};
