import React from 'react'
import { shallow }  from 'enzyme'
import App from './App'

const app = shallow(<App />)

describe('App', () => {
  it('Renders correctly', () => {
    expect(app).toMatchSnapshot();
  })

  it('Initializes the `state` with empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('When clicking the `add gift` button', () => {
    const id = 1

    beforeEach(() =>{
      app.find('.Btn--Add').simulate('click')
    })

    afterEach(() => {
      app.setState({gifts: []})
    })

    it('Adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }])
    })

    it('Adds a new gift to the rendered list', () => {
      const gifts = app.find('.Gift--List').children()

      expect(gifts.length).toEqual(1)
    })

    it('Creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true)
    })

    describe('And the user wants to remove the added gitft', () => {
      beforeEach(() => {
        app.instance().removeGift(id)
      })

      it('Removes gift from `state`', () => {
        expect(app.state().gifts).toEqual([])
      })
    })

  })

})