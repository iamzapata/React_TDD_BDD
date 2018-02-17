import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gifts: []
    }

    this.onAddGift = this.onAddGift.bind(this)
  }

  onAddGift() {
    const { gifts } = this.state
    const ids = gifts.map(g => g.id)

    const maxId = ids.length > 0 ? Math.max(...ids) : 0

    this.setState({
      gifts: [
        ...gifts,
        { id: maxId  + 1 }
      ]
    })


  }

  render() {
    const {
      gifts
    } = this.state

    return (
      <div className="container-fluid">
        <h2>Gift Giver</h2>
        <ul className="Gift--List">
          {
            gifts.map(g => (
              <li key={g.id}>{g.id}</li>
            ))
          }
        </ul>
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