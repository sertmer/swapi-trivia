import React from 'react'
import './MovieCard.css'
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import image6 from '../../images/6.jpeg'
import image7 from '../../images/7.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7]
const MovieCard = ({ episode, title, releaseDate }) => {
  return (
    <article className='MovieCard'>
      <div>
        <h2>Episode {episode}:</h2>
        <h3>{title}</h3>
      </div>
      <div>
        <img src={images[episode - 1]} alt='movie cover art'/>
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