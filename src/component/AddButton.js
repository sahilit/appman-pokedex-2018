import React, { Component } from 'react'
import './AddButton.css'

class AddButton extends Component {
  render() {
    return (
      <div className="add-button" onClick={() => this.props.onButtonClick(true)}>
        <div>+</div>
      </div>
    )
  }
}

export default AddButton
