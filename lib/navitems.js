module.exports = function(h) {
  return function(items, active) {
    if (!active) active = 0;
    return h('.collapse.navbar-collapse', [
      h('ul.nav.navbar-nav', items.map(function(a, i) {
        var li = active === i ? 'li.active' : 'li';
        return h(li, [a]);
      }))
    ]);
  };
};
