/*Stancanello, Luciano Darío Daniel.

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada 
estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del
10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento. */


function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var descuento;
	var aumento;
	var precioFinal;
	 
	estacionIngresada=txtIdEstacion.value;
	destinoIngresado=txtIdDestino.value;

	aumentoDescuento=0; //numero negativo significa "descuento", caso contrario "aumento". 
	descuento=0;
	precioFinal=15000;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumentoDescuento=0.2;
					break;
				case "Mar del plata":
					aumentoDescuento=-0.2;
					break;
				default:
					aumentoDescuento=-0.1;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					aumentoDescuento=-0.2;
					break;
				case "Mar del plata":
					aumentoDescuento=0.2;
					break;
				default:
					aumentoDescuento=0.1;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Cordoba":
					aumentoDescuento=0;
					break;
				default:
					aumentoDescuento=0.1
			}
			break;
	}
	precioFinal=precioFinal+(precioFinal*aumentoDescuento);
	alert("El precio final a "+destinoIngresado+" es de: "+precioFinal);				
}//FIN DE LA FUNCIÓN