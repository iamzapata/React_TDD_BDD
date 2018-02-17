import React from 'react'
import { shallow }  from 'enzyme'
import App from './App'

const app = shallow(<App />)

it('Renders correctly', () => {

  expect(app).toMatchSnapshot();

})

it('Initializes the `state` with empty list of gifts', () => {
  expect(app.state().gifts).toEqual([])
})

it('Adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.Btn--Add').simulate('click')
  expect(app.state().gifts).toEqual([{ id: 1 }])
})