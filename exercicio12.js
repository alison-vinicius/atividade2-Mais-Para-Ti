let estoque = [
    {produto: "refrigerante", quantidade: 500, minimo:500},
    {produto: "suco", quantidade: 50, minimo:100},
    {produto: "vassoura", quantidade: 20, minimo:40},
    {produto: "detergente", quantidade: 100, minimo:100},
    {produto: "chocolate", quantidade: 500, minimo:1000},
]

estoque.forEach((item)=>{
    if(item.quantidade < item.minimo){
        item.quantidade *= 2
    }
})

console.log(estoque)