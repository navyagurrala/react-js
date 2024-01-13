






function Apipost(){

    const fetchdata=()=>{
        try{
            fetch('https://fakestoreapi.com/products',{
                method:"POST",
                body:JSON.stringify(
                    {
                        title: 'test product',
                        price: 13.5,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
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
    
    export default Apipost