var http=require('http'),
	fs= require('fs');

http.createServer(function(request,response){
	fs.readFile('./formulario.html',function(error,html){
		var html_string=html.toString();
		//Expresión regular que busca ene el html donde haya {x}
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		if(request.url.indexOf("favicon.ico")>0){return;}
console.log("=====================");
//console.log(request);
var hash_parametro={}; 
var parametros=[];
		if(request.url.indexOf('?')>0){
			//  /?nombre=dante
		
		var url_data=request.url.split('?');
		parametros=url_data[1].split('&');
		}
		for (var i = 0; i < parametros.length; i++) {
			var parametro=parametros[i];
			param_data=parametro.split('=');
			hash_parametro[param_data[0]]=param_data[1];
		
		}
		for (var i = 0; i < variables.length; i++) {
				html_string=html_string.replace('{'+variables[i]+'}',hash_parametro[variables[i]]);
		}

		response.writeHead(200,{'Content-Type':'text/html'});
		response.write(html_string);
		response.end();
	});
}).listen(8080);