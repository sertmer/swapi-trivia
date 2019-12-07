import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = ({ movies, updateState }) => {
  let movieCards = movies.map(movie => {
    return (
      <MovieCard 
        className='MovieCard'
        key={movie.episode_id}
        episode={movie.episode_id}
        title={movie.title}
        releaseDate={movie.release_date}
        get
        updateState={updateState}
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