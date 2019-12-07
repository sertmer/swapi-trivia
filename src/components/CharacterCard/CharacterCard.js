import React from 'react'
import './CharacterCard.scss'

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