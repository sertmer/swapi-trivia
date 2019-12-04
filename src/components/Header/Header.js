import React from 'react'
import './Header.scss'

const Header = ({name, rank, quote, signOut}) => {
  return (
    <nav>
      <h1>Star Wars Trivia Database</h1>
      <h2>{rank} {name}</h2>
      <h2>{quote}</h2>
      <button className='singout_button' onClick={signOut}>Sign Out</button>
    </nav>
  )
}

export default Header