var agora = new Date()
var hour = agora.getHours()

if (hour < 8) {
    console.log('Eh madruga')
}else  if (hour  < 9){
    console.log('Bom dia')
}else {
    console.log('Ja eh tarde')
}
