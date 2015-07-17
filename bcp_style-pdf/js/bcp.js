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

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function flipIt(){
	var id = '#advisory-img'
	if (isScrolledIntoView(id)){
		$(id).addClass('continuous-flip');
	}
	else {
		$(id).removeClass('continuous-flip');
	}
}

setInterval(function () {flipIt()}, 1000);