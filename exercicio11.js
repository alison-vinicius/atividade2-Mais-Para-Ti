const pedidos = [
    {cliente: "Alison", produto: "chocolate", quantidade: 5},
    {cliente: "Vinicius", produto: "refrigerante", quantidade: 2},
    {cliente: "Sofia", produto: "biscoito", quantidade: 3},
    {cliente: "Nilda", produto: "pão", quantidade: 10},
    {cliente: "Manu", produto: "pirulito", quantidade: 7},
]

TotalPorClientes = {}

pedidos.forEach((pedido)=>{
    TotalPorClientes[pedido.cliente] = pedido.quantidade
  
})

console.log("QUANTIDADE DE PRODUTOS POR CLIENTE")
console.log("----------------------------------")
for(let cliente in TotalPorClientes){
    console.log(`nome: ${cliente.padEnd(10)} quantidade: ${TotalPorClientes[cliente]}`)
}