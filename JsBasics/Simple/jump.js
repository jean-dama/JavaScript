function Verifica () {//aqui pegamos os valores das variaveis do form
    var inicio = window.document.getElementById('passo1')
    var fim = window.document.getElementById('passo2')
    var passos = window.document.getElementById('passo3')
    var result = window.document.getElementById('resultado')
    var cont = inicio
    //aqui eh uma forma de verificarmos se os estao em branco 
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0)
        window.alert('Esta com campos em branco!')
    else {//se os campos estiverem preenchidos damos sequencia 
        result.innerHTML = "Valor pulando de <br>" + passos.value + "<br>"  //o result recebe uma string e as variaveis recebendo o valor do form
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0) {//aqui estamos ajustando se o valor, se for zero havera um alerta
            window.alert('Passo invalido')
            p = 1
        }
        //aqui estamos inserindo o valor de inicio no cont e depois verificando se ele é menor que o valor inserido em fim
        //se for o cont vai receber o valor de passos e contar e por fim o result vai receber e mostrar 
        if (i < f) {
            for(cont = i; cont <= f; cont += p) {
                result.innerHTML += cont +  ' \u{1F603}'
            }
        } else {//aqui estamos fazendo o procedimento similar ao anterior, porem diminuindo
            for(cont = i; cont <= f; cont -= p) {
                result.innerHTML += cont +  ' \u{1F603}'
            }
            result.innerHTML += '\u{1F3C1}'
        }
    }
}