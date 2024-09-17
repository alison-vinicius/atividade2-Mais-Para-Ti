let livro = {
    titulo: "entendendo algoritmos",
    autor: "Aditya Bhargava",
    anoPublicacao: 2017,
    genero: "didático e técnico",
}

editora = false
for(let descricao in livro){
    if(descricao == "editora"){
        editora = true
    }
}

if(!editora){
    livro.editora = "Manning Publications"
}

console.log(livro)