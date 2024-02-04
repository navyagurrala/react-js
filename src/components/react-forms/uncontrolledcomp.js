import { useContext, useRef, useState } from "react"
import { Datashare } from "../../routing/navigation"


const Forms=()=>{
    const nameRef=useRef()
    const passRef=useRef()
    const [error,seterror]=useState("")

    const {logintrue}=useContext(Datashare)


    const handlesubmit=(event)=>{
event.preventDefault()
console.log(nameRef.current.value)
console.log(passRef.current.value)

const hitserver=(data)=>{
  fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>{console.log(res)
 if(res.message){
  seterror(res.message)
  alert(res.message)
 }
 else{
  console.log(res)
  logintrue()
  alert("successfull login")
  localStorage.setItem("userlogininfo",res.data)
 }

})
.catch(err=>console.log(err))
}
  

const userinfo={
  username:nameRef.current.value,
  password:passRef.current.value
}
hitserver(userinfo)
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
  <div className="form-group">
    <label >Email address:</label>
    <input type="text" className="form-control" id="email" ref={nameRef}/>
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passRef}/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
        </>
    )
}
export default Forms