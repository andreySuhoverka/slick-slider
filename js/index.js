$(document).ready(function() {

    $('.responsive').slick({
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });


});