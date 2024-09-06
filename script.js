// script.js

document.addEventListener('DOMContentLoaded', function() {
   const video = document.getElementById('header_video');
   if(video) {
       video.playbackRate = 0.5; // 0.5 bedeutet halbe Geschwindigkeit
   }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.team-image img.hidden');
    console.log('Images:', images); // Überprüfen, ob die Bilder gefunden werden

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Intersecting:', entry.target); // Überprüfen, ob das Bild im Sichtbereich ist
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                console.log('Class after intersection:', entry.target.className); // Überprüfen der angewendeten Klassen
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});

