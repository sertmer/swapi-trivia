import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import LandingForm from '../LandingForm/LandingForm';
import { fetchData } from '../../fetchApis';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import { Route } from 'react-router-dom'
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer';




class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [], 
      name: '',
      quote: '',
      rank: '',
      currentMovie: null,
      favorites: []
    }
  }

  
  componentDidMount = () => {
      fetchData()
        .then(data => { return data })
        .then(movieData => { 
          let sortedMovies = movieData.sort((a, b) => a.episode_id - b.episode_id)
          this.setState({ movies: sortedMovies })})
        .catch(error => console.log(error));
    }

  updateState = (statesObj) => {
    this.setState(statesObj);
  }

  updateFavorite = (favorite) => {
    this.setState({ favorites: [...this.state.favorites, favorite]})
  }

  signOut = () => {
    this.setState({ name: '', quote: '', rank: '' })
  }

  render() {
    return (
      <div className="App">
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
        <main>
          <Route exact path='/' render={() => 
            <LandingForm 
              updateState={this.updateState}
            />}
          />
          <Route exact path='/movies'render={() => 
            <MovieContainer 
              className='MovieContainer'
              movies={this.state.movies}
              updateState={this.updateState}
            />}
          />
          <Route path='/movies/:movie_id' render={({ match }) => {
            return (
              <CharacterContainer
                characters={this.state.movies[this.state.currentMovie].characters}
                crawl={this.state.movies[this.state.currentMovie].opening_crawl}
                updateFavorite={this.updateFavorite}
              />
            )} 
          }/>
          <Route path='/favorites' render={() => {
          return (
          <FavoriteContainer
           characters={this.state.favorites}
            />
          )}
          }/>
        </main>
      </div>
    )
  }
}
  
export default App;