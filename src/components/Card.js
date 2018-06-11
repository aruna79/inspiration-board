import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
      <h3>Card{this.props.text}</h3>
      <p>{this.props.emoji}</p>


      </div>
    )
  }
}

Card.propTypes = {
  text:PropTypes.string.isRequired,
  emoji:PropTypes.string.isRequired

};

export default Card;
