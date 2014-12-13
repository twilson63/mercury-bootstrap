var test = require('tap').test;

var h = require('hyperscript');
var bs = require('../')(h);
var html = require(__dirname + '/fixtures/html');

test('bs#pageheader title Beep Boop', function(t) {
  t.equals(
    bs.pageHeader('Beep Boop').outerHTML,
    html('pageheader1'),
    'bs#pageheader should generate Bootstrap 3.2 PageHeader html'
  );
  t.end();
});

test('bs#pageHeader title Beep subTitle Boop', function(t) {
  t.equals(
    bs.pageHeader('Beep', 'Boop').outerHTML,
    html('pageheader2'),
    'bs#pageHeader should generate BS 3.2 PageHeader with subtitle'
  );
  t.end();
})


