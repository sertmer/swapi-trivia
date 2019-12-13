import React from 'react'
import LandingForm from './LandingForm'
import { shallow } from 'enzyme'

describe('LandingForm', () => {
  let wrapper

  let mockUpdateState = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<LandingForm updateState={mockUpdateState}/>)
  })

  it('should match the snapshot', () => {   
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when handleChange is invoked', () => {
    const mockNameEvent = {target: {name: 'name', value: 'bob'}}
    const mockQuoteEvent = {target: {name: 'quote', value: 'there is no try'}}
    const mockRankEvent = {target: {name: 'rank', value: 'padawan'}}
    const mockDefaultState = {
      name: '',
      quote: '',
      rank: '',
      isFinished: false
    }

    expect(wrapper.state()).toEqual(mockDefaultState)

    wrapper.instance().handleChange(mockNameEvent)
    expect(wrapper.state('name')).toEqual('bob')
    expect(wrapper.state('isFinished')).toEqual(false)

    wrapper.instance().handleChange(mockQuoteEvent)
    expect(wrapper.state('quote')).toEqual('there is no try')

    wrapper.instance().handleChange(mockRankEvent)
    expect(wrapper.state('rank')).toEqual('padawan')
    expect(wrapper.state('isFinished')).toEqual(true)
  })

  it('submitInfo should call updateState when the button is clicked', () => {
    const mockFinishedState = {
      name: 'bob',
      quote: 'there is no try',
      rank: 'Jedi Knight',
      isFinished: true
    }
    

    wrapper.setState(mockFinishedState)
    wrapper.find('.form_button').simulate('click')
    

    expect(wrapper.instance().props.updateState).toHaveBeenCalledWith({name: 'bob',
    quote: 'there is no try',
    rank: 'Jedi Knight'})
  })
})