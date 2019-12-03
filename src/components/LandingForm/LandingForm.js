import React, { Component } from 'react'
import './LandingForm.css'

class LandingForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quote: '',
      rank: '',
      isFinished: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    const isNameGood = this.state.name !== '';
    const isQuoteGood = this.state.quote !== '';
    const isRankGood = this.state.rank !== 'Rank';

    if(isNameGood && isQuoteGood && isRankGood) {
      this.setState({ isFinished: true })
    } else {
      this.setState({ isFinished: false })
    };
    console.log(this.state)
  }

  submitInfo = () => {
    const name = this.state.name
    const quote = this.state.quote
    const rank = this.state.rank
    console.log(`${rank} ${name} says ${quote}`)
  }

  render() {
    return (
      <div>
        <input 
          className='form_name' 
          type='text' 
          placeholder='Name' 
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
          />
        <input 
          className='form_quote'
          type='text' 
          placeholder='Favorite Star Wars Quote' 
          value={this.state.quote}
          name='quote'
          onChange={this.handleChange}
        />
        <p>Select your Rank</p>
        <select className='rank-menu' name="rank" value={this.state.rank} onChange={this.handleChange}>
          <option defaultValue='rank'>Padawan</option>
          <option name='rank' value='Jedi Knight'>Jedi Knight</option>
          <option name='rank' value='Jedi Master'>Jedi Master</option>
        </select>
        {!this.state.isFinished && <button 
            className="form_button" 
            disabled  
          >Submit</button>}
          {this.state.isFinished && <button
            className="form_button"
            onClick={this.submitInfo}
          >Submit</button>}
      </div>
    )
  }
}

export default LandingForm