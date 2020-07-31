import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state; //Which is going to be an empty object
    // }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true; //Should component update
    }    

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[Persons.js] componentDidUpdate');
    }

    
    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((eachPerson, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={eachPerson.name}
                    age={eachPerson.age}
                    key={eachPerson.id}
                    changed={(event) => this.props.changed(event, eachPerson.id)} /> //Keys help react know what to render easily without having to inspect deeply inside one element
            );
        }); 
    }
    
}
export default Persons;