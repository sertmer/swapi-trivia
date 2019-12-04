import React from 'react'
import MovieContainer from './MovieContainer'
import { shallow } from 'enzyme'

describe('MovieContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MovieContainer movies={[]}/>)
  })

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

})