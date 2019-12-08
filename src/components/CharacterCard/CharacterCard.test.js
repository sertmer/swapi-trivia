import React from 'react'
import CharacterCard from './CharacterCard'
import { shallow } from 'enzyme'

describe('CharacterCard', () => {
  let wrapper
  let mockProps = {
    className: 'character_card',
    key: 1,
    name: 'bob',
    homeworld: 'tatooine',
    population: 2,
    species: 'droid',
    films: []
  }

  beforeEach(() => {
    wrapper = shallow(<CharacterCard {...mockProps}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})