// var greet = require('./greet');

// greet.english();
// greet.spanish();

/*var greet = require('./greet1');
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
const name = 'Ashish Karki';
util.log(util.format('Hello, %s', name));*/

const Emitter = require('events'); //require('./emitter');
const eventConfig = require('./config').events;

const emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
  console.log('somewhere someone says helleo');
});

emtr.on(eventConfig.GREET, () => {
  console.log('someone else also says hello');
});

console.log('emitting events now!!!');
emtr.emit(eventConfig.GREET);
