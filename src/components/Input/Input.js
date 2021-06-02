import React from "react";
import "./Input.css"

export default function Input ( { text, content } ) {
    return (
        <div className="div-input-style">
            <p className="p-input-style">{text}</p>
            <input type="text" className="input-style" />
        </div>
    )
}