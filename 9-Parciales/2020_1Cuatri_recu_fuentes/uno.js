/* Stancanello Luciano Darío Daniel.
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total.
*/

function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var unidadBarbijo;
	var unidadJabon;
	var unidadAlcohol;
	var unidadJabonCaro;
	var unidadGeneral;
	var marca;
	var fabricante;
	var contador;
	var banderaDelPrimero;
	var contadorJabon;
	var contadorAlcohol;
	var contadorBarbijo;
	
	banderaDelPrimero=1;
	contador=0;
	unidadJabon=0;
	unidadJabonCaro=0;
	unidadBarbijo=0;
	unidadAlcohol=0;
	contadorJabon=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	unidadGeneral=0;

	while(contador<5)
	{
		tipo=prompt("Seleccione el producto: A para Alcohol, B para Barbijo o J para Jabón.");
		while(tipo!=="A" && tipo!=="B" && tipo!=="J")
		{
			tipo=prompt("Selección incorrecta, seleccione nuevamente: A para Alcohol, B para Barbijo o J para Jabón.");	
		}
		precio=prompt("Ingrese precio del producto.");
		precio=parseFloat(precio);
		while(precio<100 || precio>300 || isNaN(precio))
		{
			precio=prompt("Precio ingresao no valido, intente nuevamente");
			precio=parseFloat(precio);			
		}
		cantidad=prompt("Ingrese cantidad.");
		cantidad=parseFloat(cantidad);
		while(cantidad<1 || cantidad>1000 || isNaN(cantidad))
		{
			cantidad=prompt("ingreso de cantidad no valido, intente nuevamente");
			cantidad=parseFloat(cantidad);
		}
		marca=prompt("Ingrese marca");
		fabricante=prompt("Ingrese fabricante");

		switch(tipo)
		{
			case "A":
				contadorAlcohol++;
				unidadAlcohol+=cantidad;
				tipo="alcohol";
				break;
			case "B":
				contadorBarbijo++
				unidadBarbijo+=cantidad;
				tipo="barbijo";
				break;
			default:
				contadorJabon++
				unidadJabon+=cantidad;
				tipo="jabón";
				if(banderaDelPrimero==1 || precio>jabonCaro)
				{
					jabonCaro=precio;
					unidadJabonCaro+=cantidad;
					fabricante=fabricante;
					banderaDelPrimero=0;
				}
				break;
		}
		unidadGeneral+=cantidad;
		contador++;
	}
		alert("La cantidad del jabón mas caro comprado fue de "+unidadJabonCaro+" unidades y su fabricante es "+fabricante);
		if (unidadAlcohol>unidadBarbijo && unidadAlcohol>unidadJabon)
		{
			alert("El promedio por compra del Alcohol fue de "+(unidadAlcohol/contadorAlcohol)+" unidades."); 
		}
		else
		{
			if(unidadBarbijo>unidadAlcohol && unidadBarbijo>unidadJabon)
			{
				alert("El promedio por compra del Alcohol fue de "+(unidadBarbijo/contadorBarbijo)+" unidades.");
			}
			else
			{
				if(unidadJabon>unidadAlcohol && unidadJabon>unidadBarbijo)
				{
					alert("El promedio por compra del Alcohol fue de "+(unidadJabon/contadorJabon)+" unidades.");
				}
				else
				{
					alert("La cantidad de los productos comprados fue equitativo y su promedio de compra fue de "+(unidadGeneral/5)+" unidades.");
				}
			}
		}
		alert("La cantidad de barbijos comprados fue de "+unidadBarbijo+" unidades.");
}
