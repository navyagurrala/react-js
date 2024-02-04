import { useContext } from "react"
import Bootstrap from "../../components/bootstrap/firstbootstrap"
import UseEffectEx1 from "../../components/hooks/useeffect/useefectEx1"
import Navbar from "../../components/navbar/navbar"
import { Datashare } from "../../routing/navigation"





const Productscreen=()=>{
    const {darktheme}=useContext(Datashare)
    return(
        <>
<Navbar/>
<div style={{height:100,width:100,backgroundColor:darktheme?"black":"blue"}}></div>

<h1>
    I'm on products screen
</h1>
{/* <Bootstrap/> */}
<UseEffectEx1/>

         </>
    )
}

export default Productscreen