const form = document.getElementById('fahrtenbuchForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars

        // Lese die eingegebenen Werte aus den Eingabefeldern
        const datum = document.getElementById('datum').value;
        const kilometerstand = document.getElementById('kilometerstand').value;
        const grund = document.getElementById('grund').value;

        // Rufe die Funktion addFahrt auf und übergebe die Werte
        addFahrt(datum, kilometerstand, grund);

        // Setze die Eingabefelder zurück
        form.reset();
        window.location.href = "verwaltung.html";
    });

function addFahrt(datum, kilometerstand, grund) {
    let fahrt = {
        datum: new Date(datum), // Datum als Date-Objekt speichern
        kilometerstand: kilometerstand,
        grund: grund,
    };
    fahrtenbuch.push(fahrt);
    saveFahrtenbuch(); // Speichern des Fahrtenbuchs nach dem Hinzufügen einer Fahrt
}

function saveFahrtenbuch() {
    localStorage.setItem('fahrtenbuch', JSON.stringify(fahrtenbuch));
    console.log("Fahrtenbuch gespeichert!");
    console.log(fahrtenbuch);
}