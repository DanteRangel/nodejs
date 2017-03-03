var http= require('http'),     
	fs= require('fs');

http.createServer(function(request,response){
	fs.readFile('./variables_a_vista.html',function(error,html){
		var html_string=html.toString();
		//Expresión regular que busca ene el html donde haya {x}
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="Dante";
		var otra_variable="otras variables estaran aqui";
		var otra_cosa="a esto no le hagas caso, es otra cosa";
		console.log(variables);
		// variable ['nomnre','otra_cosa',otra_variable]
		for (var i = 0; i < variables.length; i++) {
			//obtener el valor de la variable dependiendo de as concordancias que hayamos tenido en la expresión regular
			var value=eval(variables[i]);
			html_string=html_string.replace("{"+variables[i]+"}",value);
		}
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write(html_string);
		response.end();

	});

}).listen(8080);