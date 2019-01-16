const alunos =[
    {nome: "Joao", nota: 7.5},
    {nome: "Maria", nota: 7.5}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const soma = (total, nota) => total + nota
const getNota = aluno => aluno.nota

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
