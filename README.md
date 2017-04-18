## node-red-contrib-luxtronik2
[![npm version](https://badge.fury.io/js/node-red-contrib-luxtronik2.svg)](https://badge.fury.io/js/node-red-contrib-luxtronik2)
[![Dependency Status](https://david-dm.org/coolchip/node-red-contrib-luxtronik2.svg)](https://david-dm.org/coolchip/node-red-contrib-luxtronik2)
[![licence](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/node-red-contrib-luxtronik2)

#### Node-RED Node, that reads heat pumps based on the Luxtronik 2.0 contol unit. Supports for example Alpha Innotec or Siemens Novelan (WRP NET).

This work depends on the luxtronik2 Module ([luxtronik2@github](https://github.com/coolchip/luxtronik2) and [luxtronik2@npm](https://www.npmjs.com/package/luxtronik2)).

### Install
Just run
```
    npm install node-red-contrib-luxtronik2
```

### How to use
Connect your unit via lan and configure the ip parameters at your unit. The port number of your unit is 8888 by default. Place the new Luxtronik2 node at any flow and start playing.
Every incoming message to the Luxtronik2 node, it will send out a message with all readable values from the pump.

### Example
```text
[{"id":"55761f32.81b66","type":"luxtronik2","z":"58f83f17.8d781","name":"","ip":"192.168.0.20","port":"8888","x":460,"y":400,"wires":[["294e49ea.47ce96"]]},{"id":"2be68b81.81e9a4","type":"inject","z":"58f83f17.8d781","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":260,"y":400,"wires":[["55761f32.81b66"]]},{"id":"294e49ea.47ce96","type":"debug","z":"58f83f17.8d781","name":"","active":true,"console":"false","complete":"false","x":670,"y":400,"wires":[]}]
```
