import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import LandingForm from '../LandingForm/LandingForm';
import { fetchData } from '../../fetchApis';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import { Route } from 'react-router-dom'




class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [], 
      name: '',
      quote: '',
      rank: '',
      currentMovie: null,
    }
  }

  
  componentDidMount = () => {
      fetchData()
        .then(data => { return data })
        .then(movieData => { 
          console.log(movieData)
          let sortedMovies = movieData.sort((a, b) => a.episode_id - b.episode_id)
          this.setState({ movies: sortedMovies })})
        .catch(error => console.log(error));
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
        <LandingForm 
          updateState={this.updateState}
          />
        <MovieContainer 
          className='MovieContainer'
          movies={this.state.movies}
          updateState={this.updateState}
          />
        {this.state.currentMovie === null ? null :
        <CharacterContainer
        characters={this.state.movies[this.state.currentMovie].characters}
        />}
      </div>
    )
  }
}
//       <>
//         <header>
//         <Route path='/' render={() => 
//             <Header
//               name={this.state.name}
//               rank={this.state.rank}
//               quote={this.state.quote}
//               signOut={this.signOut}
//             />}
//           />
//         </header>
//         <main className="App">
//           <Route exact path='/' render={() => 
//             <LandingForm 
//             updateState={this.updateState} 
//             />} 
//           />
//           <Route path='/movies' render={() =>
//             <MovieContainer 
//             className='MovieContainer'
//             movies={this.state.movies}
//           />}
//           />
  
//         </main>
//       </>
//       )
//     }
  
export default App;
