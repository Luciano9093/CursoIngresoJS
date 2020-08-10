/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("ingrese su sexo, f para femenino ó m para masculino.");
	while(sexoIngresado!=="f" && sexoIngresado!=="m")
	{
		sexoIngresado=prompt("Información incorrecta, por favor, ingrese f para femenino o m para masculino");
	}
	switch(sexoIngresado)
	{
		case "f":
			sexoIngresado="Femenino";
			break;
		case "m":
			sexoIngresado="Masculino";
			break;
	}


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN