/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	
	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);

	suma=numero1+numero2;
	
	alert("La suma de los números ingresados es: "+suma);
}

