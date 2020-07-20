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
		alert("Usted es menor de edad");
	}
}//FIN DE LA FUNCIÓN