import React from "react";
import axios from "axios";


function Login(){
    var [Email, setEmail] =React.useState("");
    var [Password, setPassword] = React.useState("");

    const sendData = async (data) => {
        var response = await axios.post("/login", data);
        console.log(response);

    }

    function submitFunction(event){
        event.preventDefault();
        console.log("we are here");
        

        // var data = {
        //     Email : Email,
        //     Password: Password
        // }

        // sendData(data);


    }

    return(
        <div className = "login-div cantainer-fluid">
            <form >
                <input type="text" placeholder = "Email" value = {Email}
                onChange = {(e) => setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder = "Password" value = {Password} 
                onChange = {(e) => setPassword(e.target.value)}/>
                <br />
                <button onChange = {submitFunction}>Login</button>
            </form>
        </div>
    )
}


export default Login;