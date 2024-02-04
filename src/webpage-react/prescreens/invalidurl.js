import { useNavigate } from "react-router-dom"



const Invalidurl=()=>{

    const navigate=useNavigate()
    const handlenavigate=()=>{
        navigate("/")
    }
    return(
        <>
        <h1>page not found,please check the url</h1>
        <button onClick={handlenavigate}>move to login screen</button>
        </>
    )
}

export default Invalidurl