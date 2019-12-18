import React, { Component } from 'react'
import './List.css'

const cuteImg = require('../cute.png')


class List extends Component {

  cuteImoji = () => {
    for (let i = 0; i < 5; i++) {
      return (
        <img src={cuteImg} alt="cuteImage" />
      )
    }
  }

  render() {
    
    const { savedPokemonCards } = this.props
    console.log(savedPokemonCards)

    if (savedPokemonCards.length <= 0) return <div />

    return (
      <div className="pokemon-list">
        {savedPokemonCards.map((card, index) => (
          <div key={index} className="pokemon-card">
            <div className="remove-Icon" onClick={() => this.props.removeCard(card)}>X</div>
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
    )
  }
}

export default List
