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
    beforeEach(() =>{
      app.find('.Btn--Add').simulate('click')
    })

    afterEach(() => {
      app.setState({gifts: []})
    })

    it('Adds a new gift to `state` when clicking the `add gift` button', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }])
    })

    it('Adds a new gift to the rendered list when clicking the `add gift` button', () => {
      const gifts = app.find('.Gift--List').children()

      expect(gifts.length).toEqual(1)
    })

    it('Creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true)
    })

  })

})