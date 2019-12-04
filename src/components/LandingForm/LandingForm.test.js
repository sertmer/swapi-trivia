import React from 'react'
import LandingForm from './LandingForm'
import { shallow } from 'enzyme'

describe('LandingForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LandingForm />)
  })

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

})