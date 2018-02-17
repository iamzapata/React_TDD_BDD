import React from 'react'
import { shallow } from 'enzyme'
import Gift from './index'

describe('Gift', () => {
  const gift = shallow(<Gift />)

  it('Renders properly', () => {
    expect(gift).toMatchSnapshot()
  })

  it('Initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: null, present: null })
  })

  describe('When typing into the person input', () => {
    const person = 'Uncle'

    beforeEach(() => {
      const target = { value: person }
      gift.find('.Input--Person').simulate('change', { target })
    })

    it('Updates the person in state', () => {
      expect(gift.state().person).toEqual(person)
    })

  })

  describe('When typing into the present input', () => {
    const present = 'Golf Clubs'

    beforeEach(() => {
      const target = { value: present }
      gift.find('.Input--Present').simulate('change', { target })
    })

    it('Updates the present in state', () => {
      expect(gift.state().present).toEqual(present)
    })
  })

})