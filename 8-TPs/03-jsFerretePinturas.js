/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var GradosFahrenheit;
    var GradosCentigrados;

    GradosFahrenheit=txtIdTemperatura.value;
    GradosCentigrados=(GradosFahrenheit-32)/1.8;

    alert(GradosFahrenheit+" °F equivalen a "+GradosCentigrados+" °C");
}

function CentigradosFahrenheit () 
{
    var GradosFahrenheit;
    var GradosCentigrados;

    GradosCentigrados=txtIdTemperatura.value;
    GradosFahrenheit=(1.8*GradosCentigrados)+32;
    
    alert(GradosCentigrados+" °C equivalen a "+GradosFahrenheit+" °F");
}
