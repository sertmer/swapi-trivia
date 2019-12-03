import React from 'react'
import './Header.css'

const Header = ({name, rank, quote}) => {
  return (
    <nav>
      <h1>Star Wars Trivia Database</h1>
      <p>{rank} {name}</p>
      <p>{quote}</p>
    </nav>
  )
}

export default Header