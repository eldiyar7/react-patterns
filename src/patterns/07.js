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

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle,
      // prop collection for `button` as well as `Switch`
      togglerProps: {
        'aria-pressed': this.state.on,
        onClick: this.toggle,
      },
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      {({on, togglerProps}) => (
        <div>
          <Switch on={on} {...togglerProps} />
          <hr />
          <button aria-label="custom-button" {...togglerProps}>
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}
    </Toggle>
  )
}

export {Usage as default}
