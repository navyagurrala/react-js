import {  useState } from "react"




const Registration=()=>{
const [email,setemail]=useState("")
const [emaillErr,setemailErr]=useState("")

const handlemai=(event)=>{
  
    console.log(event.target.value)
  setemail(event.target.value)
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regEmail.test(event.target.value)){
    console.log ('Invalid Email')
    setemailErr("invalid email")
  }
  else{
setemailErr("")
  }
  
}

const [userName,setuserName]=useState("")
const [usernameError,setusernameError]=useState("")

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
const [userpassword,setuserpassword]=useState("")
const [userpassError,setuserpassError]=useState("")

const handlepassword=(event)=>{
  setuserpassword(event.target.value)
  console.log(event.target.value)
  const password=validatePassword(event.target.value)
  console.log(password)
}
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
case ( psw.includes(userName)):
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

const [confirmpass,setconfirmpass]=useState("")
const [confirmpassErr,setconfigpassErr]=useState("")

const handleconfirmpass=()=>{
  setconfirmpass([...confirmpass,userpassword])
  if(setuserpassword===setconfirmpass){
    console.log("correct password")
    setconfigpassErr("password matched")
  }
  else{
    setconfigpassErr("password does not matched")
  }

}




    return(

<>
<form onSubmit={handlesubmit}>
<div className="mb-3 mt-3">
    <label  className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="username" value={email} onChange={handlemai} />
    {
      emaillErr
      ?
      <>
      <h6 style={{color:"red"}}>{emaillErr}</h6>
      </>
      :
      null
    }
  </div>
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">username:</label>
    <input type="text" className="form-control" id="name" placeholder="Enter username" name="username" value={userName} onChange={handleusername}/>
    {
    usernameError
    ?
    <><p style={{color:"red"}}>{usernameError}</p></>
    :
    null
  }
  
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  value={userpassword} onChange={handlepassword}/>
    {
    userpassError
    ?
    <><p>invalid password {userpassError}</p></>
    :
    null
  }
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label"> confirm Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={confirmpass} onChange={handleconfirmpass}/>
  {
    confirmpassErr
    ?
    <>
    <p>password doesnot match{confirmpassErr}</p>
    </>
    :
    null
  }
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</>
    )
}

export default Registration