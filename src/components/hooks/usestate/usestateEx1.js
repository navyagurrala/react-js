import { useState } from "react"




const UsestateEx1=()=>{

useState(0)
const [currentcount,increament]=useState(0)
const [timer,setTimer]=useState(5)


const handleincreament=()=>{
    increament(currentcount=>currentcount+1)
}
const handletimer=()=>{
let stoptimer=setInterval(() => {
    
    setTimer(timer=>timer-1)
    if(timer===0){
        // alert("timeup")/
        clearInterval(stoptimer)
       }
}
, 1000);
}


   

    return(
        <>
        <h1>usestate example---- {currentcount}</h1>

        <button onClick={handleincreament}>click to increase</button>

        <h2 style={{color:timer>50?"black":"red"}}>timer---{timer}</h2>
        <button onClick={handletimer}>click to start timer</button>
        </>
    )
    
    }
export default UsestateEx1