import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {



  render() {
    const { pokemon } = this.props;

    return (
      <Card.Group itemsPerRow={6}>
        {pokemon.map(pokemon => <PokemonCard
          key={pokemon.id}
          pokemonToMake={pokemon} 
        />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
