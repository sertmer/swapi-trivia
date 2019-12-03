import React from 'react'
import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = ({ movies }) => {
  let movieCards = movies.map(movie => {
    return (
      <MovieCard 
        className='MovieCard'
        key={movie.episode_id}
        episode={movie.episode_id}
        title={movie.title}
        releaseDate={movie.release_date}
      />
    ) 
  })
  return (
    <main>
      {movieCards}
    </main>
  )
}

export default MovieContainer