/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada!=="utn750")
	{
		alert("La clave ingresada es incorrecta, por favor vuelva a intentar");
		claveIngresada=prompt("ingrese el número clave.");
	}
	alert("La clave ingresada fue correcta, puede ingresar");	
}//FIN DE LA FUNCIÓN
