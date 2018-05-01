// var greet = require('./greet');

// greet.english();
// greet.spanish();

var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Updated greeting which is used everywhere from now on for greet3.";

var greet3b = require('./greet3');
greet3b.greet(); // this will output the changed greeting

var Greet4 = require('./greet4');
var gtr4 = new Greet4();
gtr4.greet();

var greet5 = require('./greet5').greet;
greet5();

const util = require('util');
