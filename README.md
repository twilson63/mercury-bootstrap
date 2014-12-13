# Mercury Bootstrap

Simple HyperScript Wrappers to create bootstrap components

* Jumbotron
* Navbar
* Alerts
* ListGroups

etc

This module should work with `HyperScript` or `Virtual HyperScript` 
when you initialize the module you need to pass in a reference
to either HyperScript or Virtual HyperScript:

``` js
var h = require('mercury').h;
var bs = require('mercury-bootstrap')(h);

function render(state) {
  return h('div', [
    bs.jumbotron('Hello World');
  ]);
}
```

## Install

## Test

## License

## Contribution

## Thanks




