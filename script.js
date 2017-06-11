(function($) {
    "use strict"; // Start of use strict

    class Image {
      constructor(i, n){
        this.img = '#'+i+'-'+n;
        this.modal = '#'+'m-'+i+'-'+n;
        this.modalImg = '#'+'mi-'+i+'-'+n;
        this.captionText = '#'+'c-'+i+'-'+n;
        this.close = '#'+'cm-'+i+'-'+n;
      }
    }

    $(document).ready(function() {
      // Modal logic
      var images = [
        new Image('jc', 1),new Image('jc', 2),new Image('jc',3),
        new Image('rw',1),new Image('rw',2),new Image('rw',3),
        new Image('mm',1),new Image('mm', 2),new Image('mm',3),
        new Image('ms', 1),new Image('ms', 2),new Image('ms', 3),
      ];
      images.map(function(img){
        $(img.img).click(function(){
            $(img.modal).css('display', 'block');
            $(img.modalImg).attr('src', this.src);
            $('body').css('overflow', 'hidden');
        });
        $(img.close).click(function(){
            $(img.modal).css('display', 'none');
            $('body').css('overflow', 'scroll');
        });
      })
    })

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict
