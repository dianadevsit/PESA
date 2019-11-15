import React from "react"

function GoogleButton() {
    return (
        <div className="g-signin2 float-right mt-4" data-onsuccess="onSignIn"></div>
    )
}

export default GoogleButton;






// <button className="btn btn-primary" onClick={props}>{props.children}</button>