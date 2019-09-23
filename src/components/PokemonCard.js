import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  handleClick = (event) => {
    event.target.src === this.props.pokemon.sprites.front
      ? event.target.src = this.props.pokemon.sprites.back
      : event.target.src = this.props.pokemon.sprites.front
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
