import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loadingspinner from "../../components/loaders/loaders"



const Productlistview=()=>{
    const card={
        height:"5%",
        width:"40%",margin:"0% 25%",
        border:"2px solid black"
    }
  const routeinfo = useParams()
  useEffect(()=>{
    fetchdata(routeinfo.id)
  },[routeinfo.id])
  const [products,setproducts]=useState({})
  const [quantity,setquantity]=useState(0)

const handleincreament=()=>{
  if(quantity<10){
    setquantity(quantity+1)
  }

}

const handledecreament=()=>{
  if(quantity>1){
    setquantity(quantity-1)}
}






  const fetchdata=(id)=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response=> {
        console.log(response)
        if(response.status===200){
            setproducts(response.data)

        }else{
            alert("req failed")
        }  
    })
  }

// console.log(routeinfo)
    
    return(
        <>
    
        {
            Object.keys(products).length>0
            ?
            <>
<div class="card"style={card} >
  <img src={products.image} class="card-img-top" alt="Fissure in Sandstone"/>
  <div class="card-body" style={{backgroundColor:"pink"}}>
  <h5>{products.title}</h5>
    <h2 class="card-title">{products.category}</h2>
    <h3> PRICE:{products.price}</h3>
    <h3> TOTAL:{products.price*quantity}</h3>
    <div>
      <button onClick={handledecreament}>-</button>
      <input type="text" value={quantity} style={{width:45,marginBottom:15,textAlign:"center",backgroundColor:"black",color:"white"}}/>
      <button  onClick={handleincreament}>+</button>
      <a href="#!" class="btn btn-primary" data-mdb-ripple-init style={{marginLeft:"50%",backgroundColor:"black"}}>ADD TO CART</a>
    </div>
  
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#!" class="btn btn-primary" data-mdb-ripple-init>ADD TO CART</a> */}
    
   
  </div>
</div>
            </>
            :
            <Loadingspinner/>
        }
        </>
    )
}
export default Productlistview