import React, {Component}from 'react'
import './MovieCard.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import image6 from '../../images/6.jpeg'
import image7 from '../../images/7.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7]
class MovieCard extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      currentMovie: null
    }
  } 

  findCurrentMovie = (e) => {
    this.setState({ currentMovie: e.target.dataset.category})
    let currentMovie = e.target.dataset.category
    this.props.updateState({ currentMovie })
  }

  render() {
    return (
    <article className='MovieCard'>
      <div>
        <h2>Episode {this.props.episode}:</h2>
        <h3>{this.props.title}</h3>
      </div>
      <div>
        <img src={images[this.props.episode - 1]} alt='movie cover art'/>
      </div>
      <div>
        <p>Released:</p>
        <p>{this.props.releaseDate}</p>
      </div>
      <Link to={`/movies/:${this.props.episode -1}`}>
        <button 
          className='characters-button' 
          data-category={(this.props.episode - 1)} 
          onClick={this.findCurrentMovie}
          >View Characters
        </button>
      </Link>
    </article>
    )}
}

export default MovieCard

MovieCard.propTypes = {
  episode: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired
}