var request = new XMLHttpRequest();
function remplissage()
{
    var nb = document.getElementById("ta");
    console.log(nb);
    n = nb.value;
    sendAjax(n);
}

function sendAjax(nb)
{
    request.open('GET','http://jihane.fr/ajax/jpays.php?nb='+nb);
    request.send();
}

request.onload = function()
{
    var requestJson=JSON.parse(request.response);
    console.log(requestJson);
    for (i=0; i<requestJson.pays.length;i++)
    {
        var para = document.createElement("p");
        para.innerText=requestJson.pays[i].nom;
        if (requestJson.pays[i].continent==="EU")
        {
            var cont = document.getElementById("Europe");
        }
        else if (requestJson.pays[i].continent==="AF")
        {
            var cont = document.getElementById("Afrique");
        }
        else if (requestJson.pays[i].continent==="AS")
        {
            var cont = document.getElementById("Asie");
        }
        cont.appendChild(para);
    }

}






//c1l1.appendChild();






