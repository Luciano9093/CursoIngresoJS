/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	var divisor;
	var dividendo;
	var resto;

	dividendo=txtIdNumeroDividendo.value;
	dividendo=parseInt(dividendo);
	
	divisor=txtIdNumeroDivisor.value;
	divisor=parseInt(divisor);

	resto=dividendo%divisor;

	
	alert("El resto entre el número: "+dividendo+" dividido el número: "+divisor+" es igual a= "+resto);
}
