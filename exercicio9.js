const clientes = [
    {nome: "Alison", idade: 23, cidade: "Rio Branco"},
    {nome: "Julia", idade: 19, cidade: "Cruzeiro do Sul"},
    {nome: "Samara", idade: 31, cidade: "Porto Alegre"},
    {nome: "Italo", idade: 34, cidade: "Acrelandia"},
    {nome: "João", idade: 2, cidade: "Porto Velho"},
    {nome: "Messi", idade: 37, cidade: "Buenos Aires"}
]

MaisDeTrinta =  0
clientes.forEach((cliente)=>{
    if(cliente.idade > 30){
        MaisDeTrinta++
    }
})

console.log(`tem ${MaisDeTrinta} clientes com mais de 30 anos de idade`)