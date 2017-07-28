module.exports = function (RED) {
    "use strict";

    var luxtronik = require('luxtronik2');

    function Luxtronik2ReadNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var pump = luxtronik.createConnection(config.host, config.port);

        node.on('input', function (msg) {
            pump.read(function (err, data) {
                if (err) {
                    msg.payload = err;
                    return node.send(msg);
                }
                msg.payload = data;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("luxtronik2 read", Luxtronik2ReadNode);

    function Luxtronik2WriteNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var pump = luxtronik.createConnection(config.host, config.port);

        node.on('input', function (msg) {
            var parameterName = config.parameter || msg.parameter;
            var realValue = msg.payload;
            pump.write(parameterName, realValue, function (err, data) {
                if (err) {
                    msg.payload = err;
                    return node.send(msg);
                }
                msg.payload = data;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("luxtronik2 write", Luxtronik2WriteNode);
}