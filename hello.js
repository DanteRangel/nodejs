var http=require('http');
var manejador=function(request,response){
	console.log("hola mundo");
	response.end("Hola MUndo");
};
var server=http.createServer(manejador);

server.listen(8080);



