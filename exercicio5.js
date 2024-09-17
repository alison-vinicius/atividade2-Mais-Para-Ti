let alunos =[
    {nome: "Alison", nota1: 10, nota2:9},
    {nome: "Fred", nota1: 5, nota2:2},
    {nome: "Alonso", nota1: 8.5, nota2:3},
    {nome: "Jorge", nota1: 7.5, nota2:8},
    {nome: "Nelson", nota1: 8, nota2:5},
    {nome: "Mário", nota1: 5.5, nota2:10}
]


console.log("MEDIA DOS ALUNOS DA ESCOLA ALISON VINICIUS")
console.log("--------------------------------------------")
for(let aluno of alunos){
    console.log(`nome: ${aluno.nome.padEnd(7)}    media: ${(aluno.nota1+aluno.nota1)/2}`)
}