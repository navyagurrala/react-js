import React, { useState } from "react"



const UseStateEx3=()=>{
const fruits=["apple","banana","kiwi"]
    const [currentVal,updatedVal]=useState(fruits)

   const addingFruit=()=>{
    const Fr="grapes"
    updatedVal([...fruits,Fr])

    }

    return( 
    <>
        <button onClick={addingFruit}>click to add a friut</button>
        <ol>
        {
            currentVal.map((value,index)=><React.Fragment key={index}>



            <li>{value}</li>

            </React.Fragment>)
        }
        </ol>
        </>
    )
}
export default UseStateEx3
