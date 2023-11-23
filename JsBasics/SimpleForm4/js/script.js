function Verifica () {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = window.document.getElementById('ano')
    var resultado = window.document.getElementById('resultado')

    if (form_ano.length == 0 || Number(form_ano) > ano ) {
        window.alert('ERRO! dados invalidos')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(form_ano.value)
        var gender = ''
        var img = document.getElementById('foto')

        if (sex[0].checked) {
            gender = 'Homem'
            if(idade >= 0 || idade < 10 ){
                //kid
                img.setAttribute('src','images/kid.png')
            }else if (idade < 21) {
                //young
                img.setAttribute('src','images/jovem-m.png')
            }else if (idade < 50) {
                //adult
                img.setAttribute('src','images/adult-m.png')
            } else {
                //adult
                img.setAttribute('src','images/old-man.png')
            }
        } else if (sex[1].checked){
                gender = 'Mulher'
                if(idade >= 0 || idade < 10 ){
                    //kid
                    img.setAttribute('src','images/kid-girl.png')
                }else if (idade < 21) {
                    //young
                    img.setAttribute('src','images/jovem-m.png')
                }else if (idade < 50) {
                    //adult
                    img.setAttribute('src','images/adult-m.png')
                } else {
                    //adult
                    img.setAttribute('src','images/old-man.png')
                }
        }
    
        resultado.style.textAlign = 'center'
        resultado.innerHTML = 'Genero é ' + gender + ' com a idade de ' + idade
        resultado.appendChild(img)
    }

}