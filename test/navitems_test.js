var test = require('tap').test;
var html = require('./fixtures/html');
var h = require('hyperscript');
var bs = require('../')(h);

test('bs#navitems', function(t) {
  t.equals(
    bs.navitems([
      h('a', { href: '#'}, 'Home'),
      h('a', { href: '#'}, 'About')
    ]).outerHTML,
    html('navitems'),
    'should equal fixture'
  );
  t.end();
});
