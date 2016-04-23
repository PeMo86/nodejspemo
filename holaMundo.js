//Declara variables

var nombre = 'Carolina Isaza';
edad = 21;

// Condicionales 
/*if(edad  > 18 ){
	alert("Es mayor de edad");
}else{
	alert ("Es menor de edad");
}

var num = prompt('Digite un número de 1-2');

switch(num){
	case '1':
		console.log('1');
		break;
	case '2': 
		console.log('2');
		break;
	default: 
		console.log('Número no válido');
		break;
}*/

var numero = prompt('Digite un número factorial');


var factorial = function(numero){
	factorial = 1;
	for (numero; numero > 0; numero --){
		factorial *= numero;
	}
	return factorial
}
alert(factorial(numero));