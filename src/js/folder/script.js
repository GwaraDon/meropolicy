
// 'use strict';

var hero_s = $(".banner");
hero_s.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ['<i class="icofont-line-block-left " style="font-size: 35px"></i>', '<i class="icofont-line-block-right" style="font-size: 35px"></i>'],
    smartSpeed: 5200,
    autoHeight: false,
    autoplay: true
});

$(".recent-news_slider").owlCarousel({
    loop:true,
    items: 3,
    dots:false,
    margin:15,
    navText: ['<i class="icofont-thin-left " style="font-size: 35px"></i>', '<i class="icofont-thin-right" style="font-size: 35px"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    maxWidth:990,
    autoplay: true,
    nav:true,
    autoplayHoverPause:true,
    responsive:{
        320:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1328:{
            items:4
        },
        1400:{
            items:4
        }
    }

});


// slider range
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );

//slick slider
$('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    speed: 1000,
    asNavFor: '.slider-thumb',
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
});
$('.slider-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider-content',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});


// external js: isotope.pkgd.js
$(document).ready(function(){
    $('.portfolio-item').isotope(function(){
        itemSelector:'.item'
    });
    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');


        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });
});


$('#bars').click(function(e) {
    $('.mobile-navigation').slideToggle("slow");
    e.stopPropagation();
    $('body').click(function(){
        $('.mobile-navigation').hide();
    });
    // Alternative animation for example
    // slideToggle("fast");
});
$('#plus').click(function(e) {
    $('.mobile-sub-menu').slideToggle("fast");
    $('.tog').toggleClass(" icofont-plus icofont-minus");
    e.stopPropagation();
    $('body').click(function(){
        $('.mobile-sub-menu').hide();
    });
});



