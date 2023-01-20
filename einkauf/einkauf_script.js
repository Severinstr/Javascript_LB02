window.onload = function () {



    console.clear();

    let aufgabenliste = [];




    function hinzufuegen() {
        let benutzerEingabe = document.getElementById('aufgabe').value;
        aufgabenliste.push(benutzerEingabe);

        console.log(aufgabenliste);

        aufgabenlisteAnzeigen();
    }

    function aufgabenlisteAnzeigen() {
        let anzahlAufgaben = aufgabenliste.length;
        let i = 0;
        let aufgabenlisteHTML = '';
        while (i < anzahlAufgaben) {
            console.log(aufgabenliste[i]);
            let aufgabeHTML = '<p>' + aufgabenliste[i] + '</p>';
            aufgabenlisteHTML = aufgabenlisteHTML + aufgabeHTML;
            i++;

        }
        document.getElementById('aufgabenliste').innerHTML = aufgabenlisteHTML;

    }

    document.getElementById('hinzufuegen').addEventListener("click", hinzufuegen);


};
