/* Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre 
el perímetro por alert.
*/
function mostrar()
{
    var lado;

    lado=prompt("Ingrese el lado de un triángulo equilatero.");
    lado=parseFloat(lado);
    while(lado<1 || isNaN(lado))
    {
        lado=prompt("No se pude calcular el perimetro con el valor ingresado, intente de nuevo.");
        lado=parseFloat(lado);
    }
    alert("El perimetro del triangulo equilatero es igual a "+(lado*3));
}
