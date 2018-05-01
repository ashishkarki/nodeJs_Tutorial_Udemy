function Greeter() {
  this.greeting = 'Hellow World!!';
  this.greet = function() {
    console.log(this.greeting);
  };
}

module.exports = Greeter;