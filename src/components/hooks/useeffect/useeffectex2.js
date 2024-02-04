import { useEffect, useState } from "react"


const UseeffectEx2=()=>{
    const [count,setcount]=useState(0)

    useEffect(()=>{
        updatecount()
    },[count])

    const updatecount=()=>{
        document.title=`count ${count}`
    }

    const handlecount=()=>{
        setcount(count+1)
    }

   return(
    <>
    <h1>count {count}</h1>
    <button onClick={handlecount}>click to increase</button>
    </>
   )
}
export default UseeffectEx2