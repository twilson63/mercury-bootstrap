var _ = require('underscore');
// Bootstrap PageHeader
//
// Example:
//
// bs.pageHeader('Page1', 'SubTitle', [
//   h('p', ['paragraph 1']),
//   h('p', ['paragraph 2'])
// ]);
//
module.exports = function(h) {
  return function(title, subtitle, content) {
    if (!content && _.isArray(subtitle)) { content = subtitle; subtitle = null; }
    var body = [
      h('h1', [
        title + (subtitle ? ' ' : ''),
        subtitle ? h('small', subtitle) : null
      ])
    ];
    if (content) body = body.concat(content);
    return h('.page-header', body);
  };
};
