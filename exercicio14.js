let empresa = {
    departamentos:[
        {nome:"RH", funcionarios:["Alison", "Fred", "Julio"]},
        {nome:"Suporte técnico", funcionarios:["Julia", "Thayná", "Nelson"]},
        {nome:"Financeiro", funcionarios:["Itallo", "Gabriel", "Julio"]},
        {nome:"T.I", funcionarios:["Marcos", "João", "Daniel"]}
    ]
}




console.log("FUNCIONÁRIO          SETOR")
console.log("----------           -----")

for(let i in empresa.departamentos){
    departamento = empresa.departamentos[i]
    for(funcionario of departamento.funcionarios)
        console.log(`${departamento.nome.padEnd(20)} ${funcionario}`)



    
}