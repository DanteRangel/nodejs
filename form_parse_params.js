var http=require('http'),
	fs= require('fs'),
	parse=require('./param_parse.js'),
	render=require('./render_view.js');

http.createServer(function(request,response){
	fs.readFile('./formulario.html',function(error,html){
		var html_string=html.toString();
		var variables=html_string.match(/[^\{\}]+(?=\})/g);


		if(request.url.indexOf("favicon.ico")>0){return;}

		parametros=parse.parse(request);
		html_modul=render.render(html_string,variables);

		response.writeHead(200,{'Content-Type':'text/html'});
		response.write(html_modul);
		response.end();
	});
}).listen(8080);