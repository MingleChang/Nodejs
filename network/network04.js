var http = require('http');

// var options = {
// 	hostname:'www.baidu.com',
// 	port:80,
// 	path:'/',
// };

// var request = http.request(options, function(response){
// 	var body = [];

//     console.log(response.statusCode);
//     console.log(response.headers);

//     response.on('data', function (chunk) {
//         body.push(chunk);
//     });

//     response.on('end', function () {
//         body = Buffer.concat(body);
//         console.log(body.toString());
//     });
// });

// request.write('Hello World');
// request.end();


http.get('http://www.baidu.com',function(response){
	var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});