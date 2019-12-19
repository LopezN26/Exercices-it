

var requete = new XMLHttpRequest();
var para = document.getElementsByTagName("p")
//

function sendAjax()
{
    para[0].innerText="";
    requete.open("GET", "http://jihane.fr/ajax/nombre.php");
    requete.send();
}

requete.onload = function()
{
    A=requete.responseText; //nombre recu depuis le serve
    for (i=0;i<=A;i++)
    {
        para[0].innerText+= " "+i;
    }

}


