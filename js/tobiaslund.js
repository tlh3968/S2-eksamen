const readMoreButton = document.getElementById('read-more');
    
// Tjekker om elementet med id 'read-more' findes
if (readMoreButton) {
    // Tilføjer en event listener til read-more knappen, der lytter efter brugerens klik
    readMoreButton.addEventListener('click', function() {
        // Udregner 80% af viewport højden
        const scrollAmount = window.innerHeight * 0.8;
        
        // Scroller vinduet ned med 80% af viewport højden
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth' // Giver den en smooth animation
        });
    });
} 

else {
    console.log("Fejl: Læs mere knap ikke fundet");
}

// Logo slides sektion

// Hent elementet med id'et 'clientslide'
const clientslide = document.getElementById('clientslide');

// Array af billed-URL'er for klientlogoer
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
];

const cloneCount = 10; // Justér antallet af duplikationer af sliden

// Opret billedelement, giv den et URL og tilføj den til 'clientslide' elementet
imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    clientslide.appendChild(img);
});

const images = clientslide.children; // Hent alle billed elementer i 'clientslide'
const numImages = images.length;

// Dupliker billederne og tilføj dem til slutningen af slideshowet
for (let i = 0; i < cloneCount * numImages; i++) {
    const clone = images[i % numImages].cloneNode(true); // Opret en klon af hvert billede
    clientslide.appendChild(clone); // Tilføj klonen til 'clientslide'   
}