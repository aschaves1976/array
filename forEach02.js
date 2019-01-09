
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        /**
         * a função callback recebe 3 parametros:
         * o primeiro é o próprio valor
         * o segundo é o índice
         * o terceiro é o array completo
         */
        callback(this[i], i, this) 
    }
}
const aprovados =['Lucas','Maria Luiza','Jose','Maria Flor','Francisco','Lucca','Fernanda']
aprovados.sort()
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
