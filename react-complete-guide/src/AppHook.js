import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = ( props ) => {
  const [ personsState, setPersonState ] = useState({
    persons: [
      { name: "Anon", age: 19 },
      { name: "Dad", age: 50 }
    ]
  });
  const [otherState, setOtherState] = useState('some other value'); //Now there's two states personsState and otherState, useState can be called infinitely.
  console.log(personsState, otherState);
  const switchNameHandler = () => {
    //console.log("Was clicked!");
    //Don't Mutate!!! personsState.persons[0].name = "Non"
    setPersonState({
      persons: [
        { name: 'Non', age: 19 },
        { name: 'Dad', age: 49 }
      ] //this doesn't merge it with an old state data

    });
  };
  
  return (
    <div className="App">
      <h1 >Hi I'm a React App</h1>  {/*One root element per component is typical */}
      <p>This is really working!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My hobby is coding</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person />
    </div>
    
  ); //These codes is compiled to the React.createElement below behind the scenes
          //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this Work now?')); //(component to render, component configuration, an infinite amount of child components)
          //If the second createElement is not used, then the h1 will be rendered as text that says h1
}

export default app; //If we import the whole file we'll just be exporting class App

// state = { //State is only available in components that extends React.Component not the function components
//   persons: [
//     { name: 'Anon', age: 19 },
//     { name: 'Dad', age: 50 }
//   ],
//   otherState: 'some other value'

// }


// // keyPressHandler = (e) =>{
// //   if(e.key === 'Enter'){
// //     console.log('Enter key was pressed!!');
// //   }
// // }
// copyHandler = () => {
//   console.log("Was copied!!");
// }