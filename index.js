
module.exports = function(RED) {
	"use strict";
	
    var luxtronik = require('luxtronik2');


    function ReadLuxtronik2(node,config,msg,callback) {
        var pump = new luxtronik(config.ip, config.port);
        pump.read(false, function (data) {
            callback(data);
        });
    }

	function Luxtronik2QueryNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        this.on ('input', function(msg) {
            ReadLuxtronik2(node, config, msg, function(data){
				msg.payload = data;
                node.send(msg);
            });
        });
	}

    RED.nodes.registerType("luxtronik2",Luxtronik2QueryNode);
}
