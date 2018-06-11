import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  renderEmoji=() => {
    if(this.props.emoji){
      return(
        <p>{emoji.getUnicode(this.props.emoji)}</p>
      );
    }
  }
  render() {
    return (
      <div className="card">
      <h3>Card{this.props.text}</h3>
      <p>{this.renderEmoji()}</p>


      </div>
    )
  }
}


Card.propTypes = {
  text:PropTypes.string,
  emoji:PropTypes.string,

};

export default Card;
