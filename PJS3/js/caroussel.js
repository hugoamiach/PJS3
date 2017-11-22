$('.carousel.carousel-slider').carousel({fullWidth: true});
setTimeout(autoplay, 5000);  
function autoplay() {   
    setTimeout(autoplay, 5000);
	$('.carousel').carousel('next');
}