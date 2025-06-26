// This file contains the JavaScript code that runs when the page loads.

document.addEventListener('DOMContentLoaded', function() {
    // Code to execute when the page is fully loaded
    console.log('¡El tren de las vocales está listo!');

    // Animación simple para el título
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.transition = 'transform 0.3s ease';
        titulo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        titulo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('¡Botón clickeado!');
        });
    }
});