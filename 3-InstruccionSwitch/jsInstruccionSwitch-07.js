/* Stancanello, Luciano Darío Daniel.

Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se 
encuentra Norte, Sur, Este u Oeste. */

function mostrar()
{
	var destinoIngresado; 
	destinoIngresado=txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Cataratas":
			alert("Se encuentra al Norte del país");
			break;
		case "Mar del plata":
			alert("Se encuentra al Este del país");
			break;
		default:
			alert("Se encuentra al Sur del país");
			break;
	}
}//FIN DE LA FUNCIÓN