// This file contains the JavaScript code that runs when the page loads.

document.addEventListener('DOMContentLoaded', function() {
    // Code to execute when the page is fully loaded
    console.log('La página ha sido cargada correctamente.');

    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('¡Botón clickeado!');
        });
    }
});