/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


function comenzar()
{
  var numeroSecreto;
  numeroSecreto=Math.floor(Math.random()*100)+1;
  numeroSecreto=parseInt(numeroSecreto);
}
  
numeroSecreto=numeroSecreto;

function verificar()
{
  var numeroIngresado;
  var contadorIntentos;

  contadorIntentos=0;
  numeroIngresado=txtIdNumero.value;
  numeroIngresado=parseInt(numeroIngresado);
  
  if(numeroIngresado<numeroSecreto)
  {
    alert("Aún falta...");
  }
  else
  {
    if(numeroIngresado>numeroSecreto)
    {
      alert("Te has pasado...");
    }
    else
    {
      alert("Usted es un ganador y lo hizo en tan solo "+contadorIntentos);
    }  
  }
  contadorIntentos++;
  txtIdIntentostxtIdIntentos=contadorIntentos;


}
