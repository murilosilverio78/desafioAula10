const express = require("express")
const app = express()
const axios = require('axios')


function recebePokemon(resposta) {
    
    let { results } = resposta.data
    
    app.get('/pokemons', (req, res) => {
        return res.send(results)
        })
    
    app.get('/pokemons/:nome', (req, res) => {
        const pokemon = req.params.nome
        let listaPokemon = results.filter(i => i.name == pokemon)
        listaPokemon = isNaN(listaPokemon) ? listaPokemon : "Pokemon não encontrado"
        return res.send(listaPokemon)
    })

    app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

}

axios.get('https://pokeapi.co/api/v2/pokemon').then(recebePokemon)
    