let produto = {
    preco: 130,
    quantidade: 70,
    peso: 10,
    desconto:50,
}

function filtrarPropriedades(valorMinimo, produto){
    novoObjeto = {}

    for(let descricao in produto){
        if(produto[descricao] > valorMinimo){
            novoObjeto[descricao] = produto[descricao]
        }
    }

    return novoObjeto
}

novoObjeto = filtrarPropriedades(20,produto)
console.log(novoObjeto)

