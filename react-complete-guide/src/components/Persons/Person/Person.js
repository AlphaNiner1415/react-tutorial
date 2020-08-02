import React, { Component } from 'react';
import classes from './Person.css';
//    Dumb/ Presentational components because they have no internal logic or states.

//Finished, no need to split into smaller components
class Person extends Component {
  render(){
    console.log('[Person.js] rendering....');
    return [
 // <div title= {props.name} className="Person" style={style}>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!!!
        </p>,
        <p key="i2">{this.props.children}</p>,
        <input 
          key="i3" 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
    ];
  }
  
    
}


export default (Person);