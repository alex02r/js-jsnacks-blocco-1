/* 
    SOLUZIONE
    1 - creaiamo un array di lunghezza x
    2 - creaiamo un secondo array di lunghezza y (dove y è minore di x)
    3 - for che va fino alla lunghezza maggiore
        4 - ? array y < array x
            5 - aggiungiamo un elemento a array y [i]
    3 - chiudiamo il ciclo
*/


//primo array
let array_x = [2, 3, 4, 5, 5, 5, 6, 6, 7];
//secondo array
let array_y = [3, 5, 6, 7, 8, 9];

//controlliamo quale array è il più grande per far partire il for
//inizializziamo una variabile che conterrà la lunghezza dell'array
let long;
if (array_x > array_y) {
    //array x è più grande
    long = array_x.length
}else if(array_x < array_y){
    //array y è più grande
    long = array_y.length
}