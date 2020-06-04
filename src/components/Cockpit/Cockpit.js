import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
let btnClass = '';
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
        <button
          className = {btnClass}
          onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;