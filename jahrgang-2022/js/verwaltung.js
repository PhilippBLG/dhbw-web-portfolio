
function calculateDistance(currentIndex) {
    if (currentIndex === fahrtenbuch.length - 1) {
        let currentFahrt = fahrtenbuch[currentIndex];
        let previousFahrt = fahrtenbuch[currentIndex - 1];
        return fahrtenbuch[fahrtenbuch.length - 1].kilometerstand;
    } else if (currentIndex >= 0 && currentIndex < fahrtenbuch.length - 1) {
        let currentFahrt = fahrtenbuch[currentIndex];
        let nextFahrt = fahrtenbuch[currentIndex + 1];
        return currentFahrt.kilometerstand - nextFahrt.kilometerstand;
    }
    return 0; // Wenn es keine vorherige Fahrt gibt, ist die Differenz 0
}

function loadFahrtenbuch() {
    const fahrtenbuchData = localStorage.getItem('fahrtenbuch');
    if (fahrtenbuchData) {
        fahrtenbuch = JSON.parse(fahrtenbuchData);
    }
}


// Funktion zum Anzeigen des Fahrtenbuchs
function showFahrtenbuch() {
    const fahrtenbuchContainer = document.getElementById("fahrtenbuch-container");
    fahrtenbuchContainer.innerHTML = ""; // Leeren des Containers, um vorherige Einträge zu entfernen

    // Sortieren des Fahrtenbuchs nach dem Fahrt.Datum
    fahrtenbuch.sort((a, b) => new Date(a.datum) - new Date(b.datum));
    fahrtenbuch.reverse(); // Umkehren der Reihenfolge, damit die neueste Fahrt zuerst angezeigt wird

    for (let i = 0; i < fahrtenbuch.length; i++) {
        let fahrt = fahrtenbuch[i];

        // Erstellen der HTML-Elemente für die Fahrt
        const fahrtElement = document.createElement("div");
        fahrtElement.classList.add("app-grid");

        // Erstellen des Bild-Elements
        const calendar = document.createElement("img");
        calendar.src = "img/calendar.png";

        const datumElement = document.createElement("p");
        const date = new Date(fahrt.datum);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        datumElement.textContent = `${day}.${month}.${year}`;

        const counter = document.createElement("img");
        counter.src = "img/counter.png";

        const kilometerstandElement = document.createElement("p");
        kilometerstandElement.textContent = `${fahrt.kilometerstand} km`;

        const differenzElement = document.createElement("p");
        differenzElement.textContent = `${calculateDistance(i)} km`;

        const distance = document.createElement("img");
        distance.src = "img/distance.png";

        const note = document.createElement("img");
        note.src = "img/note.png";

        const grundElement = document.createElement("p");
        grundElement.textContent = `${fahrt.grund}`;

        // Erstellen des Lösch-Buttons
        const deleteButton = document.createElement("img");
        deleteButton.src = "img/delete.png";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            deleteEntry(i);
        });

        // Hinzufügen der HTML-Elemente zur Fahrt
        fahrtElement.appendChild(calendar);
        fahrtElement.appendChild(datumElement);
        fahrtElement.appendChild(counter);
        fahrtElement.appendChild(kilometerstandElement);
        fahrtElement.appendChild(distance);
        fahrtElement.appendChild(differenzElement);
        fahrtElement.appendChild(note);
        fahrtElement.appendChild(grundElement);
        fahrtElement.appendChild(deleteButton);

        // Hinzufügen der Fahrt zum Fahrtenbuch-Container
        fahrtenbuchContainer.appendChild(fahrtElement);
    }
}

// Funktion zum Löschen eines Eintrags
function deleteEntry(index) {
    fahrtenbuch.splice(index, 1);
    showFahrtenbuch(); // Aktualisieren des Fahrtenbuchs nach dem Löschen
    saveFahrtenbuch(); // Speichern des Fahrtenbuchs nach dem Löschen
}



showFahrtenbuch();