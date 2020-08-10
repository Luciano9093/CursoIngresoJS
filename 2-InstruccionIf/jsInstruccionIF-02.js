// Stancanello, Luciano Darío Daniel.
// Al ingresar una edad debemos informar solo si la persona es mayor de edad.

function mostrar()
{
	var Edad;

	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	if(Edad>17) 
	{
		alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN