let pessoas = [
    {nome: "Alison", idade: 20, cidade: "Rio Branco "},
    {nome: "Fred", idade: 34, cidade: "Acrelandia"},
    {nome: "Itallo", idade: 13, cidade: "Mancio Lima"},
    {nome: "Julia", idade: 31, cidade: "Assis Brasil"},
    {nome: "Joelson", idade: 25, cidade: "Cruzeiro do sul"},
]

for(let pessoa of pessoas){
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`)
}