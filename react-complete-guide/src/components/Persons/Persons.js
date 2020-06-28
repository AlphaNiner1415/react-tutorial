import React from 'react';
import Person from './Person/Person';
const persons = (props) => props.persons.map((eachPerson, index) => {
        return <Person
            click={this.deletePersonHandler.bind(this, index)}
            name={eachPerson.name}
            age={eachPerson.age}
            key={eachPerson.id}
            changed={(event) => this.nameChangeHandler(event, eachPerson.id)} /> //Keys help react know what to render easily without having to inspect deeply inside one element
    }) //In ES6 if the => will be in the same line as the function body (body has only one line of code) then omit return() and just write () which is same thing.