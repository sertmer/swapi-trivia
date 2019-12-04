import React from 'react'
import MovieCard from './MovieCard'
import { shallow } from 'enzyme'

describe('MovieCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MovieCard />)
  })

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

})