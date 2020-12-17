var resources = require('./../resources/model')

var interval, sensor;
var model = resources.pi.sensors.temperature;
var pluginName = resources.pi.sensors.temperature.name;
var localParams = {'simulate':false, 'frequency':5000};
exports.start = function(params){
    localParams = params;
    if(params.simulate){
         simulate();
     }else{
         connectHardware();
     }
};

    exports.stop = function(){
        if(params.simulate){
            clearInterval(interval);
        }else{
            sensor.unexport();
        }
        console.info('%s plugin stopped', pluginName);
    };

    function connectHardware(){
        var sensorDriver = require('node-dht-sensor');
        var sensor = {
            initialize:function(){
                return sensorDriver.initialize(22, model.gpio);
            },
            read:function(){
                var readout = sensorDriver.read();
                model.value = parseFloat(readout.temperature.toFixed(2));
                showValue();
                setTimeout(function(){
                    sensor.read();
                }, localParams.frequency);
            }
        };
        if(sensor.initialize()){
            console.info('Hardware %s is started', pluginName);
            sensor.read();
        }else{
            console.warn('Failed to initialize');
        }
    };

    function simulate(){
        interval = setInterval(function(){
            showValue();
        }, localParams.frequency);

    };

    function showValue(){
        console.info('Temperature:%s C',
    model.value);
    };
