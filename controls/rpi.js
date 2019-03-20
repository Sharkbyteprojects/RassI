var Gpio = require('onoff').Gpio; 
function service(gpiospinner) { 
    var LED = new Gpio(gpiospinner, 'out');
    if (LED.readSync() === 0) { 
      LED.writeSync(1); 
    } else {
      LED.writeSync(0); 
    }
  }
  module.exports = {
    service,
};