var http=require('http'),fs=require('fs');
http.createServer(function(request,response){
	fs.readFile('./index.html',function(error,html){
		var i=0;
		while(true){
			response.write(i+"");
			i++;
		}
	});
}).listen(8080);