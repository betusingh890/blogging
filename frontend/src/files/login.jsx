import React from "react";
import axios from "axios";


function Login(){
    var [Email, setEmail] =React.useState("");
    var [Password, setPassword] = React.useState("");

    const sendData = async (data) => {
        // console.log("we are here")
        var response = await axios.post("/login", data);
        console.log(response);

    }

   function submitClicked(event){
    console.log("we are here")
        event.preventDefault();
        console.log("we are here")
        var data = {
            Email : Email,
            Password : Password
        }

        sendData(data); 

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
               <button   onChange = {submitClicked}>Submit</button>
            </form>
        </div>
    )
}


export default Login;