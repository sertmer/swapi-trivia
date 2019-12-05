import React, { Component } from 'react'
import './LandingForm.scss'
import { Link } from 'react-router-dom'

class LandingForm extends Component {
  constructor(props) {
    super(props)
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
    const isRankGood = this.state.rank !== 'rank';

    if(isNameGood && isQuoteGood && isRankGood) {
      this.setState({ isFinished: true })
    } else {
      this.setState({ isFinished: false })
    };
  }

  submitInfo = () => {
    let name = this.state.name
    let quote = this.state.quote
    let rank = this.state.rank
    this.props.updateState({name, quote, rank});
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
        <select className='rank-menu' name="rank" value={this.state.rank} onChange={this.handleChange}>
          <option defaultValue='rank'>Select Your Rank..</option>
          <option name='rank' value='Padawan'>Padawan</option>
          <option name='rank' value='Jedi Knight'>Jedi Knight</option>
          <option name='rank' value='Jedi Master'>Jedi Master</option>
        </select>
        {!this.state.isFinished && <button 
            className="form_button" 
            disabled  
          >Submit</button>}
          {this.state.isFinished && <Link to='/movies'>
          <button
            className="form_button"
            onClick={this.submitInfo}
          >Submit</button>
            </Link>}
      </div>
    )
  }
}

export default LandingForm