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
    return this.props.children({
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

// implement HOC
function withToggle(Component, callback) {
  return class extends React.Component {
    render() {
      return (
        <Toggle onToggle={callback}>
          {props => <Component {...props} />}
        </Toggle>
      )
    }
  }
}

// component injection, we can declare it outside as well
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  const ToggleComponent = withToggle(ToggleChild, onToggle)
  return <ToggleComponent />
}

export {Usage as default}
