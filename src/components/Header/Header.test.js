import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
    <Header 
      name='bob'
      rank='expert'
      quote='quote'
      signOut={jest.fn()}
    />)
  })

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

})