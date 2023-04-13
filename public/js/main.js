(function ($) {
    "use strict";

// // create config object: rootMargin and threshold
// // are two properties exposed by the interface
// const config = {
//     rootMargin: '0px 0px 50px 0px',
//     threshold: 0
//   };
  
//   // register the config object with an instance
//   // of intersectionObserver
//   let observer = new IntersectionObserver(function(entries, self) {
//     // iterate over each entry
//     entries.forEach(entry => {
//       // process just the images that are intersecting.
//       // isIntersecting is a property exposed by the interface
//       if(entry.isIntersecting) {
//         // custom function that copies the path to the img
//         // from data-src to src
//         // preloadImage(entry.target);
//         // the image is now in place, stop watching
//         let lazyImage = entry.target;
//           lazyImage.src = lazyImage.dataset.src;
//           lazyImage.srcset = lazyImage.dataset.srcset;
//           lazyImage.classList.remove("lazy");
//           observer.unobserve(entry.target);
//       }
//     });
//   }, config);

// //   const imgs = document.querySelectorAll('[data-src]');
// //   debugger;
// // imgs.forEach(img => {
// //   observer.observe(img);
// // });

// function myMap() {
//     debugger;
//     var rkpr1= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     };
//     var AmmaGarden1 = {
//         center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:5,
//     }

//     // var rkpr = new google.maps.Map(document.getElementById("rkpr"),rkpr1);
//     // var AmmaGarden = new google.maps.Map(document.getElementById("AmmaGarden"),AmmaGarden1);

//     }
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

$(".btn-play.mx-auto").on("click",(e)=>{
    debugger;
    // $("#video").src= e.currentTarget.getAttribute("src");
    $("#video").attr("src",e.currentTarget.getAttribute("src"));
})
$(".close").on("click",()=>{
    $("#video").attr("src","");
})
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        // $('#videoModal').on('shown.bs.modal', function (e) {
        //     debugger;
        //     $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        // })

        // $('#videoModal').on('hide.bs.modal', function (e) {
        //     $("#video").attr('src', $videoSrc);
        // })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    $(document).on("click",(e)=>{
        
        if(!e.target.dataset.filter){
            $(".first,.second").show();
            $('[data-filter]').removeClass("hover")
        }})
    $('[data-filter]').on("click",(e)=>{
        $(".first,.second").hide();
        $('[data-filter]').removeClass("hover")
        e.target.classList.add("hover");
        $(e.target.dataset.filter).show();
    })
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

