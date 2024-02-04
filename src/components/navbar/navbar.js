import { useContext } from "react"
import { Link } from "react-router-dom"
import { Datashare } from "../../routing/navigation"



const Navbar=()=>{

     const shareddata=useContext(Datashare)
     console.log(shareddata)
     const {name}=shareddata

    const links={
        textDecoration:"none",color:"white"
    }
    const liststyle={
        margin:10
    }
return(
    <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
    <ul className="navbar-nav">
    <li className="nav-item" style={liststyle}>
       <Link to="/" style={links}>{name}</Link>
      </li>
      <li className="nav-item" style={liststyle}>
       <Link to="/" style={links}>HOME</Link>
      </li>
     <li className="nav-item" style={liststyle}>
     <Link to="/about" style={links}>ABOUT</Link>

      </li>
      <li className="nav-item" style={liststyle}>
      <Link to="/settings" style={links}>SETTINGS</Link>

      </li>
      <li className="nav-item" style={liststyle}>
      <Link to="/products" style={links}>PRODUCTS</Link>

      </li>
    </ul>
      <a href="#!" class="btn btn-primary" data-mdb-ripple-init>ADD TO CART</a> 
  </div>
    </nav>
    </>
)
}
export default Navbar