var http = require('http');
var modulo = require("./modulo");
var _suma = modulo.suma(5,6)

http.createServer(function(requeste, response){
	response.write("Suma: "+ _suma);
	console.log("iniciado el servidor");
	response.end();
}).listen(8181);