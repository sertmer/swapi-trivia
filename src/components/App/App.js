import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header'
import LandingForm from '../LandingForm/LandingForm'
import MovieContainer from '../MovieContainer/MovieContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      name: '',
      quote: '',
      rank: ''
    }
  }
  
  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(res => res.json())
      .then(data => {
        let sortedMovies = data.results.sort((a, b) => a.episode_id - b.episode_id)
        this.setState({movies: sortedMovies})
      })
  }

  updateState = (statesObj) => {
    this.setState(statesObj);
  }

  signOut = () => {
    this.setState({ name: '', quote: '', rank: '' })
  }

  render() {
    return (
      <div className="App">

        <Header 
        name={this.state.name}
        rank={this.state.rank}
        quote={this.state.quote}
        signOut={this.signOut}
        />
        <LandingForm updateState={this.updateState}/>
        <MovieContainer 
          className='MovieContainer'
          movies={this.state.movies}
        />

      </div>
    )
  }
}

export default App;
