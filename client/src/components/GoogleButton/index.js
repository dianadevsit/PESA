import React from "react"

function GoogleButton() {
    return (
        <div className="g-signin2 float-right mt-3" 
        data-onsuccess="onSignIn"
        data-scope="https://www.googleapis.com/auth/plus.login"
        data-accesstype="offline"
        data-redirecturi="https://pesajobs.herokuapp.com/pesa"></div>
    )
}

export default GoogleButton;






// <button className="btn btn-primary" onClick={props}>{props.children}</button>