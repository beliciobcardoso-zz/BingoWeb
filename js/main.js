'use strict'

let numerosBingo = document.querySelector('#numerosBingo');

//console.log("teste", numerosBingo)

let list = [];
let numeroTotalBingo = 100;
let numberMin = 1;
let numberMax = 100;

const numberRandomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let verificarNumero = (numero) => {
    for (let number of list) {
        if (numero === number) {
            return 0
        }
    }
    return 1
}

let gerarNumero = () => {
    for (let i = 0; list.length < numeroTotalBingo; i++) {
        let numero = numberRandomMinMax(numberMin, numberMax)
        if (verificarNumero(numero)) {
            list.push(numero)
        }
    }
    return list
}

gerarNumero()

console.log(list)


let listaBingo = (list) => {

    for (let result of list) {
        let p = document.createElement("p");
        p.innerText = result;
        numerosBingo.appendChild(p);
    }
}

listaBingo(list)