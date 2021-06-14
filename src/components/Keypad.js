// Code Keypad Component Here
import React, {Component} from 'react';


class Keypad extends Component{

    handleTypeEvent = (event) => {
        console.log("Entering password...")
    }
    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.handleTypeEvent}/>
            </div>
        )
    }
}
export default Keypad;