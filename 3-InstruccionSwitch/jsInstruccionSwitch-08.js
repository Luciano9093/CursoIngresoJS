/* Stancanello, Luciano Darío Daniel.

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino. */


function mostrar()
{
	var destinoIngresado; 
	destinoIngresado=txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Cataratas":
			alert("Hace calor.");
			break;
		default:
			alert("Hace frio.");
			break; 
			/*tomando en cuenta la estación actual (invierno),
			en Mar del Plata hace frio. */ 
	}
}//FIN DE LA FUNCIÓN