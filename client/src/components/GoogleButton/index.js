import React from "react"

function GoogleButton() {
    // move google button to the right
    return (
        <div class="g-signin2" 
        data-onsuccess="onSignIn"
        data-scope="https://www.googleapis.com/auth/plus.login"
        data-accesstype="offline"
        data-redirecturi="https://pesajobs.herokuapp.com/"></div>
    )
}


export default GoogleButton;






// <button className="btn btn-primary" onClick={props}>{props.children}</button>