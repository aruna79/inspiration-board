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

  deleteCard = () => {
    this.props.removeCard(this.props.id)
  }
  render() {
    return (
      <div className="card">
      <div onClick={this.deleteCard} className='card__delete'>X</div>
      <h3 className="card__content">{this.props.text}</h3>
      <p className="card_content_emoji">{this.renderEmoji()}</p>


      </div>
    )
  }
}


Card.propTypes = {
  id:PropTypes.number.isRequired,
  text:PropTypes.string,
  emoji:PropTypes.string,
  removeCard:PropTypes.func.isRequired,

};

export default Card;
