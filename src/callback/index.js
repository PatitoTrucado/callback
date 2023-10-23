/* 
!! CALLBACK
* Llama a una funcion con el argumento de callback 
*/

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, argumento) {
    return argumento(num1, num2);
}

console.log(calc(2, 2, sum));

/* 
!! SetTimeOut
*Es un tiempo de espera, mientras carga esa funcion que corran otras de manera asincrona.
*/

setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000);


function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Patito') ;