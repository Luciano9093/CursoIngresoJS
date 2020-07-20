function mostrar()
{
	var Edad;
	
	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	if(Edad>12 && Edad<18)
	{
		alert ("Usted tiene "+Edad+" años, por ende, usted es adolescente");
	}
	
	else if (Edad>17)
	{
		alert("Usted tiene "+Edad+" años, por ende, usted es mayor de edad");
	}
	
	else if (Edad<13)
	{
		alert("Usted tiene "+Edad+" años, por ende, usted es menor de edad");	
	}
	
	else 
	{
		alert("Usted ha ingresado un valor distinto al solicitado, por favor ingrese su edad");
	}	
}//FIN DE LA FUNCIÓN