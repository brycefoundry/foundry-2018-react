import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import Home from '../../scenes/Home'
import Cases from '../../scenes/Cases'
import Contact from '../../scenes/Contact'
import About from '../../scenes/About'
import Quote from '../../scenes/Quote'


function Nav({ location }) {
  return (
    <div className="wrapper-container">
    <div className="wrapper">

    
      <nav>
        
            <button id="menu-btn">Menu<span className="close-btn"><span className="line-1"></span><span className="line-2"></span></span></button>
            
            <Link to='/get-a-quote'>Get a Quote</Link>
          
         
        
      </nav>

    
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 2000, exit: 1000 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path='/' component={Home} />
               <Route exact path='/cases' component={Cases} />
               <Route exact path='/contact' component={Contact} />
               <Route exact path='/about' component={About} />
               <Route exact path='/get-a-quote' component={Quote} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
      <div className="bottomBar"></div>
      <div className="noLandscape"><h2>Please rotate your device into portrait mode for the best possible experience.</h2></div>
      </div>

      </div>
    
  );
}




export default withRouter(Nav);