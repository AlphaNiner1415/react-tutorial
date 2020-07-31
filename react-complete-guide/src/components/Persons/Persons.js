import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
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