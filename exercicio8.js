let filmes = [
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anodelancamento: 1972},
    {titulo: "Interestelar", diretor: "Christopher Nolan", anodelancamento: 2014},
    {titulo: "Parasita", diretor: "Bong Joon-ho", anodelancamento: 2019},
    {titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anodelancamento: 1994},
    {titulo: "A Origem", diretor: "Christopher Nolan", anodelancamento: 2010}
]

titulos = []

filmes.forEach(function(filme){
    titulos.push(filme.titulo)
})
console.log(titulos)