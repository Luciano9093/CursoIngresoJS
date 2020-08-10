/* Stancanello, Luciano Darío Daniel.

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";
	
	while (respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado<0)
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;	
		}
		else
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		respuesta=prompt("Quiére seguir ingresando números?");
	}

	if(multiplicacionNegativos==1)
	{
		multiplicacionNegativos="No se han ingresado números negativos que multiplicar."
	}
	else if(sumaPositivos==0)
		{
			sumaPositivos="No sa han ingresado números positivos que sumar."
		}

	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

	
}//FIN DE LA FUNCIÓN