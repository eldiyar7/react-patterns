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
