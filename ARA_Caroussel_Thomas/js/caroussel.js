$('.carousel.carousel-slider').carousel({fullWidth: true});
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
}