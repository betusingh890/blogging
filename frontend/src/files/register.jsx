import React from "react";

function Register(){
    var [Name, setName] = React.useState("");
    var [Email, setEmail] = React.useState("");
    var [Password, setPassword] = React.useState("");
    var [RePassword, setRePassword] = React.useState("");

    function submitFunction(event){

        event.preventDefault();
        var data = {
            Name : Name,
            Email : Email,
            Password : Password,
            RePassword : RePassword
        }

        console.log(data);

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
                    <button type="submit" onClick = {submitFunction}>Submit</button>
                    </form>
            </div>
            
        </div>
    )
}

export default Register;