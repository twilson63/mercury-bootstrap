var test = require('tap').test;

var h = require('hyperscript');
var bs = require('../')(h);
var html = require(__dirname + '/fixtures/html');

test('bs#navbar', function(t) {
  t.equals(
    bs.navbar({}, [
      h('.navbar-header', [
        h('a.navbar-brand', { href: '#'}, 'Brand')
      ]),
      bs.navitems([
        h('a', {href: '/'}, 'Home'),
        h('a', {href: '/about'}, 'About')
      ])
    ]).outerHTML,
    html('navbar'),
    'bs#jumbotron should generate Bootstrap 3.2 html'
  );
  t.end();
});


