function parse(request){
var hash_parametro={},parametros=[];
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
	return hash_parametro;
}

module.exports.parse=parse;