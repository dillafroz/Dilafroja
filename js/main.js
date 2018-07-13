/*
Table of Content
01:Preloader
02:Scroll-To-Top
03:page-scrolling
04:Highlight the top nav as scrolling occurs
05:Closes the Responsive Menu on Menu Item Click
06:owl carousel
07:Portfolio Filtering
08:Magnific Popup
*/

(function ($) {
//use strict
"use strict"; 

// Preloader 
$(window).on('load', function() {
    $('body').addClass('loaded');
});
//end preloader

//Scroll-To-Top 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});
$('.scroll-to-top').on('click',(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
}));
//end scroll to top

//jQuery for page-scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
//end page-scrolling feature

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});
//end Highlight the top nav

//Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').on('click',(function() { 
    $('.navbar-toggle:visible').click();
}));
//end Closes the Responsive Menu on Menu Item Click
// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 100
    }
})   ;
//end Offset for Main Navigation 

//start owl carousel
$('.team-slider').owlCarousel({
    navText:['<i class="fa fa-dot-circle-o" aria-hidden="true"></i>','<i class="fa fa-dot-circle-o" aria-hidden="true"></i>'],
    items:4,
    lazyLoad:true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
//end owl carousel

//Portfolio Filtering 
$('.portfolio-inner').mixItUp();
//end portfolio filter

//Magnific Popup 
$('.portfolio-popup').magnificPopup({
    type: 'image',

    gallery: { enabled: true },
    zoom: { enabled: true,
        duration: 500

    },

    image:{
        markup: '<div class="mfp-figure portfolio-pop-up">'+
        '<div class="mfp-close"></div>'+
        '<div class="mfp-img"></div>'+
        '<div class="mfp-bottom-bar portfolio_title">'+
        '<div class="mfp-title"></div>'+
        '<div class="mfp-counter"></div>'+
        '</div>'+
        '</div>',

        titleSrc:function(item){
            return item.el.attr('title');
        }
    }
});
//end magnific popup

})(jQuery); 


