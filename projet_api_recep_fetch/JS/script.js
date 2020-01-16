//http://jihane.fr/dwmg2/api/music/
//$(form).on(‘submit’, function(e){e.preventDefault(); ...})


$(document).ready(function(){
    $("#listButton").on("click",function(){
        display();
    })
});

$(document).ready(function(){
        display();
});

function display()
{
    fetch ("http://jihane.fr/dwmg2/api/biere/bieres.php")
        .then(
            function(reponse){
                return reponse.json();
            }
        )
        .then(
            function (donnee) {
                //console.log(donnee);
                $("main").html("");
                for (i = 0; i < donnee.length; i++) {
                    $("main").append("<div></div>"); //créa div ligne
                    $("main>div:last-child").addClass("row");
                    $("main>div:last-child").append('<div class="col-lg-1">' + donnee[i].id + '</div>'); //crea et remplissage colonne id
                    $("main>div:last-child").append('<div class="col-lg-4">' + donnee[i].nom + '</div>'); //crea et remplissage colonne nom
                    $("main>div:last-child").append('<div class="col-lg-2"><button id="btn' + donnee[i].id + '"+repontype="button" data-toggle="modal" data-target="#Modal1" class="btn btn-secondary" data-dismiss="modal">Détails/Modifier</button></div>'); //crea et fonctionnement bouton detail/edit
                    $("main>div:last-child").append('<div class="col-lg-2"><button id="sup' + donnee[i].id + '" type="button" class="btn btn-danger">Supprimer</button></div>'); //crea et fonctionnement bouton supp
                    $("#btn" + donnee[i].id).on("click", {id: donnee[i].id}, read);
                    $("#sup" + donnee[i].id).on("click", {id: donnee[i].id}, del);
                }
            })
}

function read(e)
{
    $("#add").css("visibility","hidden");
    $("#edit").css("visibility","visible");
    $("#id").css("display","");
    fetch ("http://jihane.fr/dwmg2/api/biere/unebiere.php?id="+e.data.id)
        .then(
            function(reponse){
                return reponse.json();
            })
        .then(function(data){
            console.log(data);
            $("#nom").val(data.nom);
            $("#id").val(data.id);
            $("#degres").val(data.degres);
            $("#prix").val(data.prix);
            $("#couleur").val(data.couleur);
            $("#amertume").val(data.amertume);
            $("#pays").val(data.pays);
        })
}

function del(e)
{
    fetch("http://jihane.fr/dwmg2/api/biere/deletebiere.php?id="+e.data.id)
        .then(function(response){
            return response.text;
        })
    display();
}
$("#edit").on("click",edit);

function edit()
{

    fetch('http://jihane.fr/dwmg2/api/biere/update.php?nom='+$("#nom").val()+'&pays='+$("#pays").val()+'&degres='+$("#degres").val()+'&amertume='+$("#amertume").val()+'&couleur='+$("#couleur").val()+'&prix='+$("#prix").val()+'&id='+$("#id").val())
        .then(function(response){
            return response.text();
        })
        .then()
        {
        $("#Modal1").modal("hide");
        }
    display();
}

$("#addButton").on("click",cleanmodaladd);

function cleanmodaladd()
{
    $("#edit").css("visibility","hidden");
    $("#add").css("visibility","visible");
    $("#id").css("display","none");
    $("#nom").val("");
    $("#id").val("");
    $("#degres").val("");
    $("#prix").val("");
    $("#couleur").val("");
    $("#amertume").val("");
    $("#pays").val("");
}

$("#add").on("click",add);

function add() {
    var post = {method: "POST",};
    /*fetch ('http://jihane.fr/dwmg2/api/biere/newbeer.php?nom='+$("#nom").val()+'&pays='+$("#pays").val()+'&degres='+$("#degres").val()+'&amertume='+$("#amertume").val()+'&couleur='+$("#couleur").val()+'&prix='+$("#prix").val(),post)
        .then(function(response)
        {
            return response.json();
        })
        .then(function()
        {
            alert("success");
            display();
            $("#Modal1").modal("hide");
        })*/
    /*fetch ('http://jihane.fr/dwmg2/api/biere/newbeer.php',{method: "POST",
    body: donnee
    })
        .then(function(response)
        {
            return response.json();
        })
        .then(function()
        {
            alert("success");
            display();
            $("#Modal1").modal("hide");
        })
}*/

    $(document).ready(function()
    {
        $("select").change(function()
        {
            var choix = $(this).children("option:selected").val();
            tri(choix);
        })
    });

    function tri(choix) {
        alert(choix);
        var type = prompt("Par quel(le) " + choix + " trier ?");
        fetch("http://jihane.fr/dwmg2/api/biere/tri.php?" + choix + "=" + type)
            .then(function (response) {
                return response.json;
            })
            .then(function (donnee) {
                $("main").html("");
                for (i = 0; i < donnee.length; i++) {
                    $("main").append("<div></div>"); //créa div ligne
                    $("main>div:last-child").addClass("row");
                    $("main>div:last-child").append('<div class="col-lg-1">' + donnee[i].id + '</div>'); //crea et remplissage colonne id
                    $("main>div:last-child").append('<div class="col-lg-4">' + donnee[i].nom + '</div>'); //crea et remplissage colonne nom
                    $("main>div:last-child").append('<div class="col-lg-2"><button id="btn' + donnee[i].id + '"+repontype="button" data-toggle="modal" data-target="#Modal1" class="btn btn-secondary" data-dismiss="modal">Détails/Modifier</button></div>'); //crea et fonctionnement bouton detail/edit
                    $("main>div:last-child").append('<div class="col-lg-2"><button id="sup' + donnee[i].id + '" type="button" class="btn btn-danger">Supprimer</button></div>'); //crea et fonctionnement bouton supp
                    $("#btn" + donnee[i].id).on("click", {id: donnee[i].id}, read);
                    $("#sup" + donnee[i].id).on("click", {id: donnee[i].id}, del);
                }
            })
    }
}



