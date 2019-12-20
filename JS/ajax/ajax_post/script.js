var request = new XMLHttpRequest();

function sendAjax()
{
    request.open("POST","http://jihane.fr/ajax/form.php");
    var form = document.getElementById("formuulaire");
    var formData = new FormData(form);
    request.send(formData);
}

request.onload = function()
{
    var response = request.responseText;
    if (response==="ok")
    {
        document.getElementById("merci").className="";
        document.getElementById("erreur").className="invisible";
    }
    else if (response==="erreur")
    {
        document.getElementById("merci").className="invisible";
        document.getElementById("erreur").className="";

    }
    else
    {
        console.log("c kc");
    }

}