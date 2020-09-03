import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const pokemon = this.props.pokemonToMake

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image" >
            {this.state.clicked ? <img src={pokemon.sprites.back} alt='oh no!' /> : <img src={pokemon.sprites.front} alt="oh no!" /> }
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
