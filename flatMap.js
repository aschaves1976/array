const escola = [{
    turma: "M1",
    alunos: [{
        nome:"Lucas",
        nota: 9.2
    },{
        nome: "Maria",
        nota: 9.7
    }]
}, {
    turma: 'M2',
    alunos: [{
        nome: "Constancia",
        nota: 8.8
    }, {
        nome: 'Adalberto',
        nota: 10.0
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const nota1 = escola.map(getNotasDaTurma)

console.log(nota1)

Array.prototype.flatMap=function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma).sort()
console.log(notas2)