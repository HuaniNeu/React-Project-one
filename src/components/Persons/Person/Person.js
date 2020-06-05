import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context'

class Person extends Component{
constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
}
componentDidMount(){
    this.inputElementRef.current.focus();
}

    render(){
        return (
            //instead of <Aux> can use <React.Fragment> .. Do the same
            <Aux> 
                <AuthContext.Consumer>
                    {context=> context.authenticated? 
                        <p>Authenticated!</p> :
                        <p>Please log in again</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.clicked}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <input 
                    ref = {this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
    )
    }
};

Person.PropTypes = {
    clicked: PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);