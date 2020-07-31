import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//Stateful component, try to have as less of these as possible.
class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }
    state = { //State is only available in components that extends React.Component not the function components
        persons: [
            { id: 'askdf', name: 'Anon', age: 19 },
            { id: 'jk;jii', name: 'Dad', age: 50 },
            { id: 'nkhgi', name: 'Non', age: 19 }
        ],
        otherState: 'some other value',
        showPersons: false
    }
    static getDerivedStateFromProps(props, state){
        console.log('[App.js] get derived state from props', props);
        return state;
    }
    
    componentDidMount(){ //Fetch new data
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[App.js] shouldComponentUpdate');
        return true; //Must return true for component to update
    }

    componentDidUpdate(){ //Fetch new data
        console.log('[App.js] componentDidUpdate');
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
        console.log('[App.js] render');
        let persons = null;
    
        if ( this.state.showPersons ){
            persons = <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}/>;
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor:'salmon',
            //     color: 'black'
            // }
        }

        return (
            
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle} //component props must be referred to using this keyword
                    showPersons={this.state.showPersons}
                    persons = {this.state.persons}
                    clicked = {this.togglePersonsHandler} />
                { /*Note 1*/ }
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