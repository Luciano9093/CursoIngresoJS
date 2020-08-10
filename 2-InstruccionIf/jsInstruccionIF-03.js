// Stancanello, Luciano Darío Daniel.
// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
// Alternativa al TP 3 enviado con anterioridad-
function mostrar()
{
	var Edad;

	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	if (Edad>17)
	{
		alert("Usted es mayor de edad");
	}
	
	else
	{
		alert ("Usted es menor de edad");
	}
	
}//FIN DE LA FUNCIÓN