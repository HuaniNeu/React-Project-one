import React from 'react'

//create a function withClass with another funtion props=> and put JSX code into the inner function

const withClass = (WrappedComponent, className) => {
    return props =>(
        <div className ={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;