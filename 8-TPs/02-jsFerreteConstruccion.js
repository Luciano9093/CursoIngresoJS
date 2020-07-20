/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo;
    var Ancho;
    var RectanguloDeAlambre;
    
    Largo=txtIdLargo.value;
    Largo=parseInt(Largo);

    Ancho=txtIdAncho.value;
    Ancho=parseInt(Ancho);

    RectanguloDeAlambre=(6*Largo) + (6*Ancho);

    alert("La cantidad de alambre para un terreno rectangular es de "+RectanguloDeAlambre+" mts.");
}
function Circulo () 
{
    var Radio;
    var CirculoDeAlambre;

    Radio=txtIdRadio.value;
    Radio=parseInt(Radio);
    
    CirculoDeAlambre=(6*Math.PI)*Radio;
    
    alert("La cantidad de alambre para un terreno circular es de "+CirculoDeAlambre+" mts.");
}

function Materiales () 
{
	var Largo;
    var Ancho;
    var CantidadCemento;
    var CantidadCal;
    
    Largo=txtIdLargo.value;
    Largo=parseInt(Largo);

    Ancho=txtIdAncho.value;
    Ancho=parseInt(Ancho);

    CantidadCemento=(Largo*Ancho)*2;
    CantidadCal=(Largo*Ancho)*3;

    alert("Se necesitaran "+CantidadCemento+" bolsas de cemento y "+CantidadCal+" bolsas de cal");
}