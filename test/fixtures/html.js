var fs = require('fs');
module.exports = function html(name) {
  var filename = __dirname + '/' + name + '.html';
  return fs.readFileSync(filename, 'utf-8')
    .split('\n')
    .map(function(l) { return l.trim(); })
    .join('');
}


