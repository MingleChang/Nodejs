var net = require('net');

var HOST = '127.0.0.1';
var PORT = 8000;

var client = new net.Socket();
client.connect(PORT, HOST, function(){
	console.log('Connect To: ' + HOST + ':' + PORT);
	client.write('Hello World!');
});

client.on('data', function(data){

});

client.on('close', function(){

});