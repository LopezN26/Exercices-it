function celsiusToF (valeurBase)
{
    var valeur = ((9*valeurBase)+(32*5))/5;
    alert(valeurBase + "°F =" + valeur + "°C");
}

function FahrToC (valeurBase)
{
    var valeur = (5/9)*(valeurBase-32);
    alert(valeurBase + "°C =" + valeur + "°F");
}

var temp = prompt("Saisir une température à convertir ");
var type = prompt("tapez 1 si vous voulez passer de Celsius à Fahrenheit, tapez 2 pour l'inverse");
if (type == "1")
{
    celsiusToF(temp);
}
else if (type =="2")
{
    FahrToC (temp);
}

