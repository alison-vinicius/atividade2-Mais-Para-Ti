let produtos = [
    {nome: "Leite condensado", preco:8, desconto:5},
    {nome: "Refrigerante", preco:12,  desconto:15},
    {nome: "Bolo", preco:30, desconto:12},
    {nome: "Vassoura", preco:20, desconto:7},
    {nome: "chocolate", preco:13, desconto:9},
]

console.log("preços dos produtos com 10% de desconto")
console.log("---------------------------------------")

produtos.forEach(function(produto){
    produto.desconto = 10
    produto.preco -= produto.preco * (produto.desconto/100)
    console.log(`${produto.nome.padEnd(17)} preço: ${produto.preco.toFixed(2)}`)

})

console.log(produtos)