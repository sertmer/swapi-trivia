import React from 'react'
import MovieContainer from './MovieContainer'
import { shallow } from 'enzyme'

describe('MovieContainer', () => {
  let wrapper
  let mockMovies = {
    episode_id: '1',
    title: 'spaceballs',
    release_date: '12-12-12',
  }

  let mockUpdateState = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
    <MovieContainer 
      movies={[mockMovies]}
      updateState={mockUpdateState}  
    />)
  })

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the loading snapshot', () => {
    wrapper = shallow(
      <MovieContainer 
        movies={[]}
        updateState={mockUpdateState}
      />)
    expect(wrapper).toMatchSnapshot()
  })
})