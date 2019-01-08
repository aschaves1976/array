console.log(typeof Array, typeof new Array, typeof [])

// forma não recomendada de criar array. A mais recomendada é utilizar a forma literal

let aprovados = new Array('Bia','Lucas','Maria')
console.log(aprovados)

aprovados =['Lucas', 'Bia','Maria']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

function alunos(nomes){
    console.log(nomes)
}
aprovados.forEach(alunos)
console.log(aprovados.length)
console.log(aprovados[3])

aprovados[3] = 'Fernanda' // esta é forma é mais usual para substituir um elemento dentro do array
aprovados.push('Alessandro') //esta é a forma mais ususal de inserir elementos dentro de um array
console.log(aprovados[3])
console.log('Tamanho do Array: ' + aprovados.length)

aprovados[9] = 'Erbywyby'
console.log('Tamanho do Array: ' + aprovados.length)

if (aprovados[8]===undefined){
    console.log('Valor indefinido')
}else{
    console.log(aprovados[8])
}
if (aprovados[8]===null){
    console.log('Valor Nulo')
}else{
    console.log(`O valor do array na posição 8 é ${aprovados[8]}`)
}
console.log(aprovados)
aprovados.sort()

console.log(`Este é o resultado do array ordenado ${aprovados}`)
console.log(aprovados)

//forma de deletar um array

delete aprovados[1]
console.log(`O valor do índice 1 não existe mais: ${aprovados[1]}`)

aprovados = ['Bia', 'Lucas', 'Maria']
// a função splice serve para remover e/ou inserir elementos em um array
aprovados.splice(1, 2) // exemplo excluindo elementos
console.log(aprovados)
aprovados.splice(1, 0, 'João', 'Jandira') // exemplo adicionando elementos
console.log(aprovados)
aprovados.splice(1,1,'Elemento1', 'Elemento2') // exemplo exluindo e adicionando elementos
console.log(aprovados)
aprovados.splice(0,1, 'Lucas') //exemplo: exclusao do elemento no indice 0 e adicionando um novo elemento
console.log(aprovados)