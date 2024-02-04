import { BrowserRouter, Route, Routes} from "react-router-dom"

import Settingscreen from "../webpage-react/postscreen/settings"
import Aboutscreen from "../webpage-react/postscreen/about"
import Productscreen from "../webpage-react/postscreen/products"
import Invalidurl from "../webpage-react/prescreens/invalidurl"
import Homescreen from "../webpage-react/postscreen/homescreen"
import Productlistview from "../webpage-react/postscreen/productview"
import { createContext, useState } from "react"
import Loginscreen from "../webpage-react/prescreens/loginscreen"
import PostLogin from "./postlogin"
import Prelogin from "./prelogin"



 export const Datashare=createContext()

const Navigationpages=()=>{
    const [name,setname]=useState("chinna")
    const [darktheme,setdarktheme]=useState(false)
const [login,setlogin]=useState(true)

const logintrue=()=>{
    setlogin(true)
}

    const themehandler=()=>{
        setdarktheme(!darktheme)
    }
    return(
        <>
<Datashare.Provider value={{name,darktheme,themehandler,logintrue}}>
<BrowserRouter>
{
    login?
    <PostLogin/>
    :
    <Prelogin/>
}
</BrowserRouter>
</Datashare.Provider>






        </>
    )
}

export default  Navigationpages