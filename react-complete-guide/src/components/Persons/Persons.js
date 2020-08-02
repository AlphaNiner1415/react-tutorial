import React, { PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state; //Which is going to be an empty object
    // } this is rarely used

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps')
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked
    //     ){ 
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }    

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'}; //Then you can go ahead and use this in componentDidUpdate()
    }
    //componentWillUpdate()
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
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