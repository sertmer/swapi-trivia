import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ name, rank, quote, signOut }) => {
  return (
    <nav>
      <h1>Star Wars Trivia Database</h1>
      <div className='buttons_div'>
        <Link to='/'>
          <button
              className='singout_button'
              onClick={signOut}>
              Sign Out
          </button>
        </Link>
        <Link to='/favorites'>
        <button className='favorites_button'> Favorites </button>
        </Link>
        <Link to='/movies'>
        <button className='movies_button'> Movies </button>
        </Link>
      </div>
      <h2>{rank} {name}</h2>
      <h2>{quote}</h2>
    </nav>
  )
}

export default Header

Header.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired
}