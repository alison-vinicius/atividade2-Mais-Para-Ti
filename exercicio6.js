let funcionarios = [
    {nome: "Alison", cargo:"desenvolvedor full stack junior", salario: 1500},
    {nome: "Hiago", cargo:"estagiario", salario: 900},
    {nome: "Joelson", cargo:"suporte técnico", salario: 1700},
    {nome: "Julio", cargo:"desenvolvedor back-end", salario: 2300},
    {nome: "André", cargo:"estagiario", salario: 900}
]


console.log("funcinários com salários maior que 1000 reais")
console.log("----------------------------------------------")

for(let funcionario of funcionarios){
    if(funcionario.salario > 1000){
        console.log(`nome:${funcionario.nome.padEnd(10)} salário: ${funcionario.salario}`)
    }
}