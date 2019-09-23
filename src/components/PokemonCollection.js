import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemons => this.setState({pokemons: pokemons}))
  }

  renderPokemonCards = () => {
    return this.state.pokemons.map(pokemon => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon} />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
