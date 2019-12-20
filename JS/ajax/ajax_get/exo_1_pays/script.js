

var requete = new XMLHttpRequest();
var para = document.getElementsByTagName("p");

//

function sendAjax()
{
    requete.open("GET", "pays.php");
    requete.send();
}

requete.onload = function ()
{
    para[0].innerHTML=para[0].innerHTML+requete.responseText+" ";
}


