$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.navbar').css('background', "#212529");
    } else {
        $('.navbar').css('background', "transparent");
    }
})
$('.reviews-sider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    smartSpeed: 600
})
$('.blog-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 600,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
