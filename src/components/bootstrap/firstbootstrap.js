import ProfileCard from "./card"


function Bootstrap(){
  const memdata=[
    {
      name:"navya", color:"blue", desc:"frontend developer"
    },{
      name:"akila" ,color:"blue", desc:"frontend developer"
    }
    ,{
      name:"afsha", color:"blue" ,desc:"frontend developer"
    }
  ]
    return(
        <>
       {/* <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>wellcome to  Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div> */}
  
<div className="container">
  <div className="row">
    <div className="col-sm-4">
      <ProfileCard profile={memdata[0]}/>
    </div>
    <div className="col-sm-4">
    <ProfileCard   profile={memdata[1]}/>
    </div>
    <div className="col-sm-4">
    <ProfileCard   profile={memdata[2]}/>
    </div>
  </div>
</div>

        
        </>
    )
}

export default Bootstrap