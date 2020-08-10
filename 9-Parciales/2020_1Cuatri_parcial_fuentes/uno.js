/* Stancanello, Luciano Darío Daniel
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var tipo;
	var precio;
	var precioMin;
	var cantidad;
	var cantidadAlcoholBarato;
	var banderaDelPrimero;
	var contador;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var fabricanteAlcoholbarato;

	banderaDelPrimero=1;
	cantidadAlcoholBarato=0;
	subtotalAlcohol=0;
	subtotalJabon=0;
	subtotalBarbijo=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	cantidadAlcohol=0;
	cantidadBarbijo=0;
	cantidadJabon=0;
	
	for(contador=0; contador<5; contador++)
	{
		tipo=prompt("Seleccione producto disponible, alcohol, barbijo, jabón.");
		while(tipo!=="alcohol" && tipo!=="barbijo" && tipo!=="jabón")
		{
			tipo=prompt("Ingreso invalido. Seleccione nuevamente el producto");
		}
		precio=prompt("Ingrese el precio del producto seleccionado.");
		precio=parseFloat(precio);
		while(isNaN(precio) || precio<100 || precio>300)
		{
			precio=prompt("Precio ingrasado invalido. Intente nuevamente.");
			precio=parseFloat(precio);				
		}
		cantidad=prompt("Ingrese la cantidad deseada, la misma no debe superar las 1.000 unidades.");
		cantidad=parseInt(cantidad);
		while(isNaN(cantidad) || cantidad<1 || cantidad>1000)
		{
			cantidad=prompt("Ingreso de cantidad invalido. Intente nuevamente");
			cantidad=parseInt(cantidad);	
		}
		fabricante=prompt("Ingrese fabricante del producto.");
		switch(tipo)
		{
			case "alcohol":
				contadorAlcohol++;
				cantidadAlcohol+=cantidad;
				subtotalAlcohol+=precio;
				if(banderaDelPrimero==1 || precioMin>precio)
				{
					precioMin=precio;
					cantidadAlcoholBarato+=cantidad;
					fabricanteAlcoholbarato=fabricante;
					banderaDelPrimero=0;
				}
				break;
			case "barbijo":
				contadorBarbijo++;
				cantidadBarbijo+=cantidad;
				subtotalBarbijo+=precio;
				break;
			case "jabón":
				contadorJabon++;
				cantidadJabon+=cantidad;
				subtotalJabon+=precio;
				break;
		}	
	}
	if(cantidadAlcohol>cantidadBarbijo && cantidadAlcohol>cantidadJabon)
	{
		alert("El promedio de compra del alcohol fue de $"+(subtotalAlcohol/contadorAlcohol)+" unidades.");
	}
	else
	{
		if(cantidadBarbijo>cantidadAlcohol && cantidadBarbijo>cantidadJabon)
		{
			alert("El promedio de compra del barbijo es de $"+(subtotalBarbijo/contadorJabon)+" unidades.");
		}	
		else
		{
			if(cantidadJabon>cantidadAlcohol && cantidadJabon>cantidadBarbijo)
			{
				alert("El promedio de compra del jabón fue de $"+(subtotalBarbijo/contadorJabon)+" unidades");
			}
		}
	}
	alert("La cantidad de alcohol mas barato comprado fue de "+cantidadAlcoholBarato+" unidades y su fabricante fue "+fabricanteAlcoholbarato);
	alert("Se han comprado "+cantidadJabon+" unidades de jabón.");
}





/*
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/



















































/*
function mostrar()
{
	var tipo;
	var precio;
	var precioAlcoholBarato;
	var importeAlcohol;
	var importeJabon;
	var importeBarbijo;
	var unidades;
	var contador;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabón;
	var unidadesJabon;
	var unidadesAlcohol;
	var unidadesBarbijo;
	var unidadesAlcoholBarato;
	var marca;
	var fabricante;
	var banderaDelPrimero;
	
	contador=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabón;
	importeAlcohol=0;
	importeBarbijo=0;
	importeJabon=0;
	unidadesJabon=0;
	unidadesAlcohol=0;
	unidadesBarbijo=0;
	unidadesAlcoholBarato=0;
	banderaDelPrimero=1;

	//VALIDACION DE VALORES DE VARIABLES.
	for(contador=0; contador<5; contador++)
	{
		tipo=prompt("Seleccione producto. B para barbijo, J para jabón o A para alcohol");
		while(tipo!=="B" && tipo!=="J" && tipo!=="A")
		{
			tipo=prompt("Selección Incorrecta, vuelva a intentar. B para barbijo, J para jabón o A para alcohol");			
		}
		precio=prompt("Ingrese el precio del producto seleccionado.");
		precio=parseFloat(precio);
		while(isNaN(precio) || precio<100 || precio>300)
		{
			precio=prompt("Ingreso incorrecto. Vuelva a ingresar el precio.");
			precio=parseFloat(precio);				
		}
		unidades=prompt("Ingrese cantidad de unidades del producto seleccionado.");
		unidades=parseFloat(unidades);
		while(isNaN(unidades) || unidades<1)
		{
			unidades=prompt("Cantidad ingresada incorrecta, intente nuevamente.");
			unidades=parseFloat(unidades);
		}
		marca=prompt("Ingrese marca del producto.");
		fabricante=prompt("Ingrese nombre del fabricante.");

	//PROCESAMIENTO DE DATOS VALIDADOS.
		switch(tipo)
		{
			case "B":
				tipo="Barbijo";
				importeBarbijo+=precio*unidades;
				unidadesBarbijo+=unidades;
				contadorBarbijo++
				break;
			case "J":
				tipo="Jabón";
				importeJabon+=precio*unidades;
				unidadesJabon+=unidades;
				contadorJabón++;
				break;
			default:
				tipo="Alcohol";
				importeAlcohol+=precio*unidades;
				unidadesAlcohol+=unidades;
				contadorAlcohol++
				if(banderaDelPrimero==1 || precio<precioAlcoholBarato)
				{
					precioAlcoholBarato+=precio;
					unidadesAlcoholBarato+=unidades;
					banderaDelPrimero=0;
				}
				break;
		}
	}
	if(unidadesBarbijo>unidadesAlcohol && unidadesBarbijo>unidadesJabon)
	{
		alert("El promedio de compra del jabón es de: $"+(importeBarbijo/contadorBarbijo));
	}		
	else
	{
		if(unidadesAlcohol>unidadesBarbijo && unidadesAlcohol>unidadesJabon)
		{
			alert("El promedio de compra de alcohol es de: $"+(importeAlcohol/contadorAlcohol));
		}
		else
		{
			if(unidadesJabon>unidadesBarbijo && unidadesJabon>unidadesAlcohol)
			{
				alert("El promedio de compra de jabón es de: $"+(importeJabon/contadorJabón));
			}
		}
	}
	alert("La cantidad de unidades del alcohol mas barato es de: "+unidadesAlcoholBarato+" y su fabricante es: "+fabricante);
	alert("Se han comprado "+unidadesJabon+" unidades de jabón.");
}
*/





