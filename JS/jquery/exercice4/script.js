$(document).ready(function(){
    $("#green").on("click",function(){
        $("p").hide();
    })
})

$(document).ready(function(){
    $("#blue").on("click",function(){
        $("p").show();
    })
})

$(document).ready(function(){
    $("#orange").on("click",function(){
        $("li").hide();
    })
})

$(document).ready(function(){
    $("#yellow").on("click",function(){
        $("li").show();
    })
})

$(document).ready(function(){
    $("#red").on("click",function(){
        $("p").hide("fast");
    })
})

$(document).ready(function(){
    $("#pink").on("click",function(){
        $("li").show("slow");
    })
})

$(document).ready(function(){
    $("#marron").on("click",function(){
        $("p").fadeIn();
    })
})

$(document).ready(function(){
    $("#blanc").on("click",function(){
        $("li").fadeOut();
    })
})

