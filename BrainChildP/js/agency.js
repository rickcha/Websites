/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#dropdown-menu > li').click(function(){
	var e = document.getElementById("hidden-menu");
	if(e==null) {
		var e = document.getElementById("shown-menu");
		e.id = "hidden-menu";
	}
	else {
		e.id = "shown-menu";
	}
});

$('#advisory-more').click(function(){
    var e = document.getElementById("advisory-more-hide");
    if (e == null) {
        var e = document.getElementById("advisory-more-show");
        e.id = "advisory-more-hide"
    }
    else {
        e.id = "advisory-more-show"
    }
});

$('#procurement-more').click(function(){
    var e = document.getElementById("procurement-more-hide");
    if (e == null) {
        var e = document.getElementById("procurement-more-show");
        e.id = "procurement-more-hide"
    }
    else {
        e.id = "procurement-more-show"
    }
});

$('#lab-more').click(function(){
    var e = document.getElementById("lab-more-hide");
    if (e == null) {
        var e = document.getElementById("lab-more-show");
        e.id = "lab-more-hide"
    }
    else {
        e.id = "lab-more-show"
    }
});

$( document ).ready(function() {
    $( ".button-about-us" ).click(function( event ) {
        $('html, body').animate({ scrollTop: 0}, 400, 'swing');
    });
    $( ".button-what-we-do" ).click(function( event ) {
        $('html, body').animate({ scrollTop:  $('#what-we-do').offset().top-130}, 400, 'swing');
    });
    $( ".button-partners" ).click(function( event ) {
        $('html, body').animate({ scrollTop: $('#partners').offset().top-130}, 400, 'swing');
    });
    $( ".button-contact-us" ).click(function( event ) {
        $('html, body').animate({ scrollTop:  $('#contact-us').offset().top-130}, 400, 'swing');
    });
});




