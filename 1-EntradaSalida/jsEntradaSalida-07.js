/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var suma;

	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);

	suma=numero1+numero2;

	alert("La suma de los números ingresados es: "+suma);	
}

function restar()
{    
	var numero1;
	var numero2;
	var resta;

	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);

	resta=numero1-numero2;

	alert("La resta de los números ingresados es: "+resta);	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var producto;

	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);

	producto=numero1*numero2;

	alert("El producto de los números ingresados es: "+producto);
}

function dividir()
{	
	var numero1;
	var numero2;
	var división;
	
	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);

	división=numero1/numero2;

	alert("La división de los números ingresados es: "+división);
}

