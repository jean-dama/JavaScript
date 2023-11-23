let numero = window.document.getElementById('number')
let list = window.document.getElementById('lista')
let resultado = window.document.getElementById('resultado')//recebendo valores do form
let vetor = [] //declarando o vetor

function isNum(n) { //verificando se o valor inserido esta entre 1 e 100
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
function InLista(n, l){ //verificando se o valor ja esta na lista
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}
function Adicionar () {//funcao para adicionar
    if (isNum(numero.value) && !InLista(numero.value, vetor)) {//usamos aqui as duas funcoes criadas acima
        vetor.push(Number(numero.value))//estamos inserindo o valor do input
        let option = document.createElement('option')//estamos criando uma option no html
        option.text = 'Adicionado ' +numero.value //estamos adicionando o texto e o valor
        list.appendChild(option)//estamos adicionando a option no html
        resultado.innerHTML = ''
    }else {
        window.alert('Valor invalido')
    }
    numero.value = ''
    numero.focus()
}
function Finaliza () { //aqui estamos criando a funcao para finalizar
    if (vetor.length == 0) {//verificando se o vetor esta vazio
        window.alert('Esta vazio')
    } else {
        
        let total = vetor.length//o total de items no vetor
        let mais = vetor[0]
        let menor = vetor[0]
        let somando = 0
        let medias = 0

        for (let posic in vetor){ 
            somando += valores[post]

            if (vetor[posic] > mais)
                mais = vetor[posic]

            if (vetor[posic] < menor)
                menor = vetor[posic]
        }
        
        medias = somando / total

        resultado.innerHTML = ''
        resultado.innerHTML += 'Cadastrados ' + total
        resultado.innerHTML += 'O maior' + mais
        resultado.innerHTML += 'O menor' + menor
        resultado.innerHTML += 'A soma' + somando
        resultado.innerHTML += 'As medias' + medias
    }
}