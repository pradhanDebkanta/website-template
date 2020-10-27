// This is actually Jquery file not pure Js file

!(function ($) {
    "use strict";

    // PRELOADER 
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(200).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });


    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        autoplayTimeout: 3000,
        items: 1,
        autoplayHoverPause: true
    });



    // Stick the header at top on scroll


    $(document).ready(function () {
        $(".navbar").sticky({
            topSpacing: 0,
            zIndex: '1'
            //            backgroundColor: '#6f0000'
        });
    });



    //    For Smooth Scrolling
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // Back to top button

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // AOS LIBEBRY CONTROLLER   

    $(window).on('load', function () {
        AOS.init({
            delay: 200,
            once: false
        });
    });
    
    // prevent cut copy pest
    
    $(document).ready(function(){
        $('body').bind('cut copy paste', function(e){
            e.preventDefault();
        })
        $('body').on('contextmenu', function(e){
            return false;
        })
    });

})(jQuery);
