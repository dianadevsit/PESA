import React from "react"

function Logo(props) {
    return (
        <img className="mt-3 border" src={props.image} alt={props.name} style={{width:150+"px"}} />        
    )
}

export default Logo;