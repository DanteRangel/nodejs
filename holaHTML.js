var http=require('http'),fs =require('fs');
/*var html=fs.readFileSync('./index.html');//version sincrona


http.createServer(function(request,response){
response.write(html);
response.end();
}).listen(8080);*/

http.createServer(function(request,response){
	fs.readFile('./index.html',function(error,html){
		response.write(html);
		response.end();
	});
}).listen(8080);