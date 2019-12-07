import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ({ characters }) => {
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
      />
      )
    })
    return (
      <main>
        {characterCards}
      </main>
    )
  }

export default CharacterContainer