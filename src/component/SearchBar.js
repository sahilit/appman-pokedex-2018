import React, { Component } from 'react'
import './SearchBar.css'

const searchIcon = require('../search.png')

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Find Pokemon" />
        <img src={searchIcon} alt="search" />
      </div>
    )
  }
}

export default SearchBar
