$( document ).ready(function() {
    $( "#menu a").click(function( event ) {
        // Prevent immediate loading of the page with corresponding href
        event.preventDefault();
        // Grap href of the button clicked
        var href = $(this).attr('href');
        // if there is href related
        // animate scrolling
        if( href.length ) {
            $('html, body').animate({ scrollTop:  $(href).offset().top}, 600, 'swing');
        }
    });
});

$( document ).ready(function() {
    $( "#aboutus_id").click(function( event ) {
        $('html, body').animate({ scrollTop:  $("#aboutus_id").offset().top}, 600, 'swing');
    });
    $( "#contents_id").click(function( event ) {
        $('html, body').animate({ scrollTop:  $("#contents_id").offset().top}, 600, 'swing');
    });
    $( "#partners_id").click(function( event ) {
        $('html, body').animate({ scrollTop:  $("#partners_id").offset().top}, 600, 'swing');
    });
    $( "#mapid").click(function( event ) {
        $('html, body').animate({ scrollTop:  $("#mapid").offset().top}, 600, 'swing');
    });
});

$( document ).ready(function() {
    $( "#logo").click(function( event ) {
        alert($(window).width());
    });
});
// Slide up and down
/*
$(function(){
    $('#contents_body li').on('click',function(){
        $('#contents_body li.active').removeClass('active');
        $(this).addClass('active');

        var panelToShow = $(this).attr('rel')
        
        $('.tab-content .active').slideUp(300,function(){
            $(this).removeClass('active');
            $('#' + panelToShow).slideDown(300, function(){
                $(this).addClass('active');
            });
        });
    });
});
*/

