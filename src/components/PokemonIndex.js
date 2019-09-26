import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import PokemonFilter from './PokemonFilter'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    displayPokemons: []
  }

  componentDidMount(){
    this.fetchPokes()
    console.log(this.state.pokemons)
  }

  fetchPokes = () => {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(result => 
        this.setState({
          pokemons: result, 
          displayPokemons: result
        }, () => {
          console.log(this.state.pokemons, this.state.displayPokemons)
        })
      )
  }

  postPoke = (newPoke) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        name: newPoke.name,
        stats: [{value: newPoke.hp, name: "hp"}],
        sprites: {front: newPoke.frontUrl, back: newPoke.backUrl}
      })
    })
    .then(response => response.json())
    .then(result => this.setState({
      pokemons: [result, ...this.state.pokemons],
      displayPokemons: [result, ...this.state.displayPokemons]
    }))
  }

  handleSearch = (e, {value}) => {
      this.setState({
        displayPokemons: this.state.pokemons.filter(p => p.name.includes(value))
      })
  }

  filterByName = () => {
    this.setState({
      displayPokemons: this.state.pokemons.sort((a, b) => a.name > b.name ? 1 : -1)
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonForm postPoke={this.postPoke} />
        <br />
        <PokemonFilter filterByName={this.filterByName} />
        <br />
        <PokemonCollection pokemons={this.state.displayPokemons} />
      </div>
    )
  }
}

export default PokemonPage
