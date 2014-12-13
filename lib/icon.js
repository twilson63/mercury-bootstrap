var _ = require('underscore');

module.exports = function(h) {
  return function(name, attr) {
    if (!_.isDefined(attr)) attr = {};
    attr['aria-hidden'] = 'true';
    return h('span.glyphicon.glyphicon-' + name, attr);
  };
};
