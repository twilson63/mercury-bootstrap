var _ = require('underscore');

module.exports = function(h) {
  return function(context, attr, content) {
    if (_.isObject(context)) {
      content = attr;
      attr = context;
      context = 'default';
    }
    attr.role = 'navigation';
    return h('nav.navbar.navbar-' + context, attr, [
      h('.container', content)
    ]);
  };
};
