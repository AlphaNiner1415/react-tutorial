import React from 'react';
import classes from './Person.css';
//    Dumb/ Presentational components because they have no internal logic or states.


const person = (props) => {
    return (
      // <div title= {props.name} className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old!!!
        </p>
        <p>{props.children}</p>{" "}
        {/*Anything passed in between the opening and closing tags*/}
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    );
    
}


export default (person);