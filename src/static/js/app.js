//bizwrap v1.3



$( window ).resize(function() {
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
});
/* ==============================================
 Sticky Navbar
 =============================================== */

$(document).ready(function() {
    $(".sticky").sticky({topSpacing: 0});

    //search trigger
    jQuery('.icon-search, .search-close').click(function () {
        jQuery('.search-form-nav').animate({height: 'toggle'}, 500);
    });

    $(function() {
  $('.smooth-scroll a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});




/*=========================*/
/*====main navigation hover dropdown====*/
/*==========================*/
$(document).ready(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});

/*====flex slider for main slider or testimonials====*/
$('.main-flex-slider,.testimonials').flexslider({
    slideshowSpeed: 5000,
    directionNav: false,
    animation: "fade"
});

/*========portfolio mix====*/
/*$('#grid').mixitup('#grid');*/

/*========tooltip and popovers====*/

$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();


/*========flex-gallery slide====*/
$(window).on('load', function() {
    $('.flexslider').flexslider({
        directionNav: false,
        slideshowSpeed: 3000,
        animation: "fade"
    });
});

/*=========================*/
     /*========Animation on scroll with wow.js====*/
     /*==========================*/

   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       true
      }
    );
    wow.init();

    /* -------------------
 Parallax Sections
 ---------------------*/
if (!Modernizr.touch) {
    $('.parallax-1').parallax("50%", 0.5);
    $('.page-tree-bg').parallax("50%", 0.5);
}

/**
 *  Code that sets footer copyright year
 */

$(document).ready(function() {

	var d = new Date();
	var copyYear = d.getFullYear();

	$('#copy-year').text(copyYear);

});


