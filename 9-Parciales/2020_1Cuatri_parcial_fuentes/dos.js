/* Stancanello, Luciano Darío Daniel.

Realizar el algoritmo que permita ingresar los datos de una compra productos de 
la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  var tipo;
  var tipoMayorPrecio;
  var cantidad;
  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var cantidadTotal;
  var mayorCantidad;
  var precio;
  var precioBruto;
  var precioConDescuento;
  var mayorPrecio;
  var respuesta;
  var banderaDelPrimero;
// INICIACIÓN DE VARIABLES.
  respuesta=true;
  banderaDelPrimero=1;
  mayorCantidad=0;
  cantidadArena=0;
  cantidadCal=0;
  cantidadCemento=0;
  cantidadTotal=0;
  precioBruto=0;

  while(respuesta==true)
  {
  //VALIDACIÓN DE VALORES DE VARIABLE.  
    tipo=prompt("Seleccione los siguentes materiales disponibles: arena, cal, o cemento");
    while(tipo!=="arena" && tipo!=="cal" && tipo!=="cemento")
    {
      tipo=prompt("Seleccion invalida, vuelva intentar. Stock disponible: arena, cal y cemento.");
    }
    cantidad=prompt("Ingrese la cantidad del producto selecto.");
    cantidad=parseInt(cantidad);
    while(isNaN(cantidad) || cantidad<0)
    {
      cantidad=prompt("Ingrese la cantidad del producto selecto.");
      cantidad=parseInt(cantidad);  
    }
    precio=prompt("Ingrese el precio del material selecto.");
    precio=parseFloat(precio);
    while(isNaN(precio) || precio<0)
    {
      precio=prompt("Precio ingresado no valido, vuelva a intentar.");
      precio=parseFloat(precio);      
    }
    //BANDERA DEL PRIMERO PARA CALCULO DE TIPO MAS CARO.
    if(banderaDelPrimero==1 || mayorPrecio<precio)
    {
      mayorPrecio=precio;
      tipoMayorPrecio=tipo;
      banderaDelPrimero=0;
    }
    //PROCESAMIENTO DE VALORES VALIDADOS.
    switch(tipo)
    {
      case "arena":
        cantidadArena+=cantidad;
        break;
      case "cal":
        cantidadCal+=cantidad;
        break; 
      case "cemento":
        cantidadCemento+=cantidad;
        break;
    }
    cantidadTotal+=cantidad;
    precioBruto+=precio*cantidad;
    respuesta=confirm("Desea seguir ingresando materiales.");
  }
  //CALCULO DE TOTAL DE BOLSAS PARA SABER QUE DESCUENTO APLICAR.
  if(cantidadTotal>30)
  {
    precioConDescuento=precioBruto-(precioBruto*0.25);
    alert("El importe total con descuento a pagar es de $"+precioConDescuento);
  }
  else
  {
    if(cantidadTotal>10)
    {
      precioConDescuento=precioBruto-(precioBruto*0.15);
      alert("El importe total con descuento a pagar es de $"+precioConDescuento);  
    }
    else
    {
      alert("El importe total a pagar es de $"+precioBruto);
    }
  }
  //COMPROBACIÓN DEL TIPO CON MAYOR CANTIDAD DE BOLSAS COMPRADAS.
  if(cantidadArena>cantidadCal && cantidadArena>cantidadCemento)
  {
    alert("El tipo de material con mas cantidad de bolsas compradas fue Arena.");
  }
  else
  {
    if(cantidadCal>cantidadArena && cantidadCal>cantidadCemento)
    {
      alert("El tipo de material con mas cantidad de bolsas compradas fue Cal.");
    }
    else
    {
      alert("El tipo de material con mas cantidad de bolsas compradas fue Cemento");
    }
  }
  alert("El tipo de material mas caro fue: "+tipoMayorPrecio);
}
//FIN DE CODIGO.
/*
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/



/*
function mostrar()
{
  var tipo;
  var tipoMasCaro;
  var tipoMayorBolsas;
  var cantidad;
  var totalBolsas;
  var mayorCantidad;
  var precio;
  var precioBruto;
  var mayorPrecio;
  var descuento;
  var respuesta;
  var banderaDelPrimero;
  
  respuesta=true;
  banderaDelPrimero=1;
  descuento=0;
  precioBruto=0;
  totalBolsas=0;

  while(respuesta==true)
  {
    //...........................VALIDACIÓN DE VALORES DE VARIABLES...............................
    tipo=prompt("Seleccione producto. A para arena, C para cal, CE para cemento.");
    while(tipo!=="A" && tipo!=="C" && tipo!=="CE")
    {
      tipo=prompt("Selección incorrecta, hagalo nuevamente. A para arena, C para cal, CE para cemento.");  
    }
    cantidad=prompt("Ingrese la cantidad deseada.");
    cantidad=parseFloat(cantidad);
    while(cantidad<0 || isNaN(cantidad))
    {
      cantidad=prompt("Ingreso incorrecto, hagalo nuevamente.");
      cantidad=parseFloat(cantidad);
    }
    precio=prompt("Ingrese el precio del producto seleccionado.");
    precio=parseFloat(precio);
    while(precio<1 || isNaN(precio))
    {
      precio=prompt("Ingreso de precio incorrecto, hagalo nuevamente.");
      precio=parseFloat(precio);        
    }
    //...........................PROCESAMIENTO DE VALORES DE VARIABLES VALIDADOS...................
    switch(tipo)
    {
      case "A":
        tipo="Arena";
        break;
      case "C":
        tipo="Cal";
        break;
      case "CE":
        tipo="Cemento";
        break;
    }
    precioBruto+=precio*cantidad;
    totalBolsas+=cantidad;
    //...........................BANDERA DEL PRIMERO..................................................
    if(banderaDelPrimero==1 || precio>mayorPrecio)
    {
      mayorPrecio=precio;
      tipoMasCaro=tipo;
    }
    if(banderaDelPrimero==1 || cantidad>mayorCantidad)
    {
      mayorCantidad=cantidad;
      tipoMayorBolsas=tipo;
    }    
    banderaDelPrimero=0;
    respuesta=confirm("Desea ingresar otro producto?");
  }
//...........................CALCULO DE PRECIO Y DESCUENTO...............................................  
  if(totalBolsas>30)
  {
    descuento=precioBruto*0.25;
  }
  else
  {
    if(totalBolsas>10)
    {
      descuento=precioBruto*0.15;
    }
  }
  //...........................RESPUESTAS SOLICITADAS EN CONSIGNAS DEL EJERCICIO..........................
  if(descuento==0)
  {
    alert("El importe en bruto a pagar es de $"+precioBruto);
  }
  else
  {
    alert("El importe con descuento a pagar es de $"+(precioBruto-descuento));
  }
    
  alert("El tipo de material con mas cantidad de bolsas solicitadas es: "+tipoMayorBolsas+" con un total de: "+mayorCantidad+" bolsas.");
  alert("El tipo de material mas caro es: "+tipoMasCaro+" con un precio de $"+mayorPrecio);
 
}//FIN DE CODIGO.

*/