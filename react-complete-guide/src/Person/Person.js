import React from 'react';
// import './Person.css';
import styled from 'styled-components';

//    Dumb/ Presentational components because they have no internal logic or states.

const StyleDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid#eee;
        box-shadow: 4px 5px 2px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px){
                width: 450px;
        }`
const person = (props) => {
    return (
      // <div title= {props.name} className="Person" style={style}>
      <StyleDiv>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old!!!
        </p>
        <p>{props.children}</p>{" "}
        {/*Anything passed in between the opening and closing tags*/}
        <input type="text" onChange={props.changed} value={props.name} />
      </StyleDiv>
    );
    
}


export default (person);