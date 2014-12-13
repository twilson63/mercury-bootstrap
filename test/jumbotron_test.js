var test = require('tap').test;

var h = require('hyperscript');
var bs = require('../')(h);
var html = require(__dirname + '/fixtures/html');

test('bs#jumbotron title Beep Boop', function(t) {
  t.equals(
    bs.jumbotron('Beep Boop').outerHTML,
    html('jumbotron_beepboop'),
    'bs#jumbotron should generate Bootstrap 3.2 html'
  );
  t.end();
});

test('bs#jumbotron full-width title Hello World', function(t) {
  t.equals(
    bs.jumbotron('Hello World', true).outerHTML,
    html('jumbotron_helloworld'),
    'bs#jumbotron should generate Bootstrap 3.2 html'
  );
  t.end();
});

test('bs#jumbotron title Foo Bar and description Beep Boop', function(t) {
  t.equals(
    bs.jumbotron('Foo Bar', true, [
      h('p',['Beep Boop'])
    ]).outerHTML,
    html('jumbotron_foobar'),
    'bs#jumbotron should generate Bootstrap 3.2 html'
  );
  t.end();
});
