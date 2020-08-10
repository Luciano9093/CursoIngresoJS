/* Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que 
el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/

function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var temperaturaMin;
    var temperaturaPar;
    var paisTemperaturaMin;
    var paisMenorHabitantes;
    var paisesMasTemp;
    var menorHabitantes;
    var subtotalHabitantes;
    var acumuladorPaises;
    var banderaDelPrimero;
    var respuesta;

    respuesta=true;
    banderaDelPrimero=1;
    paisesMasTemp=0;
    subtotalHabitantes=0;
    acumuladorPaises=0;
    temperaturaPar=0;

    while(respuesta==true)
    {
        pais=prompt("Ingrese el nombre del pais que desee.");
        while(!isNaN(pais))
        {
            pais=prompt("Ingreso invalido. Ingrese nombre del pais nuevamente.");    
        }
        habitantes=prompt("Ingrese cantidad de habitantes del país selecto.");
        habitantes=parseInt(habitantes);
        while(isNaN(habitantes) || habitantes<1 || habitantes>7000)
        {
            habitantes=prompt("Ingrese cantidad de habitantes del país selecto.");
            habitantes=parseInt(habitantes);    
        }
        temperatura=prompt("Ingrese temperatura.");
        temperatura=parseFloat(temperatura);
        while(isNaN(temperatura) || temperatura<-50 || temperatura>50)
        {
            temperatura=prompt("Ingrese temperatura.");
            temperatura=parseFloat(temperatura);    
        }

        if(banderaDelPrimero==1 || temperaturaMin>temperatura)
        {
            temperaturaMin=temperatura;
            paisTemperaturaMin=pais;
        }
        if(banderaDelPrimero==1 ||  menorHabitantes>habitantes)
        {
            menorHabitantes=habitantes;
            paisMenorHabitantes=pais;
            banderaDelPrimero=0;
        }
        if(temperatura>40)
        {
            paisesMasTemp++;
        }
        else
        {
            paisesMasTemp=0;
        }
        
        if(temperatura%2==0)
        {
            temperaturaPar++;
        }
        else
        {
            temperaturaPar=0;
        }
        subtotalHabitantes+=habitantes;
        acumuladorPaises++;
        respuesta=confirm("Desea ingresar los datos de otro país?.");
    }
    document.write("La cantidad de temperaturas pares ingresadas fueron "+temperaturaPar+"<br>");
    document.write("El nombre del país con menos habitantes es "+paisMenorHabitantes+"<br>");
    document.write("El promedio de habitantes entre los paises ingresados fue de "+(subtotalHabitantes/acumuladorPaises)+" millones <br>");
    document.write("La cantidad de paises que superan los 40°C fueron "+paisesMasTemp+"<br>");
    document.write("La temperatura minima ingresada fue de "+temperaturaMin+"°C y el país donde se registro fue "+paisTemperaturaMin+"<br>");
}

/*a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/