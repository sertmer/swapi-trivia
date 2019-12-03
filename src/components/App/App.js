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
