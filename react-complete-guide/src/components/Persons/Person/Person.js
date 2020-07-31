import React, { Component } from 'react';
import classes from './Person.css';
//    Dumb/ Presentational components because they have no internal logic or states.

//Finished, no need to split into smaller components
class Person extends Component {
  render(){
    console.log('[Person.js] rendering....');
    return (

      // <div title= {props.name} className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!!!
      </p>
        <p>{this.props.children}</p>{" "}
        {/*Anything passed in between the opening and closing tags*/}
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
  
    
}


export default (Person);