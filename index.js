module.exports = function (RED) {
    "use strict";

    var luxtronik = require('luxtronik2');

    function Luxtronik2ReadNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var pump = new luxtronik(config.ip, config.port);

        node.on('input', function (msg) {
            pump.read(function (data) {
                msg.payload = data;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("luxtronik2 read", Luxtronik2ReadNode);

    function Luxtronik2WriteNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var pump = new luxtronik(config.ip, config.port);

        node.on('input', function (msg) {
            var parameterName = config.parameter;
            if (parameterName === 'msg_topic') {
                parameterName = msg.topic;
            }
            var realValue = msg.payload;
            pump.write(parameterName, realValue, function (data) {
                msg.payload = data.msg;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("luxtronik2 write", Luxtronik2WriteNode);
}