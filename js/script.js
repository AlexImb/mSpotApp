/*$(window).load(function() {
    	$(".loader").delay(500).fadeOut("slow", function() { $(".loader").remove(); } );   
}) */

$(document).ready(function () {

    skrollr.init( {forceHeight: false} );

    $('.container-watch').waypoint(function () {
        $('.container-watch').css( "background-color", "#000000" );
        $('.h7').css( "color", "#ffffff" );
        $('.p7').css( "color", "#ffffff" );
        $('.watch-nav').css( "opacity", "1" ).delay(3000);
        $('.watch-mes').css({ "opacity" : "1",  "margin-top" : "60%"}).delay(3000);
    }, {
        offset: '40%'
    });
    $('.img-fade').waypoint(function () {
        $('.img-fade').css( "opacity", "1" );
    }, {
        offset: '80%'
    });

});