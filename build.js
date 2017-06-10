'use strict';

var fs = require('fs');
var glob = require('glob');
var clone = require('gh-clone');
var del = require('delete');

del.sync('vendor');
clone({repo: 'ghosh/uiGradients', dest: 'vendor'}, function(err) {
  if (err) console.log(err);

  glob('vendor/**/*gradient*.json', function(err, files) {
    if (err) {
      console.error(err);
      return;
    }

    if (files.length === 0) {
      throw new Error('gradients json file is missing');
    }

    fs.writeFileSync('gradients.json', fs.readFileSync(files[0]));
    ok('copied gradients.json');
  });
});
