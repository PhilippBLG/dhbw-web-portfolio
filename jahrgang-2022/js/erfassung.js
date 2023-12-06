
// Formular
const form = document.getElementById('fahrtenbuchForm');

    // Event Listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const datum = document.getElementById('datum').value;
        const kilometerstand = document.getElementById('kilometerstand').value;
        const grund = document.getElementById('grund').value;
        addFahrt(datum, kilometerstand, grund);
        form.reset();
        window.location.href = "verwaltung.html";
    });

// Funktion zum Speichern des Fahrtenbuchs
function addFahrt(datum, kilometerstand, grund) {
    let fahrt = {
        datum: new Date(datum),
        kilometerstand: kilometerstand,
        grund: grund,
    };
    fahrtenbuch.push(fahrt);
    saveFahrtenbuch();
}