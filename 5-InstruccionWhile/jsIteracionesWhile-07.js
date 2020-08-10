/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	numeroIngresado=0;
	respuesta=prompt("Quiere ingresar números para operar. Escriba ¨si¨ para seguir o escriba ¨no¨, para salir");

	while (respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Quiére seguir ingresando números?");
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN