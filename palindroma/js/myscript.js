// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.

let parolaUtente = prompt("Inserisci una parola");

console.log(parolaUtente);

palindroma(parolaUtente);

// Funzione per capire se la parola è palindroma
function palindroma(parola) {

    let parolaDivisa = parola.split("");

    let parolaInvertita = parolaDivisa.reverse();

    let palindroma;

    for (let i = 0; i < parola.length; i++) {
        if (parolaInvertita[i] === parola[i]) {
            palindroma = true;
        }
        else {
            palindroma = false;
        }
    }

    if (palindroma) {
        console.log("E' palindroma");
    }
    else {
        console.log("Non è palindroma");
    }
}