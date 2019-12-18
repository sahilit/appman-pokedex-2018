import React, { Component } from 'react'
import List from './component/List'
import AddButton from './component/AddButton'
import Modal from './component/Modal'
import './App.css'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {

  state = {
    openModal: false,
    pokemonCards: [],
    savedPokemonCards: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3030/api/cards')
      .then(response => response.json())
      .then(res => this.setState({ pokemonCards: res.cards }));
  }

  modalValueChange = (result) => {
    this.setState({ openModal: result })
  }

  addCard = (card) => {
    this.setState({ savedPokemonCards: [...this.state.savedPokemonCards, card] }, () => 
      this.setState({ pokemonCards: this.state.pokemonCards.filter(oldCard =>[...this.state.savedPokemonCards, card].indexOf(oldCard) < 0) })
    )
  }

  removeCard = (card) => {
    const newCards = this.state.savedPokemonCards.filter(oldCard => oldCard !== card)
    this.setState({ savedPokemonCards: newCards })
  }

  render() {

    const { openModal, pokemonCards, savedPokemonCards } = this.state

    return (
      <div className="App">
        <h1>My Pokedex</h1>
        <List 
          savedPokemonCards={savedPokemonCards} 
          removeCard={card => this.removeCard(card)} />
        <AddButton onButtonClick={result => this.modalValueChange(result)} />
        {openModal && 
          <Modal 
            pokemonCards={pokemonCards} 
            addCard={card => this.addCard(card)}
            onClose={result => this.modalValueChange(result)} />
        }
      </div>
    )
  }
}

export default App
