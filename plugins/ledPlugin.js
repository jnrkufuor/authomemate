var resources = require('./../resources/model')

var interval, actuator;

var model = resources.pi.sensors.pir;
var pluginName_led = resources.pi.actuators.led.name;


exports.start = function (params) {
    localParams = params;
   
    if (localParams.simulate) {
        simulate();
    } else {
        connectHardware();
  }
};
exports.stop = function () {
    if (localParams.simulate) {
        clearInterval(interval);
    } else {
        actuator.unexport();
    }
    console.info('%s plugin stopped!', pluginName_led);
};

    
function switchOnOff(value) {
    if (!localParams.simulate) {
        actuator.write(value === true ? 1 : 0, function () {
//            console.info('Changed value of %s to %s', pluginName_led, value);
        });
    }
};
function connectHardware() {
    var Gpio = require('onoff').Gpio;
    sensor = new Gpio(model.gpio, 'in', 'both');
    sensor.watch(function(err, value){
        if(err) exit(err);
        model.value = !!value;
        switchOnOff(model.value);
    });
    actuator = new Gpio(resources.pi.actuators.led.gpio, 'out');
    console.info('Hardware %s actuator started!', pluginName_led);
};

