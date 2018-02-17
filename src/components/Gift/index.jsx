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
  }

  onChangePerson(ev) {
    const { value: person } = ev.target
    this.setState({ person })
  }

  onChangePresent(ev) {
    const { value: present } = ev.target
    this.setState({ present })
  }

  onClickRemoveGift() {
    const {
      gift: { id }
    } = this.props;

    this.props.removeGift(id)
  }

  render() {
    return (
      <Form>
        <h3>Gift</h3>
        <FormGroup>
          <ControlLabel>Person</ControlLabel>
          <FormControl
            className='Input--Person'
            onChange={ev => this.onChangePerson(ev)}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Present</ControlLabel>
          <FormControl
            className='Input--Present'
            onChange={ev => this.onChangePresent(ev)}
          />
        </FormGroup>
        <Button
          className='Btn--Remove'
          onClick={() => this.onClickRemoveGift()}
        >
          Remove Gift
        </Button>
      </Form>
    )
  }
}

export default Gift