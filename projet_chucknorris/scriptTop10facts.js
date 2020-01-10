
function top10facts(n)
{
    fetch("http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;page:"+n)
        .then (
            function(response)
            {
                return response.json(); //a partir de là Json devient tableau contenant objet(s)
            }
        )
        .then(
            function(rep) {
                //rep[0].fact
                var div = document.getElementById("top10div");
                div.innerHTML="";
                for (i=0;i<10;i++)
                {
                    var top10factsP=document.createElement("p");
                    top10factsP.innerHTML=(((n-1)*10)+i+1)+". "+rep[i].fact;
                    div.appendChild(top10factsP);
                }
            }
        )
}
function next()
{
    n++;
    precedent.style.visibility="visible";
    top10facts(n);
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
        top10facts(n);
    }
}
var suivant = document.getElementById("suivant");
suivant.addEventListener("click",function () {next()});
var precedent = document.getElementById("precedent");
precedent.addEventListener("click",function () {previous()});

n=1;
top10facts(n);