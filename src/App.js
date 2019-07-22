import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function ExerciseContainer({match}) {
  const {id} = match.params
  const {default: Exercise} = require(`./patterns/${id}`)
  return <Exercise />
}

function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/patterns/01">
            Pattern #1 (setState callback)
          </Link>
        </li>
        <li>
          <Link to="/patterns/02">
            Pattern #2 (Compound Components)
          </Link>
        </li>
        <li>
          <Link to="/patterns/03">
            Pattern #3 (Context Components)
          </Link>
        </li>
        <li>
          <Link to="/patterns/04">
            Pattern #4 (Render Prop Components)
          </Link>
        </li>
        <li>
          <Link to="/patterns/05">
            Pattern #5 (Component Injection: Passing render function
            as children) as children)
          </Link>
        </li>
        <li>
          <Link to="/patterns/06">
            Pattern #6 (Component Injection: Passing render function
            as prop) as prop)
          </Link>
        </li>
        <li>
          <Link to="/patterns/07">
            Pattern #7 (Prop Collection Pattern)
          </Link>
        </li>
        <li>
          <Link to="/patterns/08">
            Pattern #8 (Prop Collection Pattern: Prop Getters)
          </Link>
        </li>
        <li>
          <Link to="/patterns/09">
            Pattern #9 (Context Components: using `useContext` hook)
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
      <Route
        path="/patterns/:id"
        exact={true}
        component={ExerciseContainer}
      />
    </Router>
  )
}

export {App}
