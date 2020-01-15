$(document).ready(function(){
    $("#btn1").on("click",function(){
        $("li:first").text("Hello World !");
    })
})

$(document).ready(function(){
    $("#btn2").on("click",function(){
        $("ul:first li:nth-child(2)").append(".. ceci est un ajout ..");
    })
})

$(document).ready(function(){
    $("#btn3").on("click",function(){
        $("ul:first li:nth-child(3)").prepend(".. ceci est un ajout ..");
    })
})

$(document).ready(function(){
    $("#btn4").on("click",function(){
        $("ul:first").append("<li></li>");
        $("ul:first li:last-child").append("Je suis un nouveau li");
    })
})

$(document).ready(function(){
    $("#btn5").on("click",function(){
        var clone =$("ul+ul").clone();
        $("ul:first").before(clone);
    })
})

$(document).ready(function(){
    $("#btn6").on("click",function(){
        $("p").slideUp();
    })
})
$(document).ready(function(){
    $("#btn7").on("click",function(){
        $("p").slideDown();
    })
})

$(document).ready(function(){
    $("#btn8").on("click",function(){
        $("ul:first li:first-child").append(".....c'est moi le premier enfant.....");
    })
})

$(document).ready(function(){
    $("#btn9").on("click",function(){
        $("ul:first li:last-child").append(".....c'est moi le dernier enfant.....");
    })
})

