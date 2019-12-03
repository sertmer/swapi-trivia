import React, { Component } from 'react'
import './LandingForm.css'

class LandingForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      favoriteQuote: '',
      rank: ''
    }
  }

  render() {
    return (
      <form>
        <input type='text'/>
        <input type='text'/>
        <select name='rank-menu'>
          <option>Select your Rank...</option>
          <option value='Jedi Padawan'>Padawan</option>
          <option value='Jedi Knight'>Jedi Knight</option>
          <option value='Jedi Master'>Jedi Master</option>
        </select>
        <input type='submit'/>
      </form>
    )
  }
}

export default LandingForm