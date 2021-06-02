import React from "react";
import "./Input.css"

export default function Input ( { text, content, classInputPContent } ) {
    if(content && classInputPContent === "p-register"){
        return (
            <div className="div-input-style">
                <p className="p-input-style">{text}</p>
                <input type="text" className="input-style" />
                <p className="p-register">{content}</p>
            </div>
        )
    } else if (!content) {
        return (
            <div className="div-input-style">
                <p className="p-input-style">{text}</p>
                <input type="text" className="input-style" />
            </div>
        )
    } else if (content && classInputPContent === "p-log") {
        return (
            <div className="div-input-style">
                <p className="p-input-style">{text}</p>
                <input type="text" className="input-style" />
                <a href=""><p className="p-log">{content}</p></a>
            </div>
        )
    }
}