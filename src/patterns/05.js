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

  // we could use `this.props.children({on: this.state.on, toggle: this.toggle})`
  // what is the difference between above and below ?
  render() {
    return React.createElement(this.props.children, {
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}

// component injection, we can declare it outside as well
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
