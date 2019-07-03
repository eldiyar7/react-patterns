import React, {Component} from 'react'
import {Switch} from './../components/switch'

class Toggle extends Component {
  state = {
    on: false,
  }

  static On = props => (props.on ? props.children : null)
  static Off = props => (props.on ? null : props.children)
  static Button = props => (
    <Switch on={props.on} onClick={props.toggle} />
  )

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
    return React.Children.map(this.props.children, child => {
      // `React.cloneElement` lets you clone the element and modify its props
      return React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      })
    })
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The switch is on</Toggle.On>
      <Toggle.Off>The switch is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  )
}

export {Usage as default}
