/* Stancanello, Luciano Darío Daniel.

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos 
final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento 
del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos
 brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

function CalcularPrecio () 
{
    var marca;
    var precioBruto;
    var cantidad;
    var precioFinal;
    var iibb;

    marca=Marca.value;
    cantidad=txtIdCantidad.value;
    cantidad=parseInt(cantidad);
    while(isNaN(cantidad) || cantidad<1)
    {
        cantidad=prompt("Cantidad ingresada es invalida, ingrese nuevamente.");
        cantidad=txtIdCantidad.value;
        cantidad=parseInt(cantidad);
    }
    precioBruto=35*cantidad;

    switch(cantidad)
    {
        case 5:
            if(marca=="ArgentinaLuz")
            {
                precioFinal=precioBruto-(precioBruto*0.4);
            }
            else
            {
                precioFinal=precioBruto-(precioBruto*0.3);
            }
            break;
        case 4:
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                precioFinal=precioBruto-(precioBruto*0.25);
            }
            else
            {
                precioFinal=precioBruto-(precioBruto*0.2);
            }
            break;
        case 3:
            if(marca=="ArgentinaLuz")
            {
                precioFinal=precioBruto-(precioBruto*0.15);
            }
            else
            {
                if(marca=="FelipeLamparas")
                {
                    precioFinal=precioBruto-(precioBruto*0.1);
                }
                else
                {
                    precioFinal=precioBruto-(precioBruto*0.05);
                }
            }
        case 2:
        case 1:
            precioFinal=precioBruto;
            break;
        default:
            precioFinal=precioBruto*0.5;
            break;   
    }
    if(precioFinal>120)
    {
        iibb=precioFinal*0.1;
        precioFinal+=iibb;
        txtIdprecioDescuento.value=precioFinal;
        alert("Usted pago $"+iibb+(" de IIBB"))
    }
    else
    {
        txtIdprecioDescuento.value=precioFinal;
    }
}
    
        
    
    
                
    
    
  