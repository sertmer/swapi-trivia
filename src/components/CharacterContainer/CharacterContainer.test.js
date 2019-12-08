import React from 'react'
import CharacterContainer from './CharacterContainer'
import { shallow } from 'enzyme'

describe('CharacterContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CharacterContainer characters={[]}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})