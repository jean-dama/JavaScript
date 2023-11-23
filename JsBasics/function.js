const { contains } = require("cypress/types/jquery")
function ParImp (numero) {
    if (numero%2==0) {
    return 'Par'
    } else {
        return 'Impar'
    }
}
//
let resultado = ParImp(11)
function Som(valor1=0,valor2=0) {
    return valor1 + valor2
}
//
let variavel = function () {
    return vezes * 4
}
console.log(vezes(5))
//
function Fac (n) {
    let fact = 1 
    for (let conta = n; conta > 1; conta--) {
        fact *= conta
    }
    return fact
}
console.log(Fac(5))
//
function numeri(n) {
    if (n == 1){
        return 1
    } else {
        return n * numeri(n-1)
    }
}
console.log(numeri(5))
//