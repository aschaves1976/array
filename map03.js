Array.prototype.map2 = function(callback){
    const newArray =[]
    for(let i=0; i<this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}'
   ,'{"nome ": "Caderno", "preco" : 13.90}'
   ,'{"nome" : "Kit de Lápis", "preco" : 41.22}'
   ,'{"nome" : "Caneta", "preco": 7.50}'
]
console.log(carrinho)
// Retornar um array apenas com preços

const paraObjeto = json => JSON.parse(json) // converter o json para objeto
const apenasPreco = produto => produto.preco

let resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)