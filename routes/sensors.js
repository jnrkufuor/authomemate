var express = require('express'),
    router = express.Router(),
    resources = require('./../resources/model')
    router.route('/').get(function(re, res, next){
        res.send(resources.pi.sensors);
    });

    router.route('/pir').get(function(re, res, next){
        res.send(resources.pi.sensors.pir);
    });

    router.route('/temperature').get(function(re, res, next){
        res.send(resources.pi.sensors.temperature);
    });

    module.exports = router;