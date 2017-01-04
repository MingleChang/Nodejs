var net = require('net');
var server = net.createServer();

var clientList = [];

server.on('connection', function(client) {
	client.name = client.remoteAddress + ':' + client.remotePort;

	clientList.push(client);

	client.write('Connected\n');

	client.on('data', function(data){
		broadcast(data, client);
	});

	client.on('end', function(){
		clientList.splice(clientList.indexOf(client), 1);
		console.log(client.name + ' End');
	});

	client.on('close', function(){
		clientList.splice(clientList.indexOf(client), 1);
		console.log(client.name + ' Close');
	});

	client.on('error', function(err){
		console.log(err.message);
	});
});

server.on('error', function(err){
	console.log('Error:' + err.message);
});

server.on('listening', function(){
	console.log('Listening\n');
});

server.on('close', function(){
	console.log('Close\n');
});

function broadcast(message, client) {
	var cleanup = [];
	for (var i = 0; i < clientList.length; i++) {
		if (clientList[i].writable) {
			clientList[i].write(message);
		} else {
			cleanup.push(clientList[i]);
			clientList[i].destroy();
		}
	}
	for (var i = 0; i < cleanup.length; i++) {
		clientList.splice(clientList.indexOf(cleanup[i]), 1);
	};
}

server.listen(8000);

