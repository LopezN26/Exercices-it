var random = document.getElementById("random");
random.addEventListener("click", function() {randomFact()});

function randomFact()
{
    fetch("http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;type:txt;nb:1")
        .then (
        function(response)
        {
            return response.json(); //a partir de là Json devient tableau contenant objet(s)
        }
    )
        .then(
            function(rep) {
                //rep[0].fact
                var div = document.getElementById("randomdiv");
                div.innerHTML="";
                var randomP=document.createElement("p");
                randomP.innerHTML=rep[0].fact;
                div.appendChild(randomP);
            }
        )

}

randomFact();