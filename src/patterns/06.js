import React, {Component} from 'react'
import {Switch} from './../components/switch'

class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState(
      state => {
        return {on: !state.on}
      },
      () => {
        this.props.onToggle(this.state)
      },
    )
  }

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}

function ToggleChild({on, toggle}) {
  return (
    <div>
      {on ? 'The button is on' : 'The button is off'}
      <Switch on={on} onClick={toggle} />
      <hr />
      <button aria-label="custom-button" onClick={toggle}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle
      onToggle={onToggle}
      render={props => <ToggleChild {...props} />}
    />
  )
}

export {Usage as default}
