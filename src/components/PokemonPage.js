import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    state = {
      pokemon: [],
      searchTerm: '',
      newPokemon: {
        name: '',
        hp: null,
        frontUrl: '',
        backUrl: ''
      }
    }
  

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemon => {
        this.setState({
          pokemon: pokemon.map(pokemon => {
            return pokemon
          })
        })
      })
  }

  updateNewPokemon = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState(state => {
      state.newPokemon[key] = value
      return state
    })
  }

  addNewPokemon = (event) => {
    event.preventDefault();
    console.log('submitted');
  }

  displayedPokemon = () => {
    return this.state.pokemon.filter(pokemon => {
      if (!this.state.searchTerm) {
        return true
      } else {
        return pokemon.name.toLowerCase().includes(this.state.searchTerm)
      }
    })
  }

  updateSearchFilter = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} updateNewPokemon={this.updateNewPokemon} newPokemon={this.state.newPokemon} />
        <br />
        <Search updateSearchFilter={this.updateSearchFilter} />
        <br />
        <PokemonCollection
          pokemon={this.displayedPokemon()}
        />
      </Container>
    )
  }
}

export default PokemonPage
