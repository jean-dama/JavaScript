let numero = [5,8,45,5]

///numero.length e o numero total de posicoes
///numero.sort() e um metodo interdo que vai ordenar os vetores
///num.push(1) adiciona elemento no caso o 1, apenas um lembrete ele depende onde esta localizado, entao melhor inserir no inicio
//verificando o array e a posicao de cada elemento
for (let posicao = 0; posicao <= numero.length; posicao++) {
    console.log(posicao + numero[posicao])
}
//maneira simplificada
for (let posicao in numero) {
    console.log(numero[posicao])
}
///numero.indexOf(1) ele vai buscar o valor dentro do vetor, no caso do numero, não vai retornar, pois nao existe o numero num no array