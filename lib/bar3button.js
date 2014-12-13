var _ = require('underscore');

module.exports = function(h) {
  return function() {
    return h('button.navbar-toggle.collasped', {type: 'button' }, [
      h('span.sr-only','Toggle Button' ),
      h('span.icon-bar'),
      h('span.icon-bar'),
      h('span.icon-bar')
    ]);
  
  };
};
