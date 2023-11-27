/* 
    SOLUZIONE
    1 - chiediamo all'utente da quanti elementi deve essere composto l'array
    2 - inizializziamo il ciclo for con la lunghezza data
        3 - generiamo un numero casuale da 1 a 100
        4 - inseriamo il numero nell'array
    2 - fine ciclo
    5 - con la funzione reverse() ribaltiamo l'array
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

//ordiniamo l'array al contrario
array.reverse();

//chiediamo all'utente quanti elementi dell'array dobbiamo stampare
let n_element = prompt('Inserisci quanti elementi vuoi stampare (a partire dall\'ultimo');
let n;
//controlliamo che il numero sia minore della lunghezza dell'array
if(n_element < array.length){
    n = n_element;
    
    for (let i = 0; i < n; i++) {
        console.log(array[i]);
    }

}else{
    console.log('Hai inserito un numero troppo alto di elementi');
}

