var $doc = $(document),
    $win = $(window),
    max = $doc.height() - $win.height() - 7500;

$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    var p = $win.scrollTop() / max;

    console.log(scroll);

    if (scroll == 0) {
        $('nav').css({
            "background": "transparent",
            "opacity": "100%",
        });
    } else {
        $('nav').css({
            "background": "transparent",
            "opacity": "100%",
        });
    };
});


var nav = false;
var rotateJump = 10;
var line = document.getElementById("line");


$('.menu-btn').click(function () {
    if (nav == false) {
        $('.menu-btn').addClass('open')
        nav = true,
            $('#nav-panel').css({
                "left": "50%",
                "visibility": "visible",
                "transform": "translateX(0%)"
            });
        $('article').css({
            "filter": "blur(2px)",
        });
        $('#bgsquare').css({
            "left": "0%",
        });
        $('#bgsquare2').css({
            "left": "0%",
        });
    } else if (nav == true) {
        nav = false,
            $('.menu-btn').removeClass('open')
        $('#nav-panel').css({
            "left": "100%",
            "visibility": "hidden",
            "transform": "translateX(50%)"
        });
        $('article').css({
            "filter": "blur(0px)"
        });
        $('#bgsquare').css({
            "left": "99%",
        });
        $('#bgsquare2').css({
            "left": "100%",
        });
    }
});

$('#nav-panel').css({
    "left": "0%",
});

// Hover Section

$(".tarief1").hover(function () {
    $(this).find('.arrow').show();
    $(this).find('.arrow').css({
        "opacity": "100%",
        "transform": "translate(0%, -80%)",
    });
    $(this).find('.button-tarieven a').css({
        "transform": "translateY(-50%)",
        "opacity": "0%",
    });
    $(this).find('svg').css({
        "transform": "rotateZ(90deg)",
        "left": "35%",
    });
}, function () {
    $(this).find('.arrow').css({
        "transform": "translate(0%, 0%)",
        "opacity": "0%",
    });
    $(this).find('.button-tarieven a').css({
        "transform": "translateY(0%)",
        "opacity": "100%",
    });
    $(this).find('svg').css({
        "transform": "rotateZ(0deg)",
        "left": "35%",
    });
});

// Hover Buttons


$(".button").hover(function () {
    $('.button2').css({
        "opacity": "100%",
        "transform": "translate(0%, -60%)",
    });
    $('.button').css(
        "opacity", "0%",
    );
    $('.button a').css(
        "transform", "translate(0%, -50%)",
    );
    $('.button2 img').css(
        "transform", "translate(-50%, 0%)",
    );
}, function () {
    $('.button2').css({
        "opacity": "0%",
        "transform": "translate(0%, 0%)",
    });
    $('.button').css(
        "opacity", "100%",
    );
    $('.button a').css(
        "transform", "translate(0%, 0%)",
    );
    $('.button2 img').css(
        "transform", "translate(-50%, 100%)",
    );
});

// Horizontal Carrousel

$(document).ready(function () {
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });
});