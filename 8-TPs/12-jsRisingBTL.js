/*Stancanello, Luciano Darío Daniel.

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas 
maliciosas) y luego asignarla a cuadros de textos. ||<> (!(edadIngresada<18 || edadIngresada>91)) 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var legajo;
	var nacionalidad;

	alert("ADVERTENCIA; USTED DEBE TENER ENTRE 18 Y 90 AÑOS, Y POSEER UN SUELDO BRUTO SUPERIOR A $8.000 PARA REALIZAR ESTE CENSO.")

	
	//ingreso de datos y sus condiciones de validación.
	edadIngresada=prompt("Ingrese su edad:");
	edadIngresada=parseInt(edadIngresada);
	while(edadIngresada<18 || edadIngresada>91 || isNaN(edadIngresada))
	{
		edadIngresada=prompt("Error de ingreso, ingrese nuevamente su edad");
		edadIngresada=parseInt(edadIngresada);
	}//fin validación de Edad.

	sexoIngresado=prompt("Ingrese su sexo: M para masculino, F para femenino");
	while(!(sexoIngresado=="F" || sexoIngresado=="M"))
	{
		sexoIngresado=prompt("Ingreso de sexo incorrecto, ingrese nuevamente.")
	}//fin validación de Sexo.

	estadoCivilIngresado=prompt("Seleccione su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(estadoCivilIngresado<0 || estadoCivilIngresado>4 || isNaN(edadIngresada))
	{
		estadoCivilIngresado=prompt("Selección de estado civil incorrecto, intente nuevamente.");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}//fin validación de Estado Civil.

	sueldoBruto=prompt("Ingrese su sueldo bruto");
	sueldoBruto=parseInt(sueldoBruto);
	while(sueldoBruto<8000)
	{
		sueldoBruto=prompt("El valor ingresado es menor al minimo requerido. Ingrese nuevamente su sueldo bruto");
		sueldoBruto=parseInt(sueldoBruto);
	}
	
	legajo=prompt("Ingrese su número de legajo, de cuatro cifras.")
	legajo=parseInt(legajo);
	while(legajo>9999 || legajo<1000 || isNaN(edadIngresada))
	{
		legajo=prompt("Legajo incorrecto, ingrese nuevamente.")
	}//fin validación de Legajo

	nacionalidad=prompt("Ingrese su nacionalidad: siendo “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	while(!(nacionalidad=="A" || nacionalidad=="E" || nacionalidad=="N"))
	{
		nacionalidad=prompt("Error, ingrese nuevamente, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}//fin validación de Nacionalidad.
	//Fin de ingreso de datos.

	//Procesamiento de datos y agregado de info al cuadro de texto.
	txtIdEdad.value=edadIngresada; // A. Edad Ingresada
	switch(sexoIngresado) // B. Sexo ingresado
	{
		case "M":
			txtIdSexo.value="Masculino."; 	
			break;
		case "F":
			txtIdSexo.value="Femenino.";	
			break;
	}
	switch(estadoCivilIngresado) // C. Estado Civil Ingresado.
	{
		case 1:
			txtIdEstadoCivil.value="Soltero";
			break;
		case 2:
			txtIdEstadoCivil.value="Casado";	
			break;
		case 3:
			txtIdEstadoCivil.value="Divorciado";
			break;
		case 4:
			txtIdEstadoCivil.value="Viudo";
			break;
	}
	txtIdSueldo.value=sueldoBruto; // D.Sueldo Ingresado.
	
	txtIdLegajo.value=legajo;	// E. Legajo Ingresado.
	
	switch(nacionalidad)	// F. Nacionalidad Ingresada.
	{
		case "A":
			txtIdNacionalidad.value="Argentino/a";
			break;
		case "E":
			txtIdNacionalidad.value="Extranjero/a";
			break;
		case "N":
			txtIdNacionalidad.value="Naturalizado/a";
			break;
	}
}//Fin del codigo

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
