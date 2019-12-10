import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types'

const CharacterContainer = ({ characters, crawl, updateFavorite, unFavoriteThis }) => {
  let characterCards = characters.map(character => {
  return (
      <CharacterCard 
      className='character_card'
      key={(Date.now() + Math.random())}
      name={character.name}
      homeworld={character.homeworld}
      population={character.population}
      species={character.species}
      films={character.films}
      updateFavorite={updateFavorite}
      unFavoriteThis={unFavoriteThis}
      />
      )
    })
    return (
      <main>
        <p>{crawl}</p>
        {characterCards}
      </main>
    )
  }

export default CharacterContainer

CharacterContainer.propTypes = {
  characters: PropTypes.array.isRequired,
}