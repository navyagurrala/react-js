import ProfileCard from "./card"



const Mapmethod=()=>{
    const memdata=[
        {
          name:"navya", color:"blue", desc:"frontend developer"
        },{
          name:"akila" ,color:"blue", desc:"frontend developer"
        }
        ,{
          name:"afsha", color:"blue" ,desc:"frontend developer"
        },
       
      ]
    return(
        <>
        
        {
            memdata.map((details)=><ProfileCard profile={details}/>)
        }
        </>
    )
}

export default Mapmethod;