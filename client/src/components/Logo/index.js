// import react

import React from "react"


// logo component

function Logo(props) {
    return (
        <img className="mt-1 ml-4 border" src={props.image} alt={props.name} style={{width:100+"px"}} />        
    )
}


export default Logo;