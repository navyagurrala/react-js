


// import React from 'react';

import { Component } from "react";

// function  Bgcolor(){
//   return (
//     <div style={{ backgroundColor: 'blue', width: '100%' ,height:"100px"}} />
//   );
// }

// export default Bgcolor;



class Bgcolor extends Component{

    state={
        backgroundcolor:'green',
        isBackgroundcolor:false,
        backgroundchnage:'pink'
    }

    tochangecolor=()=>{
        this.setState={
            isBackgroundcolor:true
        }
    }


    render(){
        return(
            <div>

                <button onClick={this.tochangecolor()}>click to change color</button>
                </div>
        )
    }
}
export default Bgcolor













// function Bgcolor(){
//     const isBackgroundwhite=true;
//     return(
//         <div style={{
//             backgroundColor:isBackgroundwhite?"black":"red",
//            change:click(()=>{
//             backgroundColor:"green"
//            })
//             }
//         }>
//             <button  onClick={this.change}>click to change color </button>
//         </div>
//     )
// }
// export default Bgcolor
















// class colorcomponent extends component{


//     render(){
         

//         return(
             
//         )
//     }
// }