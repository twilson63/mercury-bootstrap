// Bootstrap Jumbotron
//
// full-width
module.exports = function(h) {
  return function(title, fw, content) {
    var body = [];
    body.push(h('h1', title));
    if (content) body = body.concat(content);
    return h('.jumbotron', 
      fw ? [ h('.container', body) ] : body
    );
  }
}
