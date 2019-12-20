var request = new XMLHttpRequest();
var liste = []

function sendAjax()
{
    request.open('GET','http://jihane.fr/ajax/jpays.php');
    request.send();
}

request.onload = function()
{
    var requestJson=JSON.parse(request.response);
    console.log(requestJson);
    var para = document.createElement("p");
    para.innerText=requestJson.pays.nom;
    /*for (i=0;i<liste.length;i++)
    {
        if (liste[i]===para.innerText)
        {
            alert("aled");
        }
        else
        {
            if (requestJson.pays.continent==="EU")
            {
                var cont = document.getElementById("Europe");
            }
            else if (requestJson.pays.continent==="AF")
            {
                var cont = document.getElementById("Afrique");
            }
            else if (requestJson.pays.continent==="AS")
            {
                var cont = document.getElementById("Asie");
            }
            cont.appendChild(para);
        }

    }*/
    if (requestJson.pays.continent==="EU")
    {
        var cont = document.getElementById("Europe");
    }
    else if (requestJson.pays.continent==="AF")
    {
        var cont = document.getElementById("Afrique");
    }
    else if (requestJson.pays.continent==="AS")
    {
        var cont = document.getElementById("Asie");
    }
    cont.appendChild(para);

}


//var tab2 =JSON.parse(tab);

/*for (i in donnees)
{
    console.log(i);
    console.log(donnees[i]);
    var l= document.createElement("tr");
    var c1=document.createElement("th");
    c1.innerText=i;
    var c2=document.createElement("td");
    c2.innerText=donnees[i];

    tab.appendChild(l);
    l.appendChild(c1);
    l.appendChild(c2);
}*/




//c1l1.appendChild();






