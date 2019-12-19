function suppr(p)
{
    let div = document.getElementById("main");
    let paragraphe = document.getElementById(p);
    div.removeChild(paragraphe);
}

function addChild(lieu)
{
    let div =document.getElementById("main");
    let noeudTitre=document.createElement("h1");
    noeudTitre.innerText="pooopiiiiii";
    if (lieu==="avant")
    {
        div.insertBefore(noeudTitre,div.firstChild);
    }
    if (lieu==="apres")
    {
        div.appendChild(noeudTitre);
    }


    //div.replaceChild(noeudTitre,div.firstChild);
}
