var originalBG = $(".nav a").css("background-color");

$('.nav li:not(".active") a').mousemove(function(e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var xy = x + " " + y;
    var bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
    var bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

    $(this).css({
        background: bgWebKit + ", " + bgMoz
    });
}).mouseleave(function() {
    $(this).css({
        background: originalBG
    });
});
