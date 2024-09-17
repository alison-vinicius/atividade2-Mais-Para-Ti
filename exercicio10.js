let vendas = [
    {produto: "refrigerante", quantidade: 250, valor:10},
    {produto: "Arroz", quantidade: 500, valor:7},
    {produto: "Caneta", quantidade: 100, valor: 1},
    {produto: "vassoura", quantidade: 75, valor:15},
    {produto: "chocolate" , quantidade: 400, valor:5}
]

totalVendas = 0
vendas.forEach((item)=>{
    totalVendas += item.quantidade * item.valor
})

console.log(`o valor total da venda de todos os produtos é de ${totalVendas} Reais`)