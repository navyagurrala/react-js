import { Route, Routes } from "react-router-dom"
import Homescreen from "../webpage-react/postscreen/homescreen"
import Settingscreen from "../webpage-react/postscreen/settings"
import Aboutscreen from "../webpage-react/postscreen/about"
import Productscreen from "../webpage-react/postscreen/products"
import Productlistview from "../webpage-react/postscreen/productview"
import Invalidurl from "../webpage-react/prescreens/invalidurl"




const PostLogin=()=>{
    return(
        <>
        <Routes>
        <Route path="/" Component={Homescreen}></Route>
    <Route path="/settings" Component={Settingscreen}></Route>
    <Route path="/about" Component={Aboutscreen}></Route>
    <Route path="/products" Component={Productscreen}></Route>
    <Route path="/productdetails/:id" Component={Productlistview}></Route>
    <Route path="*" Component={Invalidurl}></Route>
        </Routes>
        </>
    )
}
export default PostLogin