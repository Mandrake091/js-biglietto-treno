/*
graph TD
Biglietto_treno
    A[Chiedere quanti km vuole percorrere l'utente] -->
    B[Chiedere l'eta dell'utente]-->
    C{Ha meno di 18 anni?}-->
    |si|D[Sconto 20%]
    C-->
    |no|E{Ne ha più di 65?}
    E-->|si|F[Sconto 40%]
    E-->|no|G[Prezzo base]
    G-->H[Mostro all'utente il costo del biglietto in base all'età]
    D-->H
    F-->H
*/

let userKm = parseInt(prompt('Quanti km vuoi percorrere?'))
console.log('chilometri utente', userKm);

let userAge = parseInt(prompt("Quanti anni hai?"));
console.log('età utente', userAge);
document.getElementById('userAge').innerHTML += ' ' + userAge + ' anni';


let priceForKm = 0.21;
let price = userKm * priceForKm;
let discount20 = price - (price * 20 / 100);
let discount40 = price - (price * 40 / 100);

if (userAge >= 65) {

    document.getElementById('price').innerHTML += ' ' + (price - (price - discount40)) + ' ' + '€';
    console.log(price - (price - discount40));
    console.log('hai risparmiato', discount40)


} else if (userAge <= 18) {

    document.getElementById('price').innerHTML += ' ' + (price - (price - discount20)) + ' ' + '€';
    console.log(price - (price * 20 / 100));
    console.log('hai risparmiato', discount20)

} else
    document.getElementById('price').innerHTML += ' ' + price + ' ' + '€';
console.log(price);