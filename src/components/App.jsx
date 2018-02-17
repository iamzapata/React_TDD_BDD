import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import maxNumber from '../helpers'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gifts: []
    }

    this.removeGift = this.removeGift.bind(this)
  }

  onAddGift() {
    const { gifts } = this.state
    const ids = gifts.map(g => g.id)

    this.setState({
      gifts: [
        ...gifts,
        {
          id: maxNumber(ids)  + 1
        }
      ]
    })

  }

  removeGift(id) {
    const {
      gifts
    } = this.state

    this.setState({
      gifts: gifts.filter(g => g.id !==id)
    })

  }

  render() {
    const {
      gifts
    } = this.state

    return (
      <div className="container-fluid">
        <h2>Gift Giver</h2>
        <div className="Gift--List">
          {
            gifts.map(g => (
              <Gift
                key={g.id}
                gift={g}
                removeGift={this.removeGift}
              />
            ))
          }
        </div>
        <Button
          className="Btn--Add"
          onClick={() => this.onAddGift()}
        >
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App