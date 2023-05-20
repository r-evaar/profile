// Get all the anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

const toggler = document.querySelector('.navbar-toggler');
const navbar_collapes = document.querySelector('.navbar-collapse');

// Add click event listeners to each anchor link
anchorLinks.forEach(function(anchorLink) {
    anchorLink.addEventListener('click', function(e) {

    var collapsed = $(".navbar-toggler").is(":visible");
    var offset = 0;

    if ( collapsed ) {
        toggler.click();
        offset = navbar_collapes.scrollHeight;
    }

    e.preventDefault(); // Prevent the default link behavior

    // Get the target element's ID from the link's href attribute
    const targetId = anchorLink.getAttribute('href');

    // Calculate the target position
    const targetPosition = document.querySelector(targetId).offsetTop - 76 - offset;

    // Scroll smoothly to the target position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    });
});