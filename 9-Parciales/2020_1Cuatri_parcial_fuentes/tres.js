/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y 
estado civil("soltero",
 "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombre;
	var nombreMayorTemp;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var cantidadMayorTemp;
	var mayorTemperatura;
	var contadorSolteros;
	var contadorViudos;
	var contadorViudosMayores;
	var acumuladorEdadSolteros;
	var acumuladorEdadViudos;
	var respuesta;
	var banderaDelPrimero;
	//VARIABLES DE INICIO.
	respuesta=true;
	banderaDelPrimero=1;
	cantidadMayorTemp=0;
	contadorSolteros=0;
	contadorViudos=0;
	contadorViudosMayores=0;
	acumuladorEdadSolteros=0;
	acumuladorEdadViudos=0;
	while(respuesta==true)
	{
		nombre=prompt("Ingrese nombre.");
		while(!isNaN(nombre))
		{
			nombre=prompt("Ingreso invalido. Vuelva a ingresar nombre.");
		}
		edad=prompt("Ingrese edad.");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<0)
		{
			edad=prompt("Ingreso invalido. Vuelva a ingresar edad.");
			edad=parseInt(edad);			
		}
		sexo=prompt("Ingrese sexo. F para femenino o M para masculino.")
		sexo=sexo.toLowerCase();
		while(sexo!=="f" && sexo!=="m")
		{
			sexo=prompt("Ingreso invalido. Vuelva a ingresar sexo de la persona.");
			sexo=sexo.toLowerCase();
		}
		estadoCivil=prompt("Ingrese estado civil de la persona.");
		estadoCivil=estadoCivil.toLowerCase();
		while(estadoCivil!=="soltero" && estadoCivil!=="casado" && estadoCivil!=="divorciado" && estadoCivil!=="viudo")
		{
			estadoCivil=prompt("Ingreso invalido. Vuelva a ingresar estado civil.");
			estadoCivil=estadoCivil.toLowerCase();			
		}
		temperatura=prompt("Ingrese temperatura corporal de la persona.");
		temperatura=parseFloat(temperatura);
		while(isNaN(temperatura) || temperatura<20 || temperatura>60)
		{
			temperatura=prompt("Ingreso no valid. Vuelva a ingresar temperatura corporal.");
			temperatura=parseFloat(temperatura);				
		}
		//BANDERA DEL PRIMERO PARA CALCULO DE LA PERSONA CON MAS TEMPERATURA.
		if(banderaDelPrimero==1 || mayorTemperatura<temperatura)
		{
			mayorTemperatura=temperatura;
			nombreMayorTemp=nombre;
			banderaDelPrimero=0;
		}
		//PROCESAMIENTO DE VALORES VALIDADOS.
		if(temperatura>38 && edad>60)
		{
			cantidadMayorTemp++; //CANTIDAD DE MAYORES DE 60 CON TEMP. MAYOR A 38°C.
		}
		switch(sexo)
		{
			case "m":
				switch(estadoCivil)
				{
					case "soltero":
						contadorSolteros++;				//CONTADOR Y ACUMULADOR DE EDADES 
						acumuladorEdadSolteros+=edad;	//PARA CALCULAR PROMEDIO (EDAD SOLTEROS) 
						cantidadSoltero+=cantidad;		//Y CANTIDAD DE SOLTEROS O VIUDOS.
						break;
					case "viudos":
						contadorViudos++;
						if(edad>18)
						{
							contadorViudosMayores++;	//CANTIDAD DE VIUDOS MAYORES DE EDAD.
						}
						break;
				/*	case "casado":   SE COMENTA EN VIRTUD DE NO REQUERIR SU INFO.
						break;
					case "divorciado":
						break;  */
				}
				break;
			case "f":
				switch(estadoCivil)
				{
					case "viudos":
						if(edad>18)
						{
							contadorViudosMayores++;	//CANTIDAD DE VIUDAS MAYORES DE EDAD.
						}
						break;
				/*	case "soltero":	SE COMENTA EN VIRTUD DE NO REQUERIR SU INFO.
						break;
					case "divorciado":
						break;
					case "casado":
						break;	*/
				}
		}
		respuesta=confirm("Desea ingresar los datos de otra persona?.")
	}
	//RESPUESTA A)
	alert("El nombre de la persona con mas temperatura es "+nombreMayorTemp);
	//RESPUESTA B)
	alert("La cantidad de mayores de edad viudos es de "+contadorViudosMayores+" personas.");
	//RESPUESTA C)
	if(contadorSolteros==0 && contadorViudos==0)
	{
		alert("No ingresaron hombres cuyo estado civil sea solteros o viudos")
	}
	else
	{
		alert("La cantidad de hombres solteros y viudos es de "+(contadorSolteros+contadorViudos));
	}
	//RESPUESTA D)
	alert("La cantidad de personas de la tercera edad que tienen mas de 38°C es de "+cantidadMayorTemp);
	//RESPUESTA E)
	alert("El promedio de edad entre los hombres solteros es de "+(acumuladorEdadSolteros/contadorSolteros));
}//FIN DE CODIGO.

/*
function mostrar()
{
	var nombre;
	var nombreMayorTemperatura;
	var sexo;
	var edad;
	var estadoCivil;
	var cantidadSolteros;
	var cantidadViudos;
	var temperaturaCorporal;
	var MayorTemperaturaCorporal;
	var terceraEdad;
	var viudosMayores;
	var acumuladorEdad;
	var respuesta;

	//VALORES DE VARIABLE DE INCIO.
	respuesta=true;
	terceraEdad=0;
	acumuladorEdad=0;
	cantidadSolteros=0;
	cantidadViudos=0;
	viudosMayores=0;
	MayorTemperaturaCorporal=0;

	while(respuesta==true)
	{
	//VALIDACIÓN DE VALORES DE VARIABLE.
		nombre=prompt("Ingrese nombre.");
		while(!(isNaN(nombre)))
		{
			nombre=prompt("Ingreso invalido. Vuelva a ingresar nombre.");
		}
		edad=prompt("Ingrese edad.");
		edad=parseFloat(edad);
		while(edad<0 || isNaN(edad))
		{
			edad=prompt("Ingrese invalido. Vuelva a ingresar edad.");
			edad=parseFloat(edad);
		}
		sexo=prompt("Ingrese su sexo. F para femenino o M para masculino.");
		while(sexo!=="F" && sexo!=="M")
		{
			sexo=prompt("Ingrese su sexo. F para femenino o M para masculino.");	
		}
		estadoCivil=prompt("Ingrese estado civil. C para casado, S para soltero, D para divorciado o V para viudo");
		while(estadoCivil!=="C" && estadoCivil!=="S" && estadoCivil!=="D" && estadoCivil!=="V")
		{
			estadoCivil=prompt("Ingreso invalido, vuelva a intentar. C para casado, S para soltero, D para divorciado o V para viudo");
		}
		temperaturaCorporal=prompt("Ingrese temperatura corporal en grados celsius.");
		temperaturaCorporal=parseFloat(temperaturaCorporal);
		while(temperaturaCorporal<20 || temperaturaCorporal>60 || isNaN(temperaturaCorporal))
		{
			temperaturaCorporal=prompt("La temperatura ingresada es anormal para la vida humana o bien es incorrecta, vuelva a ingresar.");
			temperaturaCorporal=parseFloat(temperaturaCorporal);
		} 
		//PROCESAMIENTO DE VALORES VALIDADOS.
		if(temperaturaCorporal>MayorTemperaturaCorporal)//COLOCAR BANDERA.
		{
			MayorTemperaturaCorporal=temperaturaCorporal;
			nombreMayorTemperatura=nombre;
		}
		if(edad>60 && temperaturaCorporal>38)
		{
			terceraEdad++;
		}
	
		switch(sexo)
		{
			case "M":
				sexo="Masculino";
				switch(estadoCivil)
				{
				/*	case "C":
						estadoCivil="Casado";
						break;
					case "D":
						estadoCivil="Divorciado";
						break;					
					case "S":
						cantidadSolteros++;
						acumuladorEdad+=edad;
						estadoCivil="Soltero";
						break;
					case "V":
						if(edad>18)
						{
							viudosMayores++;
						}
						cantidadViudos++
						estadoCivil="Viudo";
						break;
				}
				break;
			case "F":
				sexo="Femenino";
				switch(estadoCivil)
				{
				/*	case "C":
						estadoCivil="Casada";
						break;
					case "S":
						estadoCivil="Soltera";
						break;
					case "D":
						estadoCivil="Divorciada";
						break;					
					case "V":
						if(edad>18)
						{
							viudosMayores++
						}
						estadoCivil="Viuda";
						break;
				}
		}
		respuesta=confirm("Desea ingresar seguir ingresando personas?");
		
	}
	alert("El nombre de la persona con mayor temperatura registrada fue "+nombreMayorTemperatura+" con una temperatura de "+MayorTemperaturaCorporal+"°C.");
	alert("La cantidad de mayores de edad viudos/as es de "+viudosMayores+" personas.");
	if(cantidadViudos==0 && cantidadSolteros==0)
	{
		alert("No ingresaron hombres cuyo estado civil sea viudo y/o solteros.");
	}
	else
	{
		//SUMA DE CANTIDAD DE SOLTERO Y VIUDOS.
		alert("La cantidad de hombres solteros y viudos es de "+(cantidadSolteros+cantidadViudos));
	}
	alert("El promedio de edades de los hombres solteros es de "+(acumuladorEdad/cantidadSolteros));	
}
*/	
