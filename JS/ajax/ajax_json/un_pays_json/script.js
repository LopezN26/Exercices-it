var request = new XMLHttpRequest();
var sec = document.getElementsByTagName("section")[0];

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
    sec.insertBefore(para,sec.firstElementChild);
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






