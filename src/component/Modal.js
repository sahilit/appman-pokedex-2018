import React, { Component } from 'react'
import SearchBar from './SearchBar'
import './Modal.css'

const cuteImg = require('../cute.png')


class Modal extends Component {

  state = {
    searchText: '',
    filteredPokemonCards: []
  }

  componentDidMount = () => {
    this.setState({ filteredPokemonCards: this.props.pokemonCards })
  }

  cuteImoji = () => {
    for (let i = 0; i < 5; i++) {
      return (
        <img src={cuteImg} alt="cuteImage" />
      )
    }
  }

  modalClick = (e) => {
    e.preventDefault()
  }

  onSearch = (searchText) => {
    const cards = this.props.pokemonCards
    const filteredPokemonCards = cards.filter(card => (
      card.name.toLowerCase().indexOf(searchText) >= 0 ||
      card.type.toLowerCase().indexOf(searchText) >= 0
    ))
    this.setState({ filteredPokemonCards })
  }

  render() {

    const { filteredPokemonCards } = this.state

    return (
      // /onClick={() => this.props.onClose(false)}
      <div className="modal" >
        <div className="modal-container">
          <SearchBar onChange={text => this.onSearch(text)} />
          <div className="pokemon-modal-list">
            {filteredPokemonCards.map((card, index) => (
              <div key={index} className="pokemon-modal-card">
                <div className="add-Icon" onClick={() => this.props.addCard(card)}>ADD</div>
                <div className="pokemon-img">
                  <img src={card.imageUrl} alt={card.name} />
                </div>
                <div className="pokemon-details">
                  <h3>{card.name}</h3>
                  <div className="tube">
                    <div className="level-name">HP</div>
                    <div className="level-tube"><div className="level" /></div>
                  </div>
                  <div className="tube">
                    <div className="level-name">STR</div>
                    <div className="level-tube"><div className="level" /></div>
                  </div>
                  <div className="tube">
                    <div className="level-name">WEAK</div>
                    <div className="level-tube"><div className="level" /></div>
                  </div>
                  <div className="cute-score">
                    {this.cuteImoji()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
