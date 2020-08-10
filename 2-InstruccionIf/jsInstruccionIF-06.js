/*Stancanello, Luciano Dario Daniel
 Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años). */

//Version 2.0

function mostrar()
{
	var Edad;
	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);
		
	if (Edad>17)
	{
		alert ("Es mayor de edad");
	}
		
	else 
	{
		if (Edad>12 && Edad<18)
		{	 
		alert("Es adolescente");
		}
		else  
		{
		alert("Es un niño/a")	
		}
	}
}//FIN DE LA FUNCIÓN 


/*

// Version 1.0

function mostrar()
{
	var Edad;
	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	if (Edad>17)
	{
		alert ("Es mayor de edad");
	}

	else 
	{
		if (Edad<18)
		{
			if (Edad>12)
			{ 
			alert("Es adolescente");
			}
		}
		else 
		{
			alert("Es un niño/a")	
		}
	}

}//FIN DE LA FUNCIÓN 
*/

