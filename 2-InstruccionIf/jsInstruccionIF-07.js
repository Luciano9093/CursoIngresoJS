/* Stancanello, Luciano Darío Daniel.
 Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 
 'Es muy pequeño para NO ser soltero.' */

// Versión 2.0

 function mostrar()
{
	var Edad;
	var EstadoCivil;

	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	EstadoCivil=estadoCivil.value;

	if (Edad<18 && EstadoCivil!=="Soltero")
	{	
		alert("Es muy pequeño para NO ser soltero");	
	}
}//FIN DE LA FUNCIÓN

/* 
//Versión 1.0

function mostrar()
{
	var Edad;
	var EstadoCivil;

	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	EstadoCivil=estadoCivil.value;

	if (Edad<18)
	{
		if (EstadoCivil!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}
}//FIN DE LA FUNCIÓN
*/