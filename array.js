const alunos = [
    {nome: 'joão', nota: 7},
    {nome: 'Maria', nota: 5},
    {nome: 'Pedro', nota: 8},
    {nome: 'Ana', nota: 4},
    {nome: 'Carlos', nota: 6}
    
];


function alunosAprovados(arrayAlunos){
    return arrayAlunos.filter(aluno => aluno.nota >=6)
}
const aprovados = alunosAprovados(alunos)


console.log(alunos)
console.log(aprovados)