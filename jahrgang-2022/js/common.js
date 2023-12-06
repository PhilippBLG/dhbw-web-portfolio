// Autor: Philipp Buling

// Array für das Fahrtenbuch
let fahrtenbuch = JSON.parse(localStorage.getItem('fahrtenbuch')) || [];

// Funktion zum Speichern des Fahrtenbuchs
function saveFahrtenbuch() {
    localStorage.setItem('fahrtenbuch', JSON.stringify(fahrtenbuch));
    console.log("Fahrtenbuch gespeichert!");
    console.log(fahrtenbuch);
}