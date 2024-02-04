// import "./styles.css"

function Form(){
    return(
        <div>
            <form className="form">
                first name:<input type="text"></input><br></br>
                last name:<input type="text"></input><br></br>
                Email:<input type="email"></input><br></br>
                password:<input type="password"></input><br></br>
                <input type="submit" value="login"></input>
            </form>
        </div>
    )
}
   export default Form
