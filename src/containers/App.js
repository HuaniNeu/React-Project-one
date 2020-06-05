import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props){
    super(props)
  }
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated: false
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p =>{
      return p.id = id;
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
      //setState can take object like below or take function eg: setState((props)=>{return(ur code`)})
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = (index) => {
    const newPersons = [...this.state.persons]
    newPersons.splice(index, 1)
    this.setState({persons: newPersons})
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render () {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons
            clicked = {this.deletePersonHandler}
            persons = {this.state.persons}
            changed = {this.nameChangedHandler}
          />
        </div>
      );

    }

    return (
      <Aux>
        <AuthContext.Provider
        value ={{
          authenticated: this.state.authenticated,
          login : this.loginHandler
        }}>
        <Cockpit
        showPersons = {this.state.showPersons}
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonsHandler}
        />
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
