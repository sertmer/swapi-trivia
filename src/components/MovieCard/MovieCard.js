import React from 'react'
import './MovieCard.css'

const MovieCard = ({ episode, title, releaseDate }) => {
  return (
    <article className='MovieCard'>
      <h2>Episode {episode}:</h2>
      <h3>{title}</h3>
      <p>Released:</p>
      <p>{releaseDate}</p>
      <button>View Characters</button>
    </article>
  )
}

export default MovieCard