import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    const { updateNewPokemon, newPokemon, addNewPokemon } = this.props
    console.log(newPokemon)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={addNewPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name"
              onChange={updateNewPokemon}
              value={newPokemon.name}
              placeholder="Name"
              name="name"
            />
            <Form.Input fluid label="hp"
              onChange={updateNewPokemon}
              value={newPokemon.hp}
              placeholder="hp"
              name="hp" />
            <Form.Input fluid label="Front Image URL"
              onChange={updateNewPokemon}
              value={newPokemon.frontUrl}
              placeholder="url"
              name="frontUrl"
            />
            <Form.Input fluid label="Back Image URL"
              onChange={updateNewPokemon}
              value={newPokemon.backUrl}
              placeholder="url"
              name="backUrl"
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
