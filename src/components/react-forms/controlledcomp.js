import { useState } from "react"




const Controlledcomp=()=>{
const [userName,setuserName]=useState("")
const [usernameError,setusernameError]=useState("")


const [userpassword,setuserpassword]=useState("")
const [userpassError,setuserpassError]=useState("")


const handleusername=(event)=>{
    console.log(event.target.value)
setuserName(event.target.value)
console.log(event.target.value)
if(event.target.value.length>10){
    setusernameError("enter valid username")
}
else{
    setusernameError("")
}
}

const handlepassword=(event)=>{
    setuserpassword(event.target.value)
    console.log(event.target.value)
    const password=validatePassword(event.target.value)
    console.log(password)
}



const username = userName;

function validatePassword(psw)
{
let msg = true

switch (true) {
case  (psw.length < 8 || psw.length > 13):
msg = false
break
case  (!(/[0-9]/.test(psw))):
msg = false
break
case (psw === psw.toLowerCase()) || (psw === psw.toUpperCase()):
msg = false
break
case ( psw.includes(username)):
msg =false
break
}
return msg
}


const handlesubmit=(event)=>{
event.preventDefault()

const userinfo={
    userName,
    userpassword
}
console.log(userinfo,"userinfo")
if(userinfo){
    console.log("valid password")
    setuserpassError("")
}
else{
    setuserpassError("password invalid")
}
}


    return(
        <>
       <form onSubmit={handlesubmit}>
  <div className="mb-3 mt-3">
    <label  className="form-label">Email:</label>
    <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" value={userName} onChange={handleusername}/>
  
  {
    usernameError
    ?
    <><p style={{color:"red"}}>{usernameError}</p></>
    :
    null
  }
  
  </div>
  <div className="mb-3">
    <label  className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={userpassword} onChange={handlepassword}/>
  {
    userpassError
    ?
    <><p>invalid password {userpassError}</p></>
    :
    null
  }
  
  </div>
  
{
    usernameError || userpassError
    ?
   null:
   <button type="submit" className="btn btn-primary">Submit</button>


}

</form>
        </>
    )
}
export default Controlledcomp