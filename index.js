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
            var parameterValue = msg.payload;
            var rawParameter = msg.raw_parameter;

            if(rawParameter !== undefined) {
                pump.writeRaw(rawParameter, parameterValue, function (err, data) {
                    if (err) {
                        node.error(err, msg);
                    } else {
                        msg.payload = data;
                        node.send(msg);
                    }
                });
            } else {
                pump.write(parameterName, parameterValue, function (err, data) {
                        if (err) {
                            msg.payload = err;
                            return node.send(msg);
                        }
                        msg.payload = data;
                        node.send(msg);
                    });
            }
        });
    }
    RED.nodes.registerType("luxtronik2 write", Luxtronik2WriteNode);
}
