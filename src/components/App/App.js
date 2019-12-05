import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
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
        this.setState({ movies: sortedMovies })
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
      <>
        <header>
        <Route path='/' render={() => 
            <Header
              name={this.state.name}
              rank={this.state.rank}
              quote={this.state.quote}
              signOut={this.signOut}
            />}
          />
        </header>
        <main className="App">
          {/* <MovieContainer 
            className='MovieContainer'
            movies={this.state.movies}
          /> */}
          <Route exact path='/' render={() => 
            <LandingForm 
              updateState={this.updateState} 
              />} 
            />
  
        </main>
      </>
      )
    }
  }
  
  export default App;
