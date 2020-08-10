function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	numeroIngresado=0;
	alert("Ingrese 5 números para operar");
	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese número "+contador+" de 5:");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN