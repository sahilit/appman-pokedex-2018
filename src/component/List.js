import React, { Component } from 'react'
import './List.css'

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

const cuteImg = require('../cute.png')

class App extends Component {

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


  render() {
    
    const { pokemonCards } = this.state
    console.log(pokemonCards)

    if (pokemonCards.length <= 0) return <div />

    return (
      <div className="pokemon-list">
        {pokemonCards.map((card, index) => (
          <div key={index} className="pokemon-card">
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

export default App
