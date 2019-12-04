import React from 'react'
import './MovieCard.css'

const MovieCard = ({ episode, title, releaseDate }) => {
  return (
    <article className='MovieCard'>
      <div>
        <h2>Episode {episode}:</h2>
        <h3>{title}</h3>
      </div>
      <div>
        <p>Released:</p>
        <p>{releaseDate}</p>
      </div>
      <button className='characters-button'>View Characters</button>
    </article>
  )
}

export default MovieCard