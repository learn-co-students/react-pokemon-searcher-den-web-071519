import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  createCards = () => {
    return this.props.pokemons.map(poke => (
      <PokemonCard key={poke.name} poke={poke} />
    ))
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.createCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
