var test = require('tap').test;
var h = require('hyperscript');
var bs = require('../')(h);

test('bs#navform', function(t) {
  t.equals(
    bs.navform({ className: 'navform-left' }, [
      bs.textField({ placeholder: 'search'}),
      bs.submitButton()
    ]),
    html('navform'),
    'should be successful'
  );
  t.end();
});
