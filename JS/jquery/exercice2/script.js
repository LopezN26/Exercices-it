$(document).ready(function(){
    $("#orange").on("click",orange);
});

$(document).ready(function(){
    $("#noir").on("click",noir);
});

$(document).ready(function(){
    $("#violet").on("click",function(){$("p").css("color","purple");});
});

function orange()
{
    $("p").css("color","orange");
}

function noir()
{
    $("p").css("color","black");
}