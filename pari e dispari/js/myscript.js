// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let parola = prompt("Inserisci una parola");

let parolaDivisa = parola.split("");

console.log(parolaDivisa);

let parolaInvertita = parolaDivisa.reverse();

console.log(parolaInvertita);

// let sceltaUtente = prompt("Scegli pari o dispari (p o d)");

// while (sceltaUtente != "p" && sceltaUtente != "d") {
//     sceltaUtente = prompt("Scegli pari o dispari (p o d)");
// }

// console.log(sceltaUtente);

// let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// while (numeroUtente <= 0 || numeroUtente > 5) {
//     numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
// }

// console.log("Numero scelto dall'utente: ", numeroUtente);

// let numeroComputer = generaNumeroRandom();

// console.log("Numero generato dal computer: ", numeroComputer);

// const sommaNumeri = numeroComputer + numeroUtente;

// console.log("Somma dei numeri: ", sommaNumeri);

// pariODispari(sommaNumeri, sceltaUtente);


// // Funzione per generare numero random
// function generaNumeroRandom() {
//     const randomComputer = Math.floor(Math.random() * 5) + 1;

//     return randomComputer;
// }

// // Funzione per controllare se la somma è pari o dispari
// function pariODispari(somma, scelta) {

//     console.log("Scelta ", scelta);

//     if (somma % 2 === 0 && scelta === "p") {
//         console.log("Hai vinto");
//     } 
//     else if (somma % 2 != 0 && scelta === "d") {
//         console.log("Hai perso");
//     }
//     else {
//         console.log("Hai perso");
//     }
// }