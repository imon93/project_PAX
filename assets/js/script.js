$(document).ready(function() {

    $(window).on('load', function() {
        $('.center').slideUp(1500)
    });

    $('.back_to_top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500)
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('.navbar').addClass('third_color')
            $('.back_to_top').fadeIn(500)
        }
        else{
            $('.navbar').removeClass('third_color')
            $('.back_to_top').fadeOut(500)
        }
    });
});

// SWIPER JS 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    clickable: true,
});

// MIXITUP JS

var mixer = mixitup('.mixitup');
