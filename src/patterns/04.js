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
    return (
      <div>
        {this.props.children({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    )
  }
}

// Rendering responsibility becomes under the ownership of the user and not the component implementation
// User of a component passes function as children to the component and component calls it with some values
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      {({on, toggle}) => (
        <div>
          {on ? 'The button is on' : 'The button is off'}
          <Switch on={on} onClick={toggle} />
          <hr />
          <button aria-label="custom-button" onClick={toggle}>
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}
    </Toggle>
  )
}

export {Usage as default}
