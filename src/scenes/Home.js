import React, { Component } from 'react';
import { render } from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'

import Listings from './Listings'


class Home extends Component {
  constructor() {
    super();
  }

componentDidMount() {
    
  console.log('loaded');

  }
render() {


return (
      <section className="home section-1">
        <div className="left"></div>


        <div className="right"></div>


        <Listings />

      </section>
    )
  }
}


export default Home


