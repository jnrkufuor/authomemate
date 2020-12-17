var express = require('express'), 
    router = express.Router()
    resources = require('./../resources/model');
    router.route('/').get(function(re, res, next){
        res.send(resources.pi.actuators);
    });

    router.route('led').get(function(re, res, next){
        res.send(resources.pi.actuators.led);
    });

    router.route('fan').get(function(re, res, next){
        res.send(resources.pi.actuators.fan);
    });

    module.exports = router;