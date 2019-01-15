const produtos =[
    {nome: "Notebook", preco: 4599.98, fragil: true},
    {nome: "Ipad Pro", preco: 4000.76, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Plástico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.nome.split('C')[1]
}))
console.log(produtos.filter(function (p){
    if(p.nome.split('C')[1] && p.preco > 18){
        return p.nome
    }
}))

// retornar produtos frágeis e com valor maior do que R$500.00

const caro = p => p.preco >= 500
const frageis = p => p.fragil

console.log(produtos.filter(caro).filter(frageis))