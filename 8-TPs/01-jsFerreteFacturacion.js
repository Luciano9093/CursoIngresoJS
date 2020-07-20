/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var ProductoUno;
    var ProductoDos;
    var ProductoTres;
    var Suma;

    ProductoUno=txtIdPrecioUno.value;
    ProductoUno=parseInt(ProductoUno);

    ProductoDos=txtIdPrecioDos.value;
    ProductoDos=parseInt(ProductoDos);

    ProductoTres=txtIdPrecioTres.value;
    ProductoTres=parseInt(ProductoTres);

    Suma=ProductoUno+ProductoDos+ProductoTres;


alert("La suma de los productos es igual a "+Suma);
}
function Promedio () 
{
    var ProductoUno;
    var ProductoDos;
    var ProductoTres;
    var Promedio;
    
    ProductoUno=txtIdPrecioUno.value;
    ProductoUno=parseInt(ProductoUno);
    
    ProductoDos=txtIdPrecioDos.value;
    ProductoDos=parseInt(ProductoDos);
    
    ProductoTres=txtIdPrecioTres.value;
    ProductoTres=parseInt(ProductoTres);
    
    Promedio=(ProductoUno+ProductoDos+ProductoTres)/3;
    
    
    alert("El precio promedio de los productos es igual a "+Promedio);
}
function PrecioFinal () 
{
    var ProductoUno;
    var ProductoDos;
    var PrecioFinal;

    ProductoUno=txtIdPrecioUno.value;
    ProductoUno=parseInt(ProductoUno);
    
    ProductoDos=txtIdPrecioDos.value;
    ProductoDos=parseInt(ProductoDos);
    
    ProductoTres=txtIdPrecioTres.value;
    ProductoTres=parseInt(ProductoTres);

    PrecioFinal=(ProductoUno+ProductoDos+ProductoTres)*1.21

    alert("El precio precio final de los productos es igual a "+PrecioFinal);
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
