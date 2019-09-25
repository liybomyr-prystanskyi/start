var list = $("#lightgallery .item");
var numToShow = 8;
var button = $("#loadMore");
var numInList = list.length;
list.hide();
if (numInList > numToShow) {
  button.show();
}
list.slice(0, numToShow).show();

button.click(function(){
    
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
});




$("ul li:has(ul)").addClass("has-submenu");
$("ul li ul").addClass("sub-menu");
$("ul.dropdown li").hover(function () {
    $(this).addClass("hover")
}, function () {
    $(this).removeClass("hover")
});
var $menu = $("#menu"), $menulink = $("#spinner-form"), $search = $("#search"), $search_box = $(".search_box"),
    $menuTrigger = $(".has-submenu > a");
$menulink.click(function (e) {
    $menulink.toggleClass("active");
    $menu.toggleClass("active");
    if ($search.hasClass("active")) {
        $(".menu.active").css("padding-top", "50px")
    }
});
$search.click(function (e) {
    e.preventDefault();
    $search_box.toggleClass("active")
});
$menuTrigger.click(function (e) {
    e.preventDefault();
    var t = $(this);
    t.toggleClass("active").next("ul").toggleClass("active")
});
$("ul li:has(ul)");
$(function () {
    var e = $(document).scrollTop();
    var t = $(".nav_wrapper").outerHeight();
    $(window).scroll(function () {
        var n = $(document).scrollTop();
        if ($(document).scrollTop() >= 50) {
            $(".nav_wrapper").css("position", "fixed")
        } else {
            $(".nav_wrapper").css("position", "fixed")
        }
        if (n > t) {
            $(".nav_wrapper").addClass("scroll")
        } else {
            $(".nav_wrapper").removeClass("scroll")
        }
        if (n > e) {
            $(".nav_wrapper").removeClass("no-scroll")
        } else {
            $(".nav_wrapper").addClass("no-scroll")
        }
        e = $(document).scrollTop()
    })
})

$('.classes__product-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1, 
                 centerMode: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }
    ]
});

$('.classes__arrows__left').click(function () {
    $('.classes__product-slider').slick('slickPrev');
});

$('.classes__arrows__right').click(function () {
    $('.classes__product-slider').slick('slickNext');
});



$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
});
$('.happy-client__content__arrows__left').click(function () {
    $('.testimonial-slider').slick('slickPrev');
});

$('.happy-client__content__arrows__right').click(function () {
    $('.testimonial-slider').slick('slickNext');
});




// Init AOS
// AOS.init();