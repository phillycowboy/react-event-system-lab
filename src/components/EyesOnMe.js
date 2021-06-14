// Code EyesOnMe Component Here
import React, {Component} from 'react';


class EyesOnMe extends Component{

    handleFocus = (event) => {
        console.log("Good!")
    }
    handleBlur = (event) => {
        console.log("Hey! Eyes on me!")
    }
    render(){
        return(
            <div>
               <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Hello there!</button>
            </div>
        )
    }
}
export default EyesOnMe;