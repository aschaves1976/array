const alunos =[
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Lucas', nota: 9.8, bolsista: false},
    {nome: 'Luiza', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(alunos.map(a => a.nota).reduce(reducer))
console.log(alunos.map(a => a.nota).reduce(reducer,5))
