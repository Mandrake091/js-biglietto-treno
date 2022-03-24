// 0, null, undefined, stringa vuota(ritorna false)



/*
let piove = 0;

if (piove) {
    alert('Sta piovendo')
} else {
    alert('Non sta piovendo')
}


let x = 10;
let = y = 9;

if (x < y) {
    alert("x è minore di y")
} 
else if (x > y) {
    alert("x è maggiore di y")
}
else{
    alert("x è uguale a y")
}
*/

/*
const password = 'pippo51';

let userPassword = prompt('Inserire password')
if (password !== userPassword) {
    console.log('accesso negato')
} else {
    console.log('accesso consentito')
}


let sesso = 'donna';
let age = '31';

console.log(sesso == "donna" && age <= 30);

if (sesso == "donna" && age <= 30) {
    console.log("enti gratis");
} else {
    console.log('paghi 50 €');
}
*/

/*
let frase = "Ciao Ragazzuoli";
let fraseLength = frase.length;

let userName = prompt('Inserisci Nome');
let userNameLen = userName.length;

console.log('lunghezza frase:', fraseLength);
console.log('lunghezza username:', userNameLen);

if (fraseLength > userNameLen) {
    console.log('La lunghezza della frase è più lunga');

} else if (fraseLength < userNameLen) {
    console.log('frase più corta');

} else {
    console.log('sono uguali');
}
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