import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postPoke(this.state)
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChange} fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input onChange={this.handleChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} />
            <Form.Input onChange={this.handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input onChange={this.handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
