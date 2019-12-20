/*var e = {"etudiants":[  {"prenom":"Karim","id":"28"},
                        {"prenom":"NicolasC","id":"31"},
                        {"prenom":"Gabriel","id":"32"},
                        {"prenom":"Charles","id":"33"}]
        };
console.log(e.etudiants);
var etudiants = e.etudiants;*/

// for (let i in etudiants)
// {
//     console.log(etudiants[i].prenom);
// }

var saisie = document.getElementById("input");
var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var section = document.getElementsByTagName("section")[0];
var ide;
function rechercher()
{
    var nom = saisie.value;
    request.open('GET',`http://jihane.fr/ajax/dwmg2.php?query=${nom}`);
    request.send();
}

request.onload = function ()
{
    section.innerHTML="";
    var reponse = JSON.parse(request.responseText);
    // console.log(request.responseText);
    // console.log("reponse = "+reponse);
    // console.log("reponse -1 etage = "+reponse.etudiants);
    for (i in reponse.etudiants)
    {
        var para = document.createElement("p");
        para.setAttribute("onclick","image("+reponse.etudiants[i].id+")");
        para.setAttribute("id","id"+reponse.etudiants[i].id);
        para.innerText=reponse.etudiants[i].prenom+" id = "+reponse.etudiants[i].id;
        section.appendChild(para);
    }

}

function image (id)
{
    request2.open("GET","http://jihane.fr/ajax/avatar.php?id="+id);
    request2.send();
    request2.onload = function ()
    {
        //console.log( " request2.responseText = "+request2.responseText);
        var reponse2 = JSON.parse(request2.responseText);
        var imageperso = document.createElement("img");
        imageperso.setAttribute("src",reponse2.image);
        imageperso.setAttribute("id","image");
        var para2 = document.getElementById("id"+id);
        para2.appendChild(imageperso);
    }
}





