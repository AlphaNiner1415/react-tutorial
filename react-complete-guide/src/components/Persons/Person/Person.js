import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";
//    Dumb/ Presentational components because they have no internal logic or states.

//Finished, no need to split into smaller components
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext; //Getting access to context outside of jsx

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated); //Getting access to context outside of jsx
  }

  render() {
    console.log("[Person.js] rendering....");
    return (
      <Aux>
        {this.context.authenticated ? (
          <div>
            <p key="i1" onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!!!
            </p>
          </div>
        ) : (
          <p></p>
        )}
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          //ref={(inputEl) => {this.inputElement=inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
