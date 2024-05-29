const readMoreButton = document.getElementById('read-more');
    
// Tjekker om elementet med id "read-more" findes
if (readMoreButton) {
    // Tilføjer en event listener til read-more knappen, der lytter efter brugerens klik
    readMoreButton.addEventListener('click', function() {
        // Udregner 80% af viewport højden
        const scrollAmount = window.innerHeight * 0.8;
        
        // Scroller vinduet ned med 80% af viewport højden
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth' // Smooth scroll animation
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const clientslide = document.getElementById('clientslide');
    const imageUrls = [
                    'img/client-logos/aperture.webp',
                    'img/client-logos/black-mesa.webp',
                    'img/client-logos/blume.webp',
                    'img/client-logos/buy-n-large.webp',
                    'img/client-logos/cyberdyne.webp',
                    'img/client-logos/dunder-mifflin.webp',
                    'img/client-logos/in-gen.webp',
                    'img/client-logos/weyland.webp',
                    'img/client-logos/abstergo.webp'
        // Add more image URLs as needed
    ];
    const cloneCount = 2; // Adjust this number as needed for the desired repetition

    // Create and append image elements
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        clientslide.appendChild(img);
    });

    const images = clientslide.children;
    const numImages = images.length;

    // Clone the images and append them to the end of the slideshow
    for (let i = 0; i < cloneCount * numImages; i++) {
        const clone = images[i % numImages].cloneNode(true);
        clientslide.appendChild(clone);
    }
});
