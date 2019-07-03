import React, {Component} from 'react'
import {Switch} from './../components/switch'

class Toggle extends Component {
  state = {
    on: false,
  }

  handleClick = () => {
    this.setState(
      state => {
        return {on: !state.on}
      },
      () => {
        this.props.onToggle(this.state) // call parent handler
      },
    )
  }

  render() {
    return (
      <div>
        <Switch on={this.state.on} onClick={this.handleClick} />
      </div>
    )
  }
}

// We have `Toggle` component which manages its own state, BUT as a User of that component
// I want to know when its state has changed. I can provide `onToggle` handler.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}

export {Usage as default}
