$('.first.owl-carousel').owlCarousel({
    margin:10,
       autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.second.owl-carousel').owlCarousel({
    margin:30,
       autoplay:true,
    autoplayTimeout:1000,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


AOS.init();

 $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#section2').addClass("sticky");
            }
            else {
                $('#section2').removeClass("sticky");
            }
        });


$('.third.owl-carousel').owlCarousel({
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.four.owl-carousel').owlCarousel({
    margin:20,
    loop:true,
      autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.five.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.six.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
