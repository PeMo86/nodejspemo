
var nombre = "Carlos PeMo";
edad = 29;


if(edad > 18) {
	mayorEdad = "Es mayor de edad.";
} else {
	mayorEdad = "Es menor de edad.";
}
alert(nombre + " " + mayorEdad);

num = prompt("Digite un numero entre 1 y 4.");
switch (num) {
case '1': 
	console.log('1');
	break;
case '2':
	console.log('1');
	break;
default:
	console.log("No válido :(")
}

var numero = prompt("Digite un numero para calcular factorial.");
var factorial = function(numero) {
	if(numero < 0) {
		alert("Digite un entero positivo.")
		return;
	} else if(numero - 1 === 0) {
		return 1;
	}
	return numero*factorial(numero - 1);
}
alert(factorial(numero));
