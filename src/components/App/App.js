import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import LandingForm from '../LandingForm/LandingForm'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
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

  render() {
    return (
      <div className="App">
        <Header />
        <LandingForm />
      </div>
    )
  }
}

export default App;
