'use strict'

const Gpio = require('onoff').Gpio;
var button = new Gpio(18, 'on', 'both');

button.watch(function(err, value) {
  console.log("Button has been pressed");
});
