const pilotos = ['Alonso', 'Vettel','Raikkonen','Massa']
console.log(pilotos)

//remover o último elemento do array
pilotos.pop()
console.log(pilotos)

//inserindo elemento na última posição do array
pilotos.push('Verstappen')
console.log(pilotos)

//removendo o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//adicionando elemento na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar sem remover nenhum elemento
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover elemento
pilotos.splice(3, 1) // Massa foi removido novamente
console.log(pilotos)

// slice é um método que retorna um novo array, a partir de uma parte de um outro array
const algunsPilotos1 = pilotos.slice(2) // criando um novo array a partir do índice 2 de pilotos
console.log(algunsPilotos1)

/**
 * quando um intervalor de índice for definido, o novo array gerado incluindo o que estiver dentro do
 * instervalo menos a última posição do intervalo
*/
const algunsPilotos2 = pilotos.slice(2,4)
console.log(algunsPilotos2)