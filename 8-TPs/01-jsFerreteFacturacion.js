/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 
{      
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseFloat(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseFloat(precioDos);

    precioTres=txtIdPrecioTres.value;    
    precioTres=parseFloat(precioTres);

    suma=precioUno+precioDos+precioTres;

    alert("La suma de los números ingresados es $"+suma);
}
function Promedio () 
{    
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseFloat(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseFloat(precioDos);

    precioTres=txtIdPrecioTres.value;    
    precioTres=parseFloat(precioTres);

    suma=precioUno+precioDos+precioTres;

    alert("El precio promedio de los productos es igual a $"+(suma/3));
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseFloat(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseFloat(precioDos);

    precioTres=txtIdPrecioTres.value;    
    precioTres=parseFloat(precioTres);

    suma=precioUno+precioDos+precioTres;

    alert("El precio precio final de los productos es igual a $"+(suma+(suma*0.21)));
}




/*{
    2da. opción de hacerlo (Deshabilatar codigo de 1er Opción y reemplazar en función)
    
    var ProductoUno;
    var ProductoDos;
    var ProductoTres;
    var PrecioSinIva;                  
    var AumentoIva;                
    var PrecioFinal;
    
    ProductoUno=txtIdPrecioUno.value;
    ProductoUno=parseInt(ProductoUno);
    
    ProductoDos=txtIdPrecioDos.value;
    ProductoDos=parseInt(ProductoDos);
    
    ProductoTres=txtIdPrecioTres.value;
    ProductoTres=parseInt(ProductoTres);
    
    PrecioSinIva=ProductoUno+ProductoDos+ProductoTres;       
    AumentoIva=(ProductoUno+ProductoDos+ProductoTres)*0.21;  
   
    PrecioFinal=PrecioSinIva+AumentoIva;
    
    
    alert("El precio precio final de los productos es igual a "+PrecioFinal);   
}
*/
