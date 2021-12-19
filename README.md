## node-red-contrib-luxtronik2
[![npm version](https://badge.fury.io/js/node-red-contrib-luxtronik2.svg)](https://badge.fury.io/js/node-red-contrib-luxtronik2)
[![licence](https://img.shields.io/npm/l/node-red-contrib-luxtronik2.svg)](https://www.npmjs.com/package/node-red-contrib-luxtronik2)

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
[{"id":"37b48b5f.acd154","type":"luxtronik2 read","z":"7971f5eb.adf7ec","name":"","host":"192.168.178.22","port":"8888","x":380,"y":1020,"wires":[["4d147b0b.6b2374"]]},{"id":"fffc8fb2.caed7","type":"inject","z":"7971f5eb.adf7ec","name":"read","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":190,"y":1020,"wires":[["37b48b5f.acd154"]]},{"id":"4d147b0b.6b2374","type":"debug","z":"7971f5eb.adf7ec","name":"","active":true,"console":"false","complete":"false","x":870,"y":1020,"wires":[]},{"id":"7f67bb9b.9ec4c4","type":"luxtronik2 write","z":"7971f5eb.adf7ec","name":"","host":"192.168.178.22","port":"8888","parameter":"heating_operation_mode","x":380,"y":1080,"wires":[["4d147b0b.6b2374"]]},{"id":"7efd4e99.9e31","type":"inject","z":"7971f5eb.adf7ec","name":"set off","topic":"","payload":"4","payloadType":"num","repeat":"","crontab":"","once":false,"x":190,"y":1080,"wires":[["7f67bb9b.9ec4c4"]]},{"id":"adc7e959.0c7128","type":"inject","z":"7971f5eb.adf7ec","name":"set auto","topic":"","payload":"0","payloadType":"num","repeat":"","crontab":"","once":false,"x":190,"y":1120,"wires":[["7f67bb9b.9ec4c4"]]},{"id":"193f2ac6.8a91a5","type":"luxtronik2 write","z":"7971f5eb.adf7ec","name":"","host":"192.168.178.22","port":"8888","parameter":"","x":680,"y":1180,"wires":[["4d147b0b.6b2374"]]},{"id":"b27fb524.386c58","type":"inject","z":"7971f5eb.adf7ec","name":"","topic":"","payload":"2","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":1180,"wires":[["e25471f2.5c0e4"]]},{"id":"a934f805.3f2fd8","type":"inject","z":"7971f5eb.adf7ec","name":"","topic":"","payload":"3","payloadType":"num","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":1220,"wires":[["e25471f2.5c0e4"]]},{"id":"e25471f2.5c0e4","type":"change","z":"7971f5eb.adf7ec","name":"hotwater_temperature_hysteresis","rules":[{"t":"set","p":"parameter","pt":"msg","to":"hotwater_temperature_hysteresis","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":440,"y":1180,"wires":[["193f2ac6.8a91a5"]]}]
```
