import React, { Component } from 'react'
import SearchBar from './SearchBar'
import './Modal.css'

const cuteImg = require('../cute.png')


class Modal extends Component {

  state = {
    filteredPokemonCards: []
  }

  componentDidMount = () => {
    this.setState({ filteredPokemonCards: this.props.pokemonCards })
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.pokemonCards !== this.props.pokemonCards) this.componentDidMount()
  }

  cuteImoji = (happiness) => {
    for (let i = 0; i < 5; i++) {
      return (
        <img src={cuteImg} alt="cuteImage" />
      )
    }
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
      <div className="modal" onClick={() => this.props.onClose(false)}>
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          <SearchBar onChange={text => this.onSearch(text)} />
          <div className="pokemon-modal-list">
            {filteredPokemonCards.map((card, index) => {
              const hp = card.hp > 100 ? 100 : card.hp
              const strength = card.attacks ? ((card.attacks.length * 50) > 100 ? 100 : (card.attacks.length * 50)) : 0
              const weakness = card.weaknesses ? ((card.weaknesses.length * 100) > 100 ? 100 : (card.weaknesses.length * 100)) : 0
              let damage = 0
              const d = card.attacks ? card.attacks.map(c => {
                if (c.damage !== undefined) damage = damage + Number(c.damage.replace(/[^0-9]/g,''))
              }) : 0
              const happiness = ((hp / 10) + (damage / 10) + 10 - (weakness)) / 5

              return (
                <div key={index} className="pokemon-modal-card">
                  <div className="add-Icon" onClick={() => this.props.addCard(card)}>ADD</div>
                  <div className="pokemon-img">
                    <img src={card.imageUrl} alt={card.name} />
                  </div>
                  <div className="pokemon-details">
                    <h3>{card.name}</h3>
                    <div className="tube">
                      <div className="level-name">HP</div>
                      <div className="level-tube"><div className="level" style={{ width: `${hp}%` }} /></div>
                    </div>
                    <div className="tube">
                      <div className="level-name">STR</div>
                      <div className="level-tube"><div className="level" style={{ width: `${strength}%` }} /></div>
                    </div>
                    <div className="tube">
                      <div className="level-name">WEAK</div>
                      <div className="level-tube"><div className="level" style={{ width: `${weakness}%` }} /></div>
                    </div>
                    <div className="cute-score">
                      {this.cuteImoji(happiness)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
