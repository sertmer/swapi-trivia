import React from 'react'
import { shallow } from 'enzyme'
import FavoriteContainer from './FavoriteContainer'

describe('FavoriteContainer', () => {
  let wrapper
  let mockCharacters = [{
    name: 'bob',
    homeworld: ['home'],
    population: '10000',
    species: 'human',
    films: ['1', '2'],
    isFavorite: true,
    unFavoriteThis: jest.fn()
  }]

  beforeEach(() => {
    wrapper = shallow(<FavoriteContainer characters={mockCharacters} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})