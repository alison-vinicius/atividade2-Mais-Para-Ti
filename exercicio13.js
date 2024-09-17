let carrinho = {
    itens:[
        {nome: "nutella", quantidade:30, precoUnitario: 5},
        {nome: "refrigerante", quantidade:100, precoUnitario: 10},
        {nome: "iogurte", quantidade:50, precoUnitario: 7},
        {nome: "maçã", quantidade:25, precoUnitario: 2},
        {nome: "vassoura", quantidade:20, precoUnitario: 15},
    ]
}

valorTotalCarrinho = 0
carrinho.itens.forEach((item)=>{
    valorTotalCarrinho += item.quantidade * item.precoUnitario
})

console.log(`o valor do carrinho é de ${valorTotalCarrinho} reais`)

    
