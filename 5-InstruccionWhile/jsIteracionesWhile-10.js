/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Prom'edios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var contador;
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	contador=0;
	sumaPositivos=0;
	sumaNegativos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	promedioNegativos=0;
	promedioPositivos=0;
	diferencia=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese número.");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			cantidadNegativos++;
			sumaNegativos=sumaNegativos+numeroIngresado;
		}
		else 
		{
			if (numeroIngresado>0)
			{ 
			cantidadPositivos++;
			sumaPositivos=sumaPositivos+numeroIngresado;
			}
			else
			{
				cantidadCeros++;
			}
		}
		if (numeroIngresado%2==0 && numeroIngresado!==0)
		{
			cantidadPares++;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while
	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativos/cantidadNegativos;
	diferencia=sumaPositivos-sumaNegativos;

	document.write("La suma de números negativos es: "+sumaNegativos+"<br>");
	document.write("La suma de números positivos es: "+sumaPositivos+"<br>");
	document.write("La cantidad de números positivos es: "+cantidadPositivos+"<br>");
	document.write("La cantidad de números negativos es: "+cantidadNegativos+"<br>");
	document.write("La cantidad de ceros es: "+cantidadCeros+"<br>");
	document.write("La cantidad de números pares es: "+cantidadPares+"<br>");
	document.write("El promedio de números positivos es: "+promedioPositivos+"<br>");
	document.write("El promedio de números negativos es: "+promedioNegativos+"<br>");
	document.write("La diferencia entre números positivos y negativos es: "+diferencia+"<br>");
}//FIN DE LA FUNCIÓN
