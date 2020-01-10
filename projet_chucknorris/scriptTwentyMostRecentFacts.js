

function twentyMostRecentFacts(n)
{
    fetch("http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:20;page:"+n)
        .then (
            function(response)
            {
                return response.json(); //a partir de là Json devient tableau contenant objet(s)
            }
        )
        .then(
            function(rep) {
                //rep[0].fact
                var div = document.getElementById("twentyMostRecentDiv");
                div.innerHTML="";
                for (i=0;i<20;i++)
                {
                    var twentyMostRecentFactP=document.createElement("p");
                    twentyMostRecentFactP.innerHTML=((n-1)*20+i+1)+". "+rep[i].fact;
                    div.appendChild(twentyMostRecentFactP);
                }

                // var top10factsP=document.createElement("p");
                // top10factsP.innerText=rep[0].fact;
                // div.appendChild(top10factsP);
            }
        )
}

function next()
{
    n++;
    precedent.style.visibility="visible";
    twentyMostRecentFacts(n);
}
function previous()
{
    if (n>1)
    {
        n--;
        if (n==1)
        {
            precedent.style.visibility="hidden";
        }
        twentyMostRecentFacts(n);
    }
}

var suivant = document.getElementById("suivant");
suivant.addEventListener("click",function () {next()});
var precedent = document.getElementById("precedent");
precedent.addEventListener("click",function () {previous()});

n=1;
twentyMostRecentFacts(n);