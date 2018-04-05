'use strict'

const Gpio = require('onoff').Gpio;
var button = new Gpio(18, 'on', 'both');

button.watch(function(err, value) {
  if(value == 1){
  console.log("Button has been pressed");
  const proc = require('child_process').execSync;
  var result = proc('~/go/kinnosuke-clocking-cli/kinnosuke-clocking-cli');
  console.log("Done");
  }
});
