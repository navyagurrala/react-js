import { Route, Routes } from "react-router-dom"
import Loginscreen from "../webpage-react/prescreens/loginscreen"
import Invalidurl from "../webpage-react/prescreens/invalidurl"





const Prelogin=()=>{
    return(
        <>
        <Routes>
        <Route path="/" Component={Loginscreen}></Route>
        <Route path="*" Component={Invalidurl}></Route>
        </Routes>
        
        
        </>
    )
}
export default Prelogin