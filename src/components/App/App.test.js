import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  
  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when updateState is called', () => {
    const expected = {
      movies: [],
      name: 'bob',
      quote: 'there is no try',
      rank: 'Jedi Master',
      currentMovie: null,
      favorites: []
    }

    const defaultState = {
      movies: [],
      name: '',
      quote: '',
      rank: '',
      currentMovie: null,
      favorites: []
    }

    wrapper.setState(defaultState)
    expect(wrapper.state()).toEqual(defaultState)

    wrapper.instance().updateState(expected)
    expect(wrapper.state()).toEqual(expected)

  })
})  
