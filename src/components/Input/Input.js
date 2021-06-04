import React, { useEffect, useState } from "react";
import "./Input.css"

export default function Input ( { text, content, classInputPContent, classInput, countConvert, countOsnova, countCel, osnova} ) {

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