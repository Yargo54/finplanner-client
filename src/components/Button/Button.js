import React from "react";

import "./Button.css"

export default function Button ( { isActive, text, classbutton } ) {
    if (classbutton === "button-log"){
        return(
            <button className="button-log" disabled= {isActive} >{text}</button>
        )
    } else if (classbutton === "button-register") {
        return(
            <button className="button-register" disabled= {isActive}>{text}</button>
        )
    } else if (classbutton === "button-forgot") {
        return(
            <button className="button-forgot" disabled= {isActive}>{text}</button>
        )
    }
}