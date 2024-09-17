transacoes  = [
    {tipo: "entrada", valor: 2000},
    {tipo: "saida", valor: 1000},
    {tipo: "entrada", valor: 10000},
    {tipo: "saida", valor: 2000},
    {tipo: "saida", valor: 5000},
]

let saldoFinal = 0
transacoes.forEach(transacao => {
    if(transacao.tipo === "entrada"){
        saldoFinal += transacao.valor
    } else{
        saldoFinal -= transacao.valor
    }
})

console.log(`o saldo final é de ${saldoFinal} reais` )
