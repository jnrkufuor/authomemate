var httpServer = require('./servers/https'),
    resources = require('./resources/model');
    
var ledPlugin = require('./plugins/ledPlugin'),
    DHTPlugin = require('./plugins/DHTPlugin'),
    pirPlugin = require('./plugins/pirPlugin');
    fanPlugin = require('./plugins/fanPlugin');

    pirPlugin.start({'simulate':false, 'frequency':2000});
    DHTPlugin.start({'simulate':false, 'frequency':3000});
    ledPlugin.start({'simulate':false, 'frequency':3000});
    fanPlugin.start({'simulate':false, 'frequency':3000});

    var server = httpServer.listen(resources.pi.port, function(){
        console.info('The server is starting on port %s,', resources.pi.port);
    })