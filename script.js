// Greife auf den "Jetzt Einkaufen"-Button zu
const ctaButton = document.getElementById('cta-button');

// Wenn der Button geklickt wird, zeige eine Nachricht an
ctaButton.addEventListener('click', function(event) {
    event.preventDefault(); // Verhindere, dass der Button den Link aufruft
    alert('Willkommen im Quokware-Shop! Bereit für ein tolles Einkaufserlebnis?');
});

// Greife auf das Quokka-Bild zu
const quokkaImage = document.querySelector('.hero-img');

// Füge einen Klick-Event-Listener hinzu, um das Bild zu ändern
quokkaImage.addEventListener('click', function() {
    // Ändere das Bild bei jedem Klick
    if (quokkaImage.src.includes('quokka.jpg')) {
        quokkaImage.src = 'quokki.jpg'; // Ersetze durch ein alternatives Bild
    } else {
        quokkaImage.src = 'quokka.jpg'; // Zurück zum ursprünglichen Bild
    }
});
