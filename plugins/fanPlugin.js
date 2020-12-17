var resources = require('./../resources/model')

var interval, fan;
var model = resources.pi.sensors.temperature;
var pluginName = resources.pi.actuators.fan.name;

exports.start = function(params){
    localParams = params;
    //observe(model);

    if(localParams.simulate){
        simulate();
    }else{
        connectHardware();
    }
    
};

exports.stop = function(){
    if(localParams.simulate){
        clearInterval(interval);
    }else{
        actuator.unexport();
    }
    console.info('%s plugin stopped!', pluginName);
};
/*
function observe(what){
    Object.observe(what, function(changes){
        console.info('Change detected by plugin for %s...', pluginName);
        switchOnOff(model.value);
    });
};
*/
function switchOnOff(value){
    if(!localParams.simulate){
        actuator.digitalWrite(value);
/*
        actuator.write(value === true ? 1 : 0, function (){
            console.info('Changed value of %s to %s', pluginName, value);
        });
*/
 /*       let dutycycle=0;
	setInterval (()  =>  {
	 actuator.pwmWrite(dutycycle);

	dutycycle += 5;
	if (dutycycle > 255) {
    	   dutyCycle = 0;
        }
      },20);
};
*/
}
}

function connectHardware() {
       var Gpio = require('pigpio').Gpio;
       actuator = new Gpio(resources.pi.actuators.fan.gpio, {mode: Gpio.OUTPUT});
       var sensorDriver = require('node-dht-sensor');
        var sensor = {
            initialize:function(){
                return sensorDriver.initialize(22, model.gpio);
            },
            read:function(){
                var readout = sensorDriver.read();
                model.value = parseFloat(readout.temperature.toFixed(2));
               
                if (model.value> 25.2)
		    switchOnOff(1);
		else
		    switchOnOff(0);
                setTimeout(function(){
                    sensor.read();
                }, localParams.frequency);
            }
        };
        if(sensor.initialize()){
            sensor.read();
        }
            console.info('Hardware %s actuator started!', pluginName);
}


