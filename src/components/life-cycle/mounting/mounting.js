import { Component } from "react";
import Loadingspinner from "../../loaders/loaders";



class Mountingphase extends Component{
// M1:constructor method
    constructor(){
        super()

        this.state={
            color:"blue",
            text:"Mounting phase",
            Prod:[]
        }

    }
//M2: getDerivedStateFromProps
static getDerivedStateFromProps(props){
    return{color:props.color}
}

//M4:comonent did mount

componentDidMount(){
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
        this.setState(
            {
                Prod:response
            }
        )
    })
}
    //M3:render method
        render(){

            return(
                <>
            <h1 style={{color:this.props.color}}>{this.state.text}</h1>
            {
                this.state.Prod.length>0
                ?
                <>
                {
                    this.state.Prod.map((data)=>{
                        return(
                           
                           <h1>{data.title}</h1>
                           
                        )
                    })
                }
                </>
                :
                <>
             <Loadingspinner/>
                </>
            }
            </>
            )
        }
    
}
export default Mountingphase






















// phase1:Mountingphase
// creating a component