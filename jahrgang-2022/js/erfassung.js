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