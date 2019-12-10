import React from 'react'
import CharacterContainer from './CharacterContainer'
import { shallow } from 'enzyme'

describe('CharacterContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
    <CharacterContainer 
      characters={[]} 
      crawl={''} 
      updateFavorite={jest.fn()}
      unFavoriteThis={jest.fn()}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})