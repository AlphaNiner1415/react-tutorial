import React, { Component } from 'react';
import classes from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';


//Stateful component, try to have as less of these as possible.
class App extends Component {
    
    state = { //State is only available in components that extends React.Component not the function components
        persons: [
            { id: 'askdf', name: 'Anon', age: 19 },
            { id: 'jk;jii', name: 'Dad', age: 50 },
            { id: 'nkhgi', name: 'Non', age: 19 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        const functionsPersons = this.state.persons.slice();
        //const functionsPersons = [...this.state.persons]; 'Spread operator'
        functionsPersons.splice(personIndex, 1); //You can do this
        this.setState({persons: functionsPersons})
    }
    mouseEnterHandler = () => {
        this.setState({
            persons: [
                { name: 'Anon', age: 19 },
                { name: 'Dad', age: 49 },
                { name: 'NON', age: 19 }
            ]
        })
        console.log(this.state.persons[2]);
        
    }
    mouseLeaveHandler = () => {
        this.setState({
            persons: [
                { name: 'Anon', age: 19 },
                { name: 'Dad', age: 49 },
                { name: 'Anon', age: 19 }
            ]
        })
    }
    nameChangeHandler = (event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id; 
        });
        //const person = Object.assign({}, this.state.persons[personIndex]);
        const templatePerson = {
            ...this.state.persons[personIndex]};

        templatePerson.name = event.target.value;

        const persons2 = [...this.state.persons];
        persons2[personIndex] = templatePerson;
        
        this.setState( {persons: persons2} )
    }
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;
        let btnClass = '';

        if ( this.state.showPersons ){
            persons = (
                <div>
                    {this.state.persons.map((eachPerson, index) => {
                        return <ErrorBoundary>
                        <Person 
                            click={this.deletePersonHandler.bind(this, index)}
                            name={eachPerson.name} 
                            age={eachPerson.age} 
                            key={eachPerson.id} 
                            changed={(event) => this.nameChangeHandler(event, eachPerson.id)} /></ErrorBoundary> //Keys help react know what to render easily without having to inspect deeply inside one element
                    })}
                   
                </div>
            );
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor:'salmon',
            //     color: 'black'
            // }
            btnClass = classes.Red;
        }

        let assignedClasses = []; 
        if(this.state.persons.length <=2){
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length <=1){
            assignedClasses.push(classes.bold);
        }

        return (
            
            <div className={classes.App}>
                <h1 >Hi I'm a React App</h1>  {/*One root element per component is typical */}
                <p className={assignedClasses.join(' ')}>This is really working!!</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button> { /*Note 1*/ }
                {persons}
                
            </div>
            /* Note 1: Similar to typing () => return this.switchNameHandler() alternately you can just wrap the return  in {} and put a function inside*/ 
            /* Note 1: basically passing in a function that waits to be executed and returns the result of this.switchNameHandler() when executed This way is inefficient though, best to stick with the one four lines down*/ 

        ); //These codes is compiled to the React.createElement below behind the scenes
        //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this Work now?')); //(component to render, component configuration, an infinite amount of child components)
        //If the second createElement is not used, then the h1 will be rendered as text that says h1
    }
}

export default (App); //If we import the whole file we'll just be exporting class App
//Radium(App) Called a higher order component