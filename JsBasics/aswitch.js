var now = new Date()
var weekday = now.getDay()
/*  0 domingo
    1 segunda
    2 terca
    3 quarta
    4 quinta
    5 sexta 
    6 sabado */
console.log(weekday)

switch(weekday) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break            
    case 0:
        console.log('Sexta')
        break
    default:
        console.log('Erro')
        break
}
