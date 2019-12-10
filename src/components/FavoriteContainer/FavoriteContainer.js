import React from 'react';
import './FavoriteContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types'

const FavoriteContainer = ({ characters }) => {
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
        isFavorite={character.isFavorite}
        unFavoriteThis={character.unFavoriteThis}
        />
        )
      })
      return (
        <main>
          {characterCards}
        </main>
      )
    }


export default FavoriteContainer