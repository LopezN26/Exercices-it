//http://jihane.fr/dwmg2/api/music/
//$(form).on(‘submit’, function(e){e.preventDefault(); ...})


$(document).ready(function(){
    $("#listButton").on("click",function(){
        display();
    })
});

function display()
{
    $.ajax({
        url : "http://jihane.fr/dwmg2/api/music/liste.php", //afficher liste
        type: "GET",
        data: {},
        success : function(reponse) {
            $("main").html("");
            for (i=0;i<reponse.length;i++) {
                $("main").append("<div></div>"); //créa div ligne
                $("main>div:last-child").addClass("row");
                $("main>div:last-child").append('<div class="col-lg-1">' + reponse[i].id + '</div>'); //crea et remplissage colonne id
                $("main>div:last-child").append('<div class="col-lg-4">' + reponse[i].Titres + '</div>'); //crea et remplissage colonne titre
                $("main>div:last-child").append('<div class="col-lg-3">' + reponse[i].Artistes + '</div>'); //crea et remplissage colonne artiste
                $("main>div:last-child").append('<div class="col-lg-2"><button id="btn' + reponse[i].id + '"+repontype="button" data-toggle="modal" data-target="#Modal1" class="btn btn-secondary" data-dismiss="modal">Détails/Modifier</button></div>'); //crea et fonctionnement bouton detail/edit
                $("main>div:last-child").append('<div class="col-lg-2"><button id="sup' + reponse[i].id + '" type="button" class="btn btn-danger">Supprimer</button></div>'); //crea et fonctionnement bouton supp
                $("#btn" + reponse[i].id).on("click", {id: reponse[i].id}, read);
                $("#sup" + reponse[i].id).on("click", {id: reponse[i].id}, del);
            }
        },
        dataType : "json"
    });
}
function read(e)
{
    $("#add").css("visibility","hidden");
    $("#edit").css("visibility","visible");
    $("#id").css("display","");
   //alert(e.data.id) ;
        $.ajax({
            url : "http://jihane.fr/dwmg2/api/music/read.php", //afficher liste
            type: "GET",
            data: {
                id : e.data.id
            },
            success : function(reponse) {
                console.log(reponse);
                $("#titre").val(reponse.Titres);
                $("#id").val(reponse.id);
                $("#artiste").val(reponse.Artistes);
                $("#duree").val(reponse.Temps);
                $("#genre").val(reponse.Genres);
                $("#date").val(reponse.Dates);

            },
            dataType : "json"
        });
}

function del(e)
{
    $.ajax({
        url : "http://jihane.fr/dwmg2/api/music/delete.php", //afficher liste
        type: "GET",
        data: {
            id : e.data.id
        },
        success : function(reponse) {
            display();
        },
        dataType : "text"
    });

}
$("#edit").on("click",edit);

function edit()
{
    $.ajax({
        url :"http://jihane.fr/dwmg2/api/music/update.php",
        type : "GET",
        data: {
            id: $("#id").val(),
            Titres:$("#titre").val(),
            Genres:$("#genre").val(),
            Artistes:$("#artiste").val(),
            Dates:$("#date").val(),
            Temps:$("#duree").val(),
        },
        success : function(response)
            {
                display();
            },
            dataType: "json"
    });

}

$("#addButton").on("click",cleanmodaladd);

function cleanmodaladd()
{
    $("#edit").css("visibility","hidden");
    $("#add").css("visibility","visible");
    $("#id").css("display","none");
    $("#titre").val("");
    $("#genre").val("");
    $("#artiste").val("");
    $("#date").val("");
    $("#duree").val("");
}

$("#add").on("click",add);

function add()
{
    $.ajax({
        url :"http://jihane.fr/dwmg2/api/music/create.php",
        type : "POST",
        data: {
            Titres:$("#titre").val(),
            Genres:$("#genre").val(),
            Artistes:$("#artiste").val(),
            Dates:$("#date").val(),
            Temps:$("#duree").val(),
        },
        success : function(response)
            {
                display();
            },
            dataType: "json"
    });

}
