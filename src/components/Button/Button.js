import React from "react";

import "./Button.css"

export default function Button ( { text, classbutton } ) {
    if (classbutton === "button-log"){
        return(
            <button className="button-log">{text}</button>
        )
    } else if (classbutton === "button-register") {
        return(
            <button className="button-register">{text}</button>
        )
    } else if (classbutton === "button-forgot") {
        return(
            <button className="button-forgot">{text}</button>
        )
    }
}