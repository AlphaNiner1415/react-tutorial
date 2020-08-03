import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

//Stateful component, try to have as less of these as possible.
class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = { //State is only available in components that extends React.Component not the function components
        persons: [
            { id: 'askdf', name: 'Anon', age: "19" },
            { id: 'jk;jii', name: 'Dad', age: 50 },
            { id: 'nkhgi', name: 'Non', age: 19 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
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

    nameChangedHandler = (event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id; 
        });
        //const person = Object.assign({}, this.state.persons[personIndex]);
        const templatePerson = {
            ...this.state.persons[personIndex]};

        templatePerson.name = event.target.value;

        const persons2 = [...this.state.persons];
        persons2[personIndex] = templatePerson;
        
        this.setState((prevState, props) => {
            return {
                persons: persons2,
                changeCounter: prevState.changeCounter + 1
            }; 
        });
    };

    deletePersonHandler = (personIndex) => {
        const functionsPersons = this.state.persons.slice();
        //const functionsPersons = [...this.state.persons]; 'Spread operator'
        functionsPersons.splice(personIndex, 1); //You can do this
        this.setState({ persons: functionsPersons })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        console.log('[App.js] render');
        let persons = null;
    
        if ( this.state.showPersons ){
            persons = (
                <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} 
                />
            );
        }

        return (
            
            <Aux>
                <button onClick={() => {
                    this.setState({ showCockpit: false });
                    }}
                >
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle} //component props must be referred to using this keyword
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler} 
                    />
                ) : null}
               
                {persons}
            </Aux>
            /* Note 1: Similar to typing () => return this.switchNameHandler() alternately you can just wrap the return  in {} and put a function inside*/ 
            /* Note 1: basically passing in a function that waits to be executed and returns the result of this.switchNameHandler() when executed This way is inefficient though, best to stick with the one four lines down*/ 

        ); //These codes is compiled to the React.createElement below behind the scenes
        //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this Work now?')); //(component to render, component configuration, an infinite amount of child components)
        //If the second createElement is not used, then the h1 will be rendered as text that says h1
    }
}

export default withClass(App, classes.App); //classes referring to the css module classes