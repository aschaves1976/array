const aprovados =['Lucas','Maria Luiza','Jose','Maria Flor','Francisco','Lucca','Fernanda']
aprovados.sort()
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprpovados = aprovado => console.log(`   - ${aprovado}`)
aprovados.forEach(exibirAprpovados)

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
