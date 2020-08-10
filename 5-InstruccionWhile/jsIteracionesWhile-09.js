/* Stancanello, Luciano Darío Daniel.

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero=1;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(banderaDelPrimero==1)
		{
			banderaDelPrimero=0;
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("Desea ingresar otro número?");			
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN