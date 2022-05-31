import React from "react";

function Login(){
    var [Email, setEmail] =React.useState("");
    var [Password, setPassword] = React.useState("");
    return(
        <div className = "login-div cantainer-fluid">
            <form >
                <input type="text" placeholder = "Email" value = {Email}
                onChange = {(e) => setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder = "Password" value = {Password} 
                onChange = {(e) => setPassword(e.target.value)}/>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default Login;