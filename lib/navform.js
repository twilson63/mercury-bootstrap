module.exports = function(h) {
  return function(role, attrs, content) {
    if (!attr) attr = {};
    attrs.role = role;
    return h('form.navbar-form', attrs, content);
  };
};
