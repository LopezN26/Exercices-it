
new Typed ("#typed", {
    strings: ["tant pis", "jeej","tuuj","awoin"],
    typeSpeed : 10
});

$(document).ready(function()
{
    $(".owl-carousel").owlCarousel
        (
            {
            items:1,
            }
        )
});

$(function(){
    $.scrollIt();
    // upKey: 38,             // key code to navigate to the next section
    //     downKey: 40,           // key code to navigate to the previous section
    //     easing: 'linear',      // the easing function for animation
    //     scrollTime: 600,       // how long (in ms) the animation takes
    //     activeClass: 'active', // class given to the active nav element
    //     onPageChange: null,    // function(pageIndex) that is called when page is changed
    //     topOffset: 0           // offste (in px) for fixed top navigation
});

$("nav i").on("click",function () {
    $("li[data-scroll-nav]").toggleClass("invisible");
    $("nav").toggleClass("background");

});