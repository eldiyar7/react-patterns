import React, {Component, useContext, useState} from 'react'
import {Switch} from './../components/switch'

const ToggleContext = React.createContext()

// context object
function useToggle() {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }
  const [on, setToggle] = context
  const onToggle = () => setToggle(status => !status)
  return {
    on,
    setToggle,
    onToggle,
  }
}
// context provider
function ToggleProvider(props) {
  // TODO: make onToggle logger work
  const [on, setToggle] = useState(false)
  const value = React.useMemo(() => [on, setToggle], [on])
  return <ToggleContext.Provider value={value} {...props} />
}

class Toggle extends Component {
  static On = props => {
    const {on} = useToggle()
    return <div>{on ? props.children : null}</div>
  }

  static Off = props => {
    const {on} = useToggle()
    return <div>{on ? null : props.children}</div>
  }

  static Button = props => {
    const {on, onToggle} = useToggle()
    return <Switch on={on} onClick={onToggle} {...props} />
  }

  render() {
    return <ToggleProvider>{this.props.children}</ToggleProvider>
  }
}

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
