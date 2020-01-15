
$(document).ready(function(){
   $("#green").on("click",function(){$("p").css("color","green");});
});
$(document).ready(function(){
    $("#blue").on("click",function(){$("li").css("color","blue");});
});
$(document).ready(function(){
    $("#orange").on("click",function(){$("li:first").css("color","orange");});
});
$(document).ready(function(){
    $("#yellow").on("click",function(){$("ul:first li:nth-child(2)").css("color","yellow");});
});

$(document).ready(function(){
    $("#red").on("click",function(){$(".red").css("color","red");})
});

$(document).ready(function(){
    $("#pink").on("click",function(){$("#texte ul:nth-child(4) li:nth-child(2)").css("color","pink");});
});

// $(document).ready(function(){
//     $("#pink").on("click",function(){$("ul+ul li:nth-child(2)").css("color","pink");});
// });

$(document).ready(function(){
    $("#marron").on("click",function(){$("ul:first li:nth-child(4)").css("color","brown");});
});


