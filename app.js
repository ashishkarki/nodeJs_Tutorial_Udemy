// var greet = require('./greet');

// greet.english();
// greet.spanish();

var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
