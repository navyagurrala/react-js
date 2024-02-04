import { useContext, useEffect, useState } from "react"
import Footer from "../../components/bootstrap/footer"
import UseEffectEx1 from "../../components/hooks/useeffect/useefectEx1"
import Foooter1 from "../../components/navbar/footer"
import Navbar from "../../components/navbar/navbar"
import img1 from "./img1.jpg"
import axios from "axios"
import Loadingspinner from "../../components/loaders/loaders"
import { Link } from "react-router-dom"
import { Datashare } from "../../routing/navigation"



const Homescreen=()=>{
   useEffect(
      ()=>{
          fetchingdata()
        //   console.log("component did mount")
      },[]
  )
  const [products,setproducts]=useState([])
  const [totalprice,settotalprice]=useState(null)

  const {darktheme,themehandler}=useContext(Datashare)
  
  const fetchingdata=()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(response=>
          {
              if(response.status===200){
               const newresponse= response.data.map(eachobject=>{
                    return{...eachobject,count:1,total:eachobject.price}
                })
                  setproducts(newresponse)
                  console.log(newresponse)
                  const result=sumOfPrice(response.data)
                  settotalprice(result)
                //   console.log(result)
  
          }}
          )
  }
const sumOfPrice=(arrayOfobjects)=>{
    const finalresult=arrayOfobjects.reduce((initial,eachobj)=>initial+eachobj.price,0)
    return finalresult
}
    const controltheme=()=>{
      themehandler()
    }

     return(
        <>
        <Navbar/>
        {/* <UseEffectEx1/> */}
        <div style={{height:100,width:100,backgroundColor:darktheme?"black":"blue"}}></div>
        <button onClick={controltheme}>change theme</button>
         <h1 style={{textAlign:"center"}}>I'm  on home screen</h1>
       <img src={img1} width={"100%"}></img>
       <h1>total price:{totalprice}</h1>
       {
            products.length>0
            ?
            products.map(product=><Data key={product.id} data={product} />)
            :
            // <h1>loading....</h1>
            <Loadingspinner/>
            

        }
       {/* <Foooter1/>  */}
       <Footer/>
        </>
     )
}

export default Homescreen

const Data=({data})=>{
   return(
       <>
      
       <h1>{data.title}</h1>
       <img src={data.image} width={100} height={100}/>
       <h3>{data.price}</h3>
       <Link to={`/productdetails/${data.id}`}>
       <button>click view more</button>
       </Link>
       
       </>
   )
}