function onBlue(num)
{
    var Case = document.getElementById(num);
    Case.style.backgroundColor="blue";
}



var requete = new XMLHttpRequest();
var section = document.getElementById("sec");
//

function sendAjax()
{
    section.innerHTML="";
    requete.open("GET", "http://jihane.fr/ajax/nombre.php");
    requete.send();
}

requete.onload = function()
{
    A=requete.responseText; //nombre recu depuis le serve
    for (i=0;i<=A;i++)
    {
        var new_element=document.createElement("div");
        new_element.setAttribute("id","id"+i);
        new_element.setAttribute("onclick","onBlue(\"id"+i+"\")");
        if (i%2==0)
        {
            new_element.setAttribute("class","caseV");
        }
        else
        {

            new_element.setAttribute("class","caseJ");

        }
        section.appendChild(new_element);
    }
}




