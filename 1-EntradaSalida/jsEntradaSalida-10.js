/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	//var descuento; variable para otra forma de hacerlo.
	
	importe=txtIdImporte.value;
	importe=parseInt(importe);
	
	//descuento=(importe*25)/100; Otra forma de hacerlo. Funciona 
	
	txtIdResultado.value=importe*(1-0.25);
}
