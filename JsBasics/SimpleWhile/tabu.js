function Verifica () {//aqui criacamos a funcao e abaixo capturamos os valores do form
    var valor = window.document.getElementById('tab')
    var tabu = window.document.getElementById('select')
    var numero = Number(valor.value)
    var cont = 1

    tabu.innerHTML = '' //aqui so deixamos o form limpo

    while ( cont <=10) { //aqui o cont que recebeu um verifica se é menor igual a 10
        var opcao = document.createElement('option') //aqui criamos as opcoes que vao aparecer no select
        opcao.text = numero + 'x' + cont + '=' + numero*cont //aqui a opcao recebe o numero que foi inserido x o contador e a multiplicação, concatenando com +
        opcao.value = 'tab' + cont 
        tabu.appendChild(opcao)//aqui estamos adicionando o elemento filho chamado opcao que criamos anteriormente
        cont++ //aqui ele esta realizando a contagem adicionando 1
    }
}