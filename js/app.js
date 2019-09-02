$(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });


    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $(function () {
        $(".timeline-Widget").css("backgound", "red");
    });


    $('.about_slider').owlCarousel({
        loop: true,
        margin: 10,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        },
        navText: ["<i class='text-danger fa fa-chevron-left'></i>", "<i class='text-danger fa fa-chevron-right'></i>"]

    });




    //nav menu area

    $('#navbarNav a').click(function (idnone) {
        idnone.preventDefault();
        var hash = this.hash;
        var position = $(hash).offset().top;
        $('html').animate({
          scrollTop: position
        }, 900);
      })



       //body scroll 
       $("body").niceScroll({
        cursorcolor: "#B300FE",
        cursorwidth: "10px",
  
      });



      if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
      window.onmousewheel = document.onmousewheel = wheel;
  
      function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;
  
        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
      }
  
      var goUp = true;
      var end = null;
      var interval = null;
  
      function handle(delta) {
        var animationInterval = 20; //lower is faster
        var scrollSpeed = 30; //lower is faster
  
        if (end == null) {
          end = $(window).scrollTop();
        }
        end -= 20 * delta;
        goUp = delta > 0;
  
        if (interval == null) {
          interval = setInterval(function () {
            var scrollTop = $(window).scrollTop();
            var step = Math.round((end - scrollTop) / scrollSpeed);
            if (scrollTop <= 0 ||
              scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
              goUp && step > -1 ||
              !goUp && step < 1) {
              clearInterval(interval);
              interval = null;
              end = null;
            }
            $(window).scrollTop(scrollTop + step);
          }, animationInterval);
        }
      }
 



      $('.testimonial_carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    });




