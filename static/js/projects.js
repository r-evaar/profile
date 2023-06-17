// Get the carousel element
var carousel = document.getElementById('carouselExampleIndicators');
// Get all the images in the carousel
var images = carousel.querySelectorAll('img');
// Loop through the images and load them asynchronously

urls = [
    'static/assets/imgs/fod.jpg',
    'static/assets/imgs/ais.jpg',
    'static/assets/imgs/ega2.jpg',
    'static/assets/imgs/ega3.jpg'
]

for (var i = 0; i < images.length; i++) {
    images[i].style.backgroundImage = 'url(' + urls[i] + ')';  
}

$('#carouselExampleIndicators').carousel({
    interval: 3000,
    cycle: true
});