/* Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y 
un número entre -100 y 100 (validar) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/

function mostrar()
{
    var letra;
    var letraNumMaximo;
    var letraNumMinimo;
    var numero;
    var numeroMaximo;
    var numeroMinimo;
    var numeroPar;
    var numeroImpar;
    var ceros;
    var acumulardorPositivos;
    var subtotalPositivo;
    var subtotalNegativos;
    var respuesta;
    var banderaDelPrimero;
    var promedioPositivos;

    respuesta=true;
    banderaDelPrimero=1;
    numeroPar=0;
    numeroImpar=0;
    ceros=0;
    acumulardorPositivos=0;
    subtotalPositivo=0;
    subtotalNegativos=0;
    

    while(respuesta==true)
    {
        letra=prompt("Ingrese una letra.");
        while(!(isNaN(letra)))
        {
            letra=prompt("Ingreso incorrecto, ingrese una letra nuevamente.");
        }
        numero=prompt("Ingrese un número entre -100 y 100.");
        numero=parseFloat(numero);
        while(isNaN(numero) || numero<-100 || numero>100)
        {
            numero=prompt("Numero ingresado no valdo. Ingrese nuevamente un número entre -100 y 100.");
            numero=parseFloat(numero);
        }
        if(banderaDelPrimero==1 || numero>numeroMaximo)
        {
            numeroMaximo=numero;
            letraNumMaximo=letra;
        }
        if(banderaDelPrimero==1 || numeroMinimo>numero)
        {
            numeroMinimo=numero;
            letraNumMinimo=letra;
            banderaDelPrimero=0;
        }
        
        if(numero<0)
        {
            subtotalNegativos+=numero;
        }
        else
        {
            subtotalPositivo+=numero;
            acumulardorPositivos++;
        }

        if(numero==0)
        {
            ceros++;
        }
        else
        {
            if(numero%2==0)
            {
                numeroPar++;
            }
            else
            {
                numeroImpar++;
            }
        }
        respuesta=confirm("Desea ingresar otro número.");
    }
    promedioPositivos=subtotalPositivo/acumulardorPositivos;
    promedioPositivos.toFixed(2);
    document.write("La cantidad de números pares es de "+numeroPar+"<br>");
    document.write("La cantidad de número impares fueron "+numeroImpar+"<br>");
    document.write("La cantidad de ceros fueron "+ceros+"<br>");
    document.write("El promedio de números positivos es "+promedioPositivos+"<br>");
    document.write("El número maximo fue "+numeroMaximo+" y la letra fue "+letraNumMaximo+"<br>");
    document.write("El número minimo fue "+numeroMinimo+" y la letra fue "+letraNumMinimo+"<br>");
}
