/* Stancanello, Luciano Darío Daniel.

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes */


function mostrar()
{
	var Edad;
	var EstadoCivil;

	Edad=txtIdEdad.value;
	Edad=parseInt(Edad);

	EstadoCivil=estadoCivil.value;

if (Edad>17)
{
	if (Edad>60)
	{
		alert("Eres persona de riesgo.");
		Edad="AdultoMayor";	
	}
	alert("Se responsable.");
	Edad="MayorDeEdad";	
}
else
{
	if (Edad<18)
	{
		if (Edad<13)
		{
			alert("Hagan la tarea.");
			Edad="MenorDeEdad"
		}
		alert("Respeta a tus mayores.");
		Edad="Niño/a"
	}
} 

	
	switch (Edad)
	{
		case "AdultoMayor":
		case "MayorDeEdad":
			switch (EstadoCivil)
			{
				case "Soltero":
					alert("A vivir la vida.");
					break;
				case "Divorciado":
					alert("A intentarlo nuevamente.");
					break;
				default:
					alert("A disfrutar la pareja.");
					break;
			}
			break
		case "MenorDeEdad":
		case "Niño/a":
			switch (EstadoCivil)
			{
				case "Casado":
				case "Divorciado":
					alert("sos muy joven para no ser soltero");
					break;
			}
			break;
	}
}//FIN DE LA FUNCIÓN
