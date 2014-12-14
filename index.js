// # mercury-bootstrap
module.exports = function(h) {
  return {
    jumbotron: require('./lib/jumbotron')(h),
    pageHeader: require('./lib/pageheader.js')(h),
    navbar: require('./lib/navbar')(h),
    navitems: require('./lib/navitems')(h)
    
  };
};


