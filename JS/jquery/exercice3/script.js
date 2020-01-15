$(document).ready(function(){
    $("#green").on("click",function(){
        $("p").addClass("green");
        $("p").removeClass("blue");
    })
});

$(document).ready(function(){
    $("#blue").on("click",function(){
        $("p").addClass("blue");
        $("p").removeClass("green");
    })
});

$(document).ready(function(){
    $("#bold").on("click",function(){
        $("p").addClass("gras");
    })
});



$(document).ready(function(){
    $("#ss_bold").on("click",function(){
        $("p").removeClass("gras");
    })
});

$(document).ready(function(){
    $("#italic").on("click",function(){
        $("p").toggleClass("italic");
    })
});



