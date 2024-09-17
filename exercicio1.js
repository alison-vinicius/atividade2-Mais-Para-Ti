let carro ={
    marca: "fiat",
    modelo: "uno",
    cor: "vermelho",
    ano: 2015
}


console.log("===============================")
console.log("       DESCRIÇÃO DO CARRO      ")
console.log("===============================")

for(let descricao in carro){
    console.log(`${descricao}: ${carro[descricao]}`)
}
console.log("===============================")
