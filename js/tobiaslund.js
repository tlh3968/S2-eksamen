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