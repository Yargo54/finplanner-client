import React, { useEffect, useState } from "react";
import "./Input.css"

export default function Input ( { text, content, classInputPContent, classInput, countConvert, countOsnova, countCel, osnova} ) {


    if(content && classInputPContent === "p-register"){
        return (
            <div className="div-input-style">
                <p className="p-input-style"></p>
                <input name={name} placeholder="Введите ваш email" type="text" className="input-style" />
                <p className="p-register">{content}</p>
            </div>
        )
    } else if (!content && !classInput) {
        return (
            <div className="div-input-style">
                <p className="p-input-style">{text}</p>
                <input name={name}  type="text" className="input-style" />
                {/* <input name={name} value type="text" className="input-style" /> */}
            </div>
        )
    } else if (content && classInputPContent === "p-log") {
        return (
            <div className="div-input-style">
                <p className="p-input-style">{text}</p>
                <input name={name} type="text"  className="input-style" />
                <a href="/forgotpassword"><p className="p-log">{content}</p></a>
            </div>
        )
    } else if (classInput === "accumulation" && content && classInputPContent === "accumulation-p") {
        return (
            <div className="div-input-accumulation-style">
                <p className="accumulation-p">{text}</p>
                <input type="text"  className="accumulation" />
                <p className="p-accumulation-content">{content}</p>
            </div>
        )
    } else if (classInput === "accumulation" && !content && classInputPContent === "accumulation-p") {
        return (
            <div className="div-input-accumulation-style">
                <p className="accumulation-p">{text}</p>
                <input type="text"  className="accumulation" />
            </div>
        )
    }

    return(
        <div className={classInput === "accumulation" ? "div-input-accumulation-style" : "div-input-style"}>
            <p className={classInput === "accumulation" ? "accumulation-p" : "p-input-style"}>
                {text}
            </p>
            <input 
                type="text" 
                className={classInput === "accumulation" ? "accumulation" : "input-style"}
            />
            {content ? 
            <p 
                className={classInputPContent === "p-register" ? "p-register" : "p-log" || classInputPContent === "accumulation-p" ? "accumulation-p" : null}>
                {content}
            </p> : null}
        </div>
    )

}