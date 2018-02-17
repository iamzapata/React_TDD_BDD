import React, { Component } from 'react'
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

class Gift extends Component {

  constructor(props) {
    super(props)

    this.state = {
      person: null,
      present: null
    }

    this.onPersonChange = this.onPersonChange.bind(this)
    this.onPresentChange = this.onPresentChange.bind(this)
  }

  onPersonChange = (ev) => {
    const { value: person } = ev.target
    this.setState({ person })
  }

  onPresentChange = (ev) => {
    const { value: present } = ev.target
    this.setState({ present })
  }

  render() {
    return (
      <Form>
        <h3>Gift</h3>
        <FormGroup>
          <ControlLabel>Person</ControlLabel>
          <FormControl
            className='Input--Person'
            onChange={ev => this.onPersonChange(ev)}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Present</ControlLabel>
          <FormControl
            className='Input--Present'
            onChange={ev => this.onPresentChange(ev)}
          />
        </FormGroup>
      </Form>
    )
  }
}

export default Gift