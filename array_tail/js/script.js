/* 
    SOLUZIONE
    1 - chiediamo all'utente da quanti elementi deve essere composto l'array
    2 - inizializziamo il ciclo for con la lunghezza data
        3 - generiamo un numero casuale da 1 a 100
        4 - inseriamo il numero nell'array
    2 - fine ciclo
    5 - con la funzione sort() ribaltiamo l'array
    6 - inizializziamo un cilo for che va fino a 5
        7 - stampiamo array[i]
    6 - fine ciclo 
*/

//chiediamo all'utente la lunghezza dell'array
let long = prompt('Inserisci il numero di elementi che deve contenere l\'array');
let array = [];
for (let i = 0; i < long; i++) {
    //generiamo il numero casuale
    let num = Math.floor(Math.random()*(100 - 1) + 1);
    array.push(num);
}
console.log(array);