import {Link } from "react-router-dom"
const LandingPage =() =>{
    return(
        <div className="LandingPage">
            <h1>Login As....?</h1>
            <Link to ="/admin-login">Admin login</Link>
            <Link to ="/user-login">User Login</Link>
        </div>
    );
}

export default LandingPage;