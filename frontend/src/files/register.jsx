import React from "react";
import axios from "axios";


import PopUp from "./popup.jsx";

const sendData = async(data) => {
    var response = await axios.post("/register", data);
    console.log(response);
}



function Register()
{

    var [Name, setName] = React.useState("");
    var [Email, setEmail] = React.useState("");
    var [Password, setPassword] = React.useState("");
    var [RePassword, setRePassword] = React.useState("");
    //for passwords do not match    
    var [falseStatus, setFalseStatus] = React.useState(false);
    var [falseStatusText, setFalseStatusText] = React.useState("");

    // function Change(){
    //     setFalseStatus(false)
    // }

    // const PopUp = (props) => {
    //     return ( (props.trigger) ?
    //         <div id = "password-not-match-popup">
    //             <button  onClick = {Change}> ❌ </button>
    //             <span>The Enter Passwords does not match</span>
    //         </div> : ""
    //     )
    // }

    function changeStatus(){
        setFalseStatus(false);
        setFalseStatusText("");
    }
    

    function submitFunction(event){
        event.preventDefault();
        if(Password != RePassword){
            setFalseStatus(true);
            setFalseStatusText("he Enter Passwords does not match");
        }
        
        else{
            
            var data = {
                Name : Name,
                Email : Email,
                Password : Password,
            }
    
            console.log(data);
            sendData(data);
        }

    }

    return (
        <div className = "cantainer-fluid register-cantainer">
           
            <div className = "register">
                <form className = "register-form">
                    <input type="text" placeholder = "Name" value = {Name} autoFocus 
                     onChange = {(e) => setName(e.target.value)}/>
                    <br />
                    <input type="email" placeholder = "email" value = {Email} 
                    onChange = {(e) => setEmail(e.target.value)}/>
                    <br />
                    <input type="password" placeholder="Create Password" value = {Password}
                    onChange = {(e) => setPassword(e.target.value)}/>
                    <br />
                    <input type="password" placeholder = "Re-enter Password" value = {RePassword}
                    onChange = {(e) => setRePassword(e.target.value)}/>
                    <br />
                    <button  onClick = {submitFunction}>Submit</button>
                    </form>
            </div>

            <PopUp  text = {falseStatusText} status = {falseStatus} change = {changeStatus}/>   
            
        </div>
    )
}

export default Register;