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

    $('.testimonial_section').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: ["<i class='text-danger fa fa-chevron-left'></i>", "<i class='text-danger fa fa-chevron-right'></i>"]
        
    })


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






$('.testimonial_slide').owlCarousel({
    loop: true,
            margin: 10,
             autoplay:true,
             autoplayTimeout:1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            },
            navText: ["<i class='text-danger fa fa-chevron-left'></i>", "<i class='text-danger fa fa-chevron-right'></i>"]
    
        });
    });




