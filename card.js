
import img from "./img1.jpeg"


const ProfileCard=(props)=>{
  console.log(props)
    return(
        <>
<div className="card" style={{width:"100%",backgroundColor:"pink"}} >
    <img className="card-img-top" src={img} alt="Card" style={{width:"100%"}}/>
    <div className="card-body">
      <h4 className="card-title" style={{text:props.color}}>{props.profile.name} </h4>
      <p className="card-text">{props.profile.desc}</p>
      <a href="https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_card_image&stacked=h" className="btn btn-primary">See Profile</a>
    </div>
  </div>

        </>
    )
}

export default ProfileCard