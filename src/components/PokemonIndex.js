import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

state = {
  pokemon: []
}

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState({pokemon: pokemons.map(pokemon => pokemon)}))
  }

  search = (data) => { //.backUrl .frontUrl .hp .name
    const {name, hp, backUrl, frontUrl} = data
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, stats: [
        {value: hp, name: 'hp'}
      ], sprites: {back: backUrl, front: frontUrl}})
    }).then(() => {
      let array = this.state.pokemon
      const pokemon = {name, stats: [
        {value: hp, name: 'hp'}
      ], sprites: {back: backUrl, front: frontUrl}}
      array.unshift(pokemon)
      this.setState({ pokemon: array })
    }).then(console.log('success'))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonForm search={this.search}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

export default PokemonPage
