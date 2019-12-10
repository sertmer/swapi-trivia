import React from 'react'
import CharacterCard from './CharacterCard'
import { shallow } from 'enzyme'

describe('CharacterCard', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(
      <CharacterCard
        name='bob'
        homeworld={['home']}
        population='11111'
        species='human'
        films={['film1']}
        updateFavorite={jest.fn()}
        unFavoriteThis={jest.fn()}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})