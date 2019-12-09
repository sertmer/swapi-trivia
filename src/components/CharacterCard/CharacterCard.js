import React from 'react'
import './CharacterCard.scss'
import PropTypes from 'prop-types'

const CharacterCard = ({ name, homeworld, population, species, films }) => {

  return (
    <article className='character_card'>
    <h2> {name} </h2>
    <p> Homeworld: {homeworld[0]} </p>
    <p> Population: {homeworld[1]} </p>
    <p> Species: {species} </p>
    <p> Related Films: {films} </p>
    </article>)
}

export default CharacterCard;

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  homeworld: PropTypes.array.isRequired,
  species: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired
}