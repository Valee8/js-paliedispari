// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let minComputer = 1;

let maxComputer = 5;

let sceltaUtente = prompt("Scegli pari o dispari (p o d)");

while (sceltaUtente != "p" && sceltaUtente != "d") {
    sceltaUtente = prompt("Scegli pari o dispari (p o d)");
}

console.log(sceltaUtente);

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

while (numeroUtente <= 0 || numeroUtente > 5) {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

console.log("Numero scelto dall'utente: ", numeroUtente);

let numeroComputer = generaNumeroRandom(minComputer, maxComputer);

console.log("Numero generato dal computer: ", numeroComputer);

const sommaNumeri = numeroComputer + numeroUtente;

console.log("Somma dei numeri: ", sommaNumeri);

pariODispari(sommaNumeri, sceltaUtente);


// Funzione per generare numero random
function generaNumeroRandom(min, max) {
    const randomComputer = Math.floor(Math.random() * max) + min;

    return randomComputer;
}

// Funzione per controllare se la somma è pari o dispari
function pariODispari(somma, scelta) {

    console.log("Scelta ", scelta);

    if (somma % 2 === 0 && scelta === "p") {
        console.log("Hai vinto");
    } 
    else if (somma % 2 != 0 && scelta === "d") {
        console.log("Hai vinto");
    }
    else {
        console.log("Hai perso");
    }
}