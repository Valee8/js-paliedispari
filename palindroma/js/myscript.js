// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.

let parolaUtente = prompt("Inserisci una parola");

console.log(parolaUtente);

palindromaFunction(parolaUtente);

// Funzione per capire se la parola è palindroma
function palindromaFunction(parola) {

    let parolaDivisa = parola.split("");

    let parolaInvertita = parolaDivisa.reverse();

    let parolaUnita = parolaInvertita.join("");

    if (parolaUnita === parola) {
        console.log("E' palindroma");

    }
    else {
        console.log("Non è palindroma");
    }
}