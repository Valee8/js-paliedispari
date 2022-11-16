// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo.

let parolaUtente = prompt("Inserisci una parola");

let parolaPalindroma;

console.log(parolaUtente);

parolaPalindroma = palindromaFunction(parolaUtente, parolaPalindroma);

if (parolaPalindroma) {
    console.log("E' palindroma");
}
else {
    console.log("Non è palindroma");
}

// Funzione per capire se la parola è palindroma
function palindromaFunction(parola, palindroma) {

    let parolaDivisa = parola.split("");

    let parolaInvertita = parolaDivisa.reverse();

    let parolaUnita = parolaInvertita.join("");

    if (parolaUnita === parola) {
        palindroma = true;
    }
    else {
        palindroma = false;
    }

    return palindroma;
}