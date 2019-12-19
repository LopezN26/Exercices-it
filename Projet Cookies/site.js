function changeColorAller (n)
{

 var input = document.getElementById(n);
 input.style.borderColor = "blue";
}

function changeColorRetour (n)
{
    var input = document.getElementById(n);
    input.style.borderColor = "red";
}

function messageRecu()
{
    var nom = document.getElementById("input1");
    var prenom = document.getElementById("input2");

    alert(`Bonjour ${nom.value} ${prenom.value}. Nous avons bien reçu votre message.`)
    
}
