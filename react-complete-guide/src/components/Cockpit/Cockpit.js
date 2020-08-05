import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext); //Using context outside of jsx in function based

  console.log(authContext);
  //Runs every render cycle
    //Is basically componentDidMount() and componentDidUpdate() in one
  useEffect(() => {

    console.log("[Cockpit.js] useEffect");
    // //Can send http request
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] clean up work in useEffect");
    };
  }, []); 

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] clean up work in 2nd useEffect");
    };
  });
  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  const authStyle = {
    fontWeight: "bold",
    color: 'green'
    
  };
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1> {/*One root element per component is typical */}
      <p className={assignedClasses.join(" ")}>This is really working!!</p>
      {authContext.authenticated ? (
        <p style={authStyle}>Authenticated</p>
      ) : (
        <p className={classes.red}>Please Login!</p>
      )}
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      {<button onClick={authContext.login}>Log In</button>}
    </div>
  );
};
export default React.memo(cockpit);
