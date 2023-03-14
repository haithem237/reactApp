import React, {Component} from "react";

class Message extends Component{
    constructor() {
        super()
        this.state = {
            messsage:'Welcome vistor'
        }
    }

    changeMessage() {
        this.setState ({
            messsage:'Thank you for subscribing'
        })
    }
        render() {
            return (
             <div>
                <h1>{this.state.messsage}  </h1>
                <button onClick={() => this.changeMessage(  )} > Subscribe </button>
             </div>
            ) 
        }
}

export default Message