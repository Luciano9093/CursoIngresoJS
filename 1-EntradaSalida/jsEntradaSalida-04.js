/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	nombre=prompt("Escriba su nombre: ");
	txtIdNombre.value=nombre;
	alert("El nombre ingresado fue: "+txtIdNombre.value);
}

