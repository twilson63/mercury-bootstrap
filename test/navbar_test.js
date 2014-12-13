var test = require('tap').test;

var h = require('hyperscript');
var bs = require('../')(h);
var html = require(__dirname + '/fixtures/html');

test('bs#navbar', function(t) {
  t.equals(
    bs.navbar({}, [
      h('.navbar-header', [
        h('a.navbar-brand', { href: '#'}, 'Brand')
      ])
    ]).outerHTML,
    html('navbar'),
    'bs#jumbotron should generate Bootstrap 3.2 html'
  );
  t.end();
});


