import React from "react";

function PopUp(props){
    var text = props.text;
    var status = props.status;



    function change(){
        // console.log("we are here");
        status = false;
        props.change();
        
    }

    return ( (status) ?
            <div id = "password-not-match-popup">
                <button  onClick = {change}> ❌ </button>
                <span>{text}</span>
            </div> : ""
        )
}


export default PopUp;