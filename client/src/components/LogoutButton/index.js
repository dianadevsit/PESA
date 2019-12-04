// import react

import React from "react"

// component for logout button

function LogoutButton(props) {
    return (
        <button id="logout-button" onClick={props.signOut} className="float-right mr-4 btn btn-secondary" type="button">Sign Out</button>
    )
}

export default LogoutButton;