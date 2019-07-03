import React, {Component} from 'react'
import {Switch} from './../components/switch'

const ToggleContext = React.createContext()

class Toggle extends Component {
  state = {
    on: false,
  }

  static On = props => (
    <ToggleContext.Consumer>
      {context => (context.on ? props.children : null)}
    </ToggleContext.Consumer>
  )

  static Off = props => (
    <ToggleContext.Consumer>
      {context => (context.on ? null : props.children)}
    </ToggleContext.Consumer>
  )

  static Button = props => (
    <ToggleContext.Consumer>
      {context => (
        <Switch on={context.on} onClick={context.toggle} {...props} />
      )}
    </ToggleContext.Consumer>
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
    return (
      <ToggleContext.Provider
        value={{on: this.state.on, toggle: this.toggle}}
      >
        {this.props.children}
      </ToggleContext.Provider>
    )
  }
}

// Problem with Compound Components is that it can only be applied to immediate
// children. What if component nested inside a div like `Togggle.Button` below? How you pass props to that componennt?
// We can use `React.createContext` API
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The switch is on</Toggle.On>
      <Toggle.Off>The switch is off</Toggle.Off>
      <div>
        <Toggle.Button />
      </div>
    </Toggle>
  )
}

export {Usage as default}
