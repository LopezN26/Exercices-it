function affP ()
{
    alert(par.innerHTML);
}

function modP ()
{
    par.innerHTML= "t'as changé toi";
}

var h1 = document.getElementById("montitre");
var par = document.getElementById("idP");
affP();
modP();

