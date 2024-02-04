import { Component } from "react";
import React from "react";



class Buttoncomponent extends Component{

state={
    subscribetext1:"subscribe",
    isSubscribed:false,
    subscribetext2:"subscribed thanks"
}

handleSubscribe=()=>{

    // alert("button clicked")
    this.setState(
        {
          
            isSubscribed:!this.state.isSubscribed
        },()=>{

            console.log(this.state.isSubscribed)
        }
    )
}
    render(){
        return(
            <>
            <button onClick={this.handleSubscribe}>{this.state.isSubscribed?this.state.subscribetext2:this.state.subscribetext1}</button>
            {
                this.state.isSubscribed
                ?
                <>
                <h1>thanks for subscribing,explore more</h1>
                </>
                :
                <>
                <h2>please subscribe to access content</h2>
                </>
            }
            </>
        )
    }
}
export default Buttoncomponent;