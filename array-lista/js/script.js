let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
//aggiungiamo all'array la pesca
fruits.push('pesca');

//controlliamo se nell'array è presente il cocomero
//inizializiamo la variabile per dopo poter inviare il messaggio
let flag = false;
//inizializzo il ciclo for per la lettura dell'array
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == 'cocomero') {
        flag = true
        console.log('Trovato! Devo solo preparare il cocktail.');
    }
    
}

//controlliamo se la lettura non ha portato risultati
if (!flag) {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}