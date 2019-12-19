

var requete = new XMLHttpRequest();
var span = document.getElementsByTagName("span");

//

function sendAjax()
{
    requete.open("GET", "http://jihane.fr/ajax/nombre.php");
    requete.send();
}

requete.onload = function ()
{
    span[0].innerText=requete.responseText;
}


