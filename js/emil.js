// Global variable
let slideIndex = 1;
showSlides(slideIndex);

// Function to increment slide index and show the corresponding slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide based on the given index
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display the correct slide and update breadcrumbs
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let breadcrumbs = document.getElementsByClassName("breadcrumb");

    // Wrap around slide index if out of bounds
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove 'active' class from all breadcrumbs
    for (i = 0; i < breadcrumbs.length; i++) {
        breadcrumbs[i].className = breadcrumbs[i].className.replace(" active", "");
    }

    // Show the current slide and set the corresponding breadcrumb to active
    slides[slideIndex-1].style.display = "block";
    breadcrumbs[slideIndex-1].className += " active";
}

// Example of adding event listeners to handle button clicks
document.getElementById("prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.getElementById("next").addEventListener("click", function() {
    plusSlides(1);
});

document.getElementById("slide1").addEventListener("click", function() {
    currentSlide(1);
});

document.getElementById("slide2").addEventListener("click", function() {
    currentSlide(2);
});