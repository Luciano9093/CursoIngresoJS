/*Stancanello, Luciano Darío Daniel.
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/

function mostrar()
{
	var Numero;
	
	Numero=Math.floor(Math.random() * 10) + 1; // 0 al 9
	Numero=Math.floor(Math.random() * 11) + 1; // 1 al 10

	alert(Numero);

}//FIN DE LA FUNCIÓN