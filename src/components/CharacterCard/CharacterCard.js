import React, { Component }from 'react'
import './CharacterCard.scss'
import PropTypes from 'prop-types'

class CharacterCard extends Component {
  constructor(props) {
    super(props) 
      this.state = {
      favorites: []
    }
  }

  favoriteThis = () => {
    let character = this.props
    this.props.updateFavorite(character)
  }

  render() {
  return (
    <article className='character_card'>
    <h2> {this.props.name} </h2>
    <p> Homeworld: {this.props.homeworld[0]} </p>
    <p> Population: {this.props.homeworld[1]} </p>
    <p> Species: {this.props.species} </p>
    <p> Related Films: {this.props.films} </p>
    <button onClick={this.favoriteThis}>Favorite</button>
    </article>
    )
  }
}

export default CharacterCard;

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  homeworld: PropTypes.array.isRequired,
  species: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired
}