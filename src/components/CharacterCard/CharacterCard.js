import React, { Component }from 'react'
import './CharacterCard.scss'
import PropTypes from 'prop-types'

class CharacterCard extends Component {
  constructor(props) {
    super(props) 
      this.state = {
      isFavorite: false
    }
  }

  favoriteThis = () => {
    console.log('props:', this.props)
    let character = {
      name: this.props.name,
      isFavorite: true,
      homeworld: this.props.homeworld,
      population: this.props.population,
      species: this.props.species,
      films: this.props.films,
      unFavoriteThis: this.props.unFavoriteThis
    }
    console.log('character', character)
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
    { this.props.isFavorite ? 
    <button onClick={() => this.props.unFavoriteThis(this.props.name)}>Unfavorite</button> :
      <button onClick={this.favoriteThis}>Favorite</button>}
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