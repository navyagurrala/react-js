import React, { useState } from "react"


const UseStateEx2=()=>{
const [currentstate,updatedstate]=useState(
    [
        {
            id:1,
            name:"navya",
            salary:25000
        },
        {
            id:2,
            name:"archu",
            salary:25000
        }
    ]
)
const handleincreamnet=(details)=>{
    updatedstate(currentstate+1000)
// console.log(details);
}
const handledecreament=(details)=>{
    updatedstate(currentstate-1000)

    // console.log(details);

}



    return(
        <>
        {
            currentstate.map(value=><React.Fragment key={value.id} >
            <h2>{value.name}</h2>
            <h2>{value.salary}</h2>
            <button onClick={()=>{handleincreamnet(value)}}>click to increase</button>
            <button onClick={()=>{handledecreament(value)}}>click to decrease</button>

            
            </React.Fragment>)
        }
        </>
    )
}
export default UseStateEx2
