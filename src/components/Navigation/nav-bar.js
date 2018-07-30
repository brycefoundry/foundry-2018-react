import React from 'react';
import { render } from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import Home from '../../scenes/Home'
import Cases from '../../scenes/Cases'
import Contact from '../../scenes/Contact'
import About from '../../scenes/About'
import Quote from '../../scenes/Quote'



const Nav = withRouter(({ location }) => (
  <div className="wrapper-container">
  <div className="wrapper">


    <nav>
      <ul>

        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cases'>Cases</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/get-a-quote'>Quote</Link>
        </li>
      </ul>
    </nav>


    <div id="page">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames='fade'
          timeout={1000}
        >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cases' component={Cases} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/get-a-quote' component={Quote} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
      <div className="bottomBar"></div>
  </div>

  </div>

)) 

export default Nav
