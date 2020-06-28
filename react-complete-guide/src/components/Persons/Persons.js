import React from 'react';
import Person from './Person/Person';
const persons = (props) => props.persons.map((eachPerson, index) => {
        return <Person
            click={ () => props.clicked( index ) }
            name={eachPerson.name}
            age={eachPerson.age}
            key={eachPerson.id}
            changed={ ( event ) => props.changed(event, eachPerson.id) } /> //Keys help react know what to render easily without having to inspect deeply inside one element
    }) 
export default persons;