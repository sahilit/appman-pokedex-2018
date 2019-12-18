import React, { Component } from 'react'
import SearchBar from './SearchBar'
import './Modal.css'

const cuteImg = require('../cute.png')


class Modal extends Component {

  state = {
    pokemonCards: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3030/api/cards')
      .then(response => response.json())
      .then(res => this.setState({ pokemonCards: res.cards }));
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
    console.log('rr')
  }

  render() {

    const { pokemonCards } = this.state

    return (
      <div className="modal">
        <div className="modal-container">
          <SearchBar />
          <div className="pokemon-modal-list">
            {pokemonCards.map((card, index) => (
              <div key={index} className="pokemon-modal-card">
                <div className="add-Icon">ADD</div>
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
