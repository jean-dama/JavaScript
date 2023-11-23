function Carregar () {

    var msg = window.document.getElementById('msg')//aqui estamos chamando o id do html
    var imagem = window.document.getElementById('imagem')//aqui estamos chamando o id do html
    var semana = window.document.getElementById('semana')//aqui estamos chamando o id do html
    var data = new Date()//aqui estamos coletando a data com a funcao default date do js
    var hora = data.getHours() //aqui estamos pegando as horas
    var min = data.getMinutes()//aqui estamos pegando os minutos
    var dia = data.getDate()//aqui estamos pegando a data
    var mes = data.getMonth()//e aqui pegamos o mes

    semana.innerHTML = "Data é: " + dia + ", do mês: " + mes //o + serve para concatenar
    msg.innerHTML = 'Agora são: ' + hora + ' horas e ' + min + ' minutos.'
        if (hora >= 0 && hora < 12) {//delimitamos a condicao
            //manha
            imagem.src= 'images/manha.png'
            document.body.style.background = '#e2cd9f'
            document.section.style.background = '#e2cd9f!important'
        } else if (hora >= 12 && hora < 18) {//delimitamos outra condicao
            //tarde
            imagem.src= 'images/tarde.png'
            document.body.style.background = '#b9846f'
            document.section.style.background = '#e2cd9f!important'
        } else {
            //noite
        imagem.src= 'images/nooite.png'
        document.body.style.background = '#000000'
        document.section.style.background = '#e2cd9f!important'
    }
}