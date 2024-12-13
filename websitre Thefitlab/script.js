// Aggiungi questa funzione per un effetto di scroll fluido
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Ottieni l'ID della sezione
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Scorrimento al top della sezione, con un piccolo margine
            behavior: 'smooth' // Effetto di scroll morbido
        });
    });
});

// Funzione di validazione per il modulo di contatto
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impedisce l'invio del modulo senza validazione

    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;

    // Verifica che i campi non siano vuoti
    if (!name || !email || !message) {
        alert('Per favore, completa tutti i campi!');
        return;
    }

    // Verifica che l'email sia nel formato corretto
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Per favore, inserisci un\'email valida!');
        return;
    }

    // Se tutto è valido, invia il modulo (qui simuleremo un invio)
    alert('Modulo inviato con successo!');
    this.reset(); // Resetta il modulo
});

// Mostra un popup dopo 10 secondi
setTimeout(function() {
    document.querySelector('.modal').style.display = 'flex';
}, 10000);

// Chiudi il popup quando l'utente clicca sulla "X"
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

// Effetto Parallax
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Funzione per il menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
// Scroll Animato
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Validazione del Modulo di Contatto
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('Per favore, completa tutti i campi!');
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Per favore, inserisci un\'email valida!');
        return;
    }

    alert('Modulo inviato con successo!');
    this.reset();
});

// Popup Offerta Speciale
setTimeout(function() {
    document.querySelector('.modal').style.display = 'flex';
}, 10000);

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

// Effetto Parallax
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Menu Toggle per Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
