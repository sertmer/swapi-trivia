import React from 'react'
import MovieCard from './MovieCard'
import { shallow } from 'enzyme'

describe('MovieCard', () => {
  let wrapper
  
  let mockProps = {
    episode: 1,
    title: 'spaceballs',
    releaseDate: '12-12-12',
    updateState: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<MovieCard {...mockProps}/>)
  })

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when findCurrentMovie is called', () => {
    const mockEvent = {target: {dataset: {
      category: 1
    }}}
    wrapper.instance().findCurrentMovie(mockEvent)
    expect(wrapper.state('currentMovie')).toEqual(1)
  })
})