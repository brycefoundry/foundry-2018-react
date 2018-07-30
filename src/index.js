import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Navigation/nav-bar'
import './stylesheets/app.css';


render((
  <BrowserRouter>
    <Nav />
  </BrowserRouter>
), document.getElementById('main'));
