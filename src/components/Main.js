import React from 'react';
import { render } from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import Home from './Home'
import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


const Main = withRouter(({ location }) => (
  <div>
    <nav>
      <ul>

        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Schedule'>Other</Link>
        </li>
      </ul>
    </nav>
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames='fade'
        timeout={1000}
      >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/schedule' component={Schedule} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
)) 

export default Main
