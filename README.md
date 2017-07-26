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
[{"id":"557ed408.043ddc","type":"luxtronik2 read","z":"5f642d71.7d4fd4","name":"","host":"192.168.178.22","port":"8888","x":320,"y":220,"wires":[["df807314.6937d"]]},{"id":"c69d327a.eb75","type":"inject","z":"5f642d71.7d4fd4","name":"read","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":130,"y":220,"wires":[["557ed408.043ddc"]]},{"id":"df807314.6937d","type":"debug","z":"5f642d71.7d4fd4","name":"","active":true,"console":"false","complete":"false","x":510,"y":220,"wires":[]},{"id":"990ac625.9c7f48","type":"luxtronik2 write","z":"5f642d71.7d4fd4","name":"","host":"192.168.178.22","port":"8888","parameter":"heating_operation_mode","x":320,"y":300,"wires":[["df807314.6937d"]]},{"id":"9a36e192.85a03","type":"inject","z":"5f642d71.7d4fd4","name":"set off","topic":"","payload":"4","payloadType":"num","repeat":"","crontab":"","once":false,"x":130,"y":300,"wires":[["990ac625.9c7f48"]]},{"id":"99ddd98.1c03928","type":"inject","z":"5f642d71.7d4fd4","name":"set auto","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"x":130,"y":340,"wires":[["990ac625.9c7f48"]]}]
```
