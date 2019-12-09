import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard';
import Loading from '../Loading/Loading'
import PropTypes from 'prop-types'

const MovieContainer = ({ movies, updateState }) => {
  if (movies.length === 0) {
    return <Loading />
  }

  let movieCards = movies.map(movie => {
    return (
      <MovieCard 
        className='MovieCard'
        key={movie.episode_id}
        episode={movie.episode_id}
        title={movie.title}
        releaseDate={movie.release_date}
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

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  updateState: PropTypes.func.isRequired
}