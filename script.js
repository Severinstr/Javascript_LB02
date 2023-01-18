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



/*aufgabenliste = ['Apfel', 'Birne', 'Salat'];

console.log(aufgabenliste[0]);
console.log(aufgabenliste[1]);
console.log(aufgabenliste[2]);*/












/*function autoMarke(marke, farbe) {
    /* console.log('Die Marke ist ' + marke);
     console.log('Die Farbe ist ' + farbe); 

    return 'Der ' + marke + ' ist ' + farbe;
}

let auto1 = autoMarke('Audi', 'Rot');
let auto2 = autoMarke('BMW', 'Schwarz');

console.log(auto1);
console.log(auto2);**/

/*let meineListe = ['Brot', 'Salat', 'Fleisch'];
for (let i = 1; i <= 3; i++) {
    console.log(i);
    console.log(meineListe[i - 1]);

}**/



