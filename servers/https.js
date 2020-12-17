var express = require('express'),
    actuatorRoutes = require('./../routes/actuators'),
    sensorRoutes = require('./../routes/sensors'),
    resources = require('./../resources/model'),
    cors = require('cors');

var app = express();
app.use(cors());
app.use('/pi/actuators', actuatorRoutes);
app.use('/pi/sensors', sensorRoutes);
app.get('/', function(re, res){
    res.send('WoT Home Page')
});

app.get('/pi', function(re, res){
    res.send('WoT with PIR, DHT22, LED and a Fan')
});

module.exports = app;