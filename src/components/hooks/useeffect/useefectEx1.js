import axios from "axios"
import { useEffect, useState } from "react"
import Loadingspinner from "../../loaders/loaders"



const UseEffectEx1=()=>{
useEffect(
    ()=>{
        fetchingdata()
        console.log("component did mount")
    },[]
)
const [products,setproducts]=useState([])

const fetchingdata=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>
        {
            if(response.status===200){
                setproducts(response.data)

        }}
        )
}

    return(
        <>
        <h1>I'm useeffectex1</h1>
        {
            products.length>0
            ?
            products.map(product=><Data key={product.id} data={product} />)
            :
            // <h1>loading....</h1>
            <Loadingspinner/>
            

        }
        </>
    )
}

export default UseEffectEx1

const Data=({data})=>{
    return(
        <>
        <h1>{data.title}</h1>
        <img src={data.image} width={100} height={100}/>
        <h3>{data.price}</h3>
        
        </>
    )
}