import React from 'react'
import './MovieCard.css'

const MovieCard = ({ episode, title, releaseDate }) => {
  return (
    <article>
      <h2>Episode {episode}: {title}</h2>
      <p>Released: {releaseDate}</p>
    </article>
  )
}

export default MovieCard