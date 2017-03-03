var http =require('http'),
	fs = require('fs');

http.createServer(function(request,response){
	fs.readFile('./index.html',function(error,html){
		//response.writeHead(200,{"Content-Type":"text/html"});
		response.writeHead(200,{"Content-Type":"application/json"});
		response.write(JSON.stringify({nombre:"Dante",username:'1234'}));
		response.end();

	});
}).listen(8080);