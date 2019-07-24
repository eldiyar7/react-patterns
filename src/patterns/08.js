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

  callAll = (...fns) => (...args) =>
    fns.forEach(fn => fn && fn(...args))

  // onClick event calls both `onClick(onButtonClick)` provided by child plus `this.toggle`
  getTogglerProps = ({onClick, ...props}) => {
    return {
      // onClick: (...args) => {
      //   onClick && onClick(...args)
      //   this.toggle()
      // },
      onClick: this.callAll(onClick, this.toggle),
      ...props,
    }
  }

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      getTogglerProps: this.getTogglerProps,
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}
// `button` onClick event has 2 functionalities: `toggle` and `onButtonClick`
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
  onButtonClick = () => console.log('onButtonClick'),
}) {
  return (
    <Toggle onToggle={onToggle}>
      {({on, getTogglerProps}) => (
        <div>
          <Switch on={on} {...getTogglerProps({on})} />
          <hr />
          <button
            {...getTogglerProps({
              'aria-label': 'custom-button',
              'aria-pressed': on,
              onClick: onButtonClick,
            })}
          >
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}
    </Toggle>
  )
}

export {Usage as default}

/* More examples */
// https://codesandbox.io/s/busy-tree-prvc2
