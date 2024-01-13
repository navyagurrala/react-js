





function Apiget(){

    const fetchdata=()=>{
        try{
            fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(response=>response.json())
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
            // success()
            alert("success")
        }
        catch(error){
            console.log("can't reach the server")
        }
    
    }
    
        return(
            <>
            <h1>api call</h1>
            <button onClick={fetchdata}>click me to fetch data</button>
            </>
        )
    }
    
    export default Apiget