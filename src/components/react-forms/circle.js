

import React, { useState } from 'react'

function Circle() {

    const [circles,setCircles]=useState([])

    const addCircle=()=>{
        setCircles([...circles,true])
    }

    const circleClick=(index)=>{
        console.log(index)
        console.log(circles)

    }

  return (
 <>
 <button onClick={addCircle} >Add Circles</button>
 <h2>Total circles {circles.length}</h2>
 {
    circles.map((value,index)=>
    <div key={index}  style={{width:100,height:100,border:"4px solid black",borderRadius:"50%",backgroundColor:value?"black":"white"}} onClick={()=>circleClick(index)}  >


    </div>
    )
 }
 
 </>
  )
}

export default Circle

















// import  React,{ useState } from "react"



// function Circles(){
//    const [addcircle,setaddcircle]=useState([])

//    const circlehandle=()=>{
//     setaddcircle([...addcircle,false])

//    }

//    const clickcircle=(index)=>{
//     console.log(addcircle)
//     console.log(index)
//    }

//     return(
//         <>
//         <button onClick={circlehandle}>click to add circle</button>
//         {
//             addcircle.map((values,index)=>{
//                 <div key={index} style={{width:100,height:100,border:"2px solid black",borderRadius:"50%"}} onClick={()=>clickcircle(index)}></div>
//             })
//         }
        
//         </>
//     )
// }

// export default Circles