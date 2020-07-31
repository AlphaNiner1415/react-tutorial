import React, { useEffect } from 'react';

import classes from './Cockpit.css'
const cockpit = (props) => {
    useEffect(() => {
        //Runs every render cycle
        //Is basically componentDidMount() and componentDidUpdate() in one
        console.log('[Cockpit.js] useEffect');
        //Can send http request
        setTimeout(() => {
            alert('Saved data to cloud');
        },1000);
        
    }, [props.persons]); //Conditional, useEffect now only runs if person changes

    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>  {/*One root element per component is typical */}
            <p className={assignedClasses.join(' ')}>This is really working!!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button> 
        </div>
    );
};
export default cockpit