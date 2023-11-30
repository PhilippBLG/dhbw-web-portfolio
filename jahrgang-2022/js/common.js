let fahrtenbuch = JSON.parse(localStorage.getItem('fahrtenbuch')) || [];
function saveFahrtenbuch() {
    localStorage.setItem('fahrtenbuch', JSON.stringify(fahrtenbuch));
    console.log("Fahrtenbuch gespeichert!");
    console.log(fahrtenbuch);
}