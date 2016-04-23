console.log('Inicio el mini api');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');
var port = 9400;

app.listen(port,function(){
	console.log('El puerto: '+ port + ' abierto');
});

app.get('/', function(req,res){
	res.send('Bienvenid@s al mini api de saldos');
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/postPrueba', function(req,res){
	console.log(req.body);
	res.send('Ok :D')
});

var URL = 'postgres://jarikxvs:7upWQQm-o_uHw5nWYnQBJitU3Xwg_nfO@pellefant.db.elephantsql.com:5432/jarikxvs';
var client = new pg.Client(URL);
client.connect(function(err){
	if(err){
		return console.log('Error en la conexión con la bd')
	}
	console.log('Conexión hecha');
	client.end();
});

app.post('/api/insertar', function(req, res){
    var cedula = req.body.cedula;
    var nombre = req.body.nombre;
    var dinero = req.body.dinero;
    
    var queryInsertar = 'INSERT INTO saldos VALUES('
                + cedula + ', '
                + '\'' + nombre + '\', '
                + dinero + ');'
    console.log(queryInsertar);
    
    pg.connect(URL, function(err, client, done){
        if (err){
            res.send('Error :(');
            return console.log('Error de conexión');
        }
        client.query(queryInsertar, function(err, result){
            if(err){
                res.send('Error :(');
                client.end();
                return console.log('Error en el Query');
            }
            console.log('Se insertó');
            res.send('OK');
            client.end();
        });
    });
});
