module.exports = function(h) {
  return function(name, value) {
    return h('input.form-control', {
      type: 'text', 
      name: name, 
      value: value
    });
  };
};
