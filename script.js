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

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    function toggleDropdown() {
        dropdownMenu.classList.toggle('open');
    }

    // Event Listener nur für mobile Geräte (max-width 767px)
    if (window.innerWidth <= 767) {
        menuIcon.addEventListener('click', toggleDropdown);
    }

    // Falls sich die Bildschirmgröße ändert
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 767) {
            menuIcon.addEventListener('click', toggleDropdown);
        } else {
            menuIcon.removeEventListener('click', toggleDropdown);
            dropdownMenu.classList.remove('open'); // Schließe Dropdown, wenn zu Desktop gewechselt wird
        }
    });
});