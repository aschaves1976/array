const alunos =[
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Lucas', nota: 9.8, bolsista: false},
    {nome: 'Luiza', nota: 8.7, bolsista: true}
]

// Todos os alunos são bolsistas?
const aluno = alunos.map(a => a.bolsista)
const todosBolsistas = (acumulator, currValue) => acumulator && currValue
console.log(aluno.reduce(todosBolsistas))
// Algum aluno é bolsista?
const algumBolsista = (acumulator, currValue) => acumulator || currValue
console.log(aluno.reduce(algumBolsista))

