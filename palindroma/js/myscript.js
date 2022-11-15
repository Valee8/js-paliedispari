// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.

let parola = prompt("Inserisci una parola");

let parolaDivisa = parola.split("");

console.log(parolaDivisa);

let parolaInvertita = parolaDivisa.reverse();

console.log(parolaInvertita);