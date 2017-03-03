function render(html,variables){
	html_string=html;
	for (var i = 0; i < variables.length; i++) {
				html_string=html_string.replace('{'+variables[i]+'}',parametros[variables[i]]);
		}
		return html_string.replace(/\+/gi,' ');
}

module.exports.render=render;


