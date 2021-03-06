const express = require("express")
const app = express()

const pokemons = [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
          "name": "venusaur",
          "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
          "name": "charmander",
          "url": "https://pokeapi.co/api/v2/pokemon/4/"
        }
]

app.get('/pokemons', (req, res) => {
    return res.send(pokemons)
})

app.get('/pokemons/:nome', (req, res) => {
    const pokemon = req.params.nome
    let listaPokemon = pokemons.filter(i => i.name == pokemon)
    listaPokemon = isNaN(listaPokemon) ? listaPokemon : "Pokemon não encontrado"
    return res.send(listaPokemon)
})


app.listen(3000, () => console.log('Servidor rodando na porta 3000'))