/* Stancanello, Luciano Darío Daniel.
Al ingresar una edad solo debemos informar si la persona NO es adolescente. 
*/ 

//Versión 2.0

function mostrar()
{
	var Edad;

	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	if (Edad<13 || Edad>17)
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN


/*
//Version 1.0

function mostrar()
{
	var Edad;

	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	if (!(Edad>12 && Edad<18))   
	{
		alert ("No es adolescente");
	}

}//FIN DE LA FUNCIÓN
*/