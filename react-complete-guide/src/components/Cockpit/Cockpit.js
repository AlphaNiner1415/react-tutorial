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
        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        };
        
    }, []); //Empty brackets means no dependencies for useEffect, so it will only run once at start, because there will be no dependency change to trigger it.

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
    });
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
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
export default React.memo(cockpit);