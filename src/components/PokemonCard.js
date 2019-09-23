import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ( { pokemon, toggleImage }) => {
  const { name, stats, sprites, isClicked } = pokemon
  const imageURL = isClicked ? sprites.back : sprites.front

  return (
    <Card>
      <div onClick={() => toggleImage(pokemon)}>
        <div className="image">
          <img src={imageURL} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.stats[5].value} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
