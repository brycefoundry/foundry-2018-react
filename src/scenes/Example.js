import React, { Component } from 'react';
import { render } from 'react-dom';

var ExampleComponent = React.createClass({
  getInitialState : function(){
    return ({isClicked : false})    
  },
  handleClick : function(){
    this.setState({isClicked : !this.state.isClicked});
  },
  render: function() {
    var someElementClass = this.state.isClicked ? 'clicked' : '';
    return(<div className="container">
               <div id="someElement" className={someElementClass}>
                  I'm an element
               </div>
               <button id="someButton" onClick={this.handleClick}>
                  Click me!
               </button>  
             </div> );
  } 
});
ReactDOM.render(<ExampleComponent />,document.getElementById('testee'));