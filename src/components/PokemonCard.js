import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: false
  }

  hp = () => {
    const hpName = this.props.poke.stats.filter(s => s.name === "hp")
    return hpName[0].value
  }

  handleClick = () => {
    this.state.isClicked
    ? this.setState({
      isClicked: false
    })
    : this.setState({
      isClicked: true
    })
  }

  render() {
    return (
      <Card onClick = {this.handleClick}>
        <div>
          <div className="image">
            {this.state.isClicked
              ? <img alt="oh no!" src={this.props.poke.sprites.back} />
              : <img alt="oh no!" src={this.props.poke.sprites.front} />
            }
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
