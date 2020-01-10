// var liste = document.getElementById("liste");
j=0;
n=0;
var afficher = document.getElementById("afficher");
afficher.addEventListener("click", function() {affTen(j)});

var suivants = document.getElementById("suivants");
suivants.addEventListener("click", function() {next()});

function next()
{
    j+=10;
    console.log(j)
    affTen(j);

}

var precedents = document.getElementById("precedents");
precedents.addEventListener("click", function() {previous()});

function previous()
{
    if (j>=10)
    {
        j-=10;
        console.log(j)
        affTen(j);
    }
}

function affTen(j)
{
    var liste = document.getElementById("liste");
    liste.innerHTML="";
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=968")
        .then (
            function(response)
            {
                return response.json(); // Json to object
            }
        )
        .then(
            function(poke)
            {
                console.log(poke);
                // console.log(poke.forms[0].name);
                for (i=j;i<j+10;i++)
                {
                    var paraPoke=document.createElement("p"); //création p qui contient tout
                    var boutonDetails=document.createElement("button"); // création bouton détail
                    boutonDetails.setAttribute("type","button");
                    boutonDetails.setAttribute("id","id"+(i+1)); //ajout id
                    boutonDetails.setAttribute("onclick","details("+(i+1)+")"); //ajout fonciton onclick
                    boutonDetails.innerHTML="Détails";
                    paraPoke.innerHTML=(i+1)+". "+poke.results[i].name;
                    console.log("i="+i);
                    paraPoke.appendChild(boutonDetails);
                    liste.appendChild(paraPoke);
                }
            }
        )
}

function details(id)
{
    var details = document.getElementById("details");
    details.innerHTML="";
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
        .then (
            function(response)
            {
                return response.json(); // Json to object
            }
        )
        .then (
            function(pokeDet)
            {
                // console.log(pokeDet);
                // console.log(pokeDet.name);
                var divDet=document.createElement("div"); //création div
                divDet.setAttribute("class","Det");
                var img=document.createElement("img");
                img.setAttribute("src",pokeDet.sprites.front_default);
                divDet.appendChild(img);
                var id=document.createElement("p");
                id.innerHTML="Id : "+pokeDet.id;
                divDet.appendChild(id);
                var name=document.createElement("p");
                name.innerHTML="Name : "+pokeDet.name;
                divDet.appendChild(name);
                var height=document.createElement("p");
                height.innerHTML="Height : "+pokeDet.height;
                divDet.appendChild(height);

                details.appendChild(divDet);
            }
        )
}



