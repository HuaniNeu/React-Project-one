import React, { useEffect, useRef } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
let btnClass = '';
//create a button ref constant and pass it to ref in the <button>
const togggleBtnRef = useRef(null);

//use useEffect to do it after the page renders for the toggleBtnRef to be clicked automatically
useEffect(()=>{
    togggleBtnRef.current.click();
    return () => {
        console.log("clean up after useEfFect")
    };
}, []
);


//this create a classes that stores 2 obj in the array but joined to create a single string - 'red bold'
// const classes = ['red','bold'].join(' ')
//if condition to make p diff color based on person array length
const aClasses = []
if (props.personsLength <= 2) {
    aClasses.push(classes.red)
}
if (props.personsLength <= 1) {
  aClasses.push(classes.green)
}
if(props.showPerson){
    btnClass = classes.Red;
}
    return (
        <div className = {classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className ={aClasses.join(' ')}>This is really working!</p>
        
        <AuthContext.Consumer>
            {context =>
                <button onClick = {context.login}>Log in</button>
            }
        </AuthContext.Consumer>
        
        <button
          ref = {togggleBtnRef}
          className = {btnClass}
          onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;