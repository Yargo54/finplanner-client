import React from "react";

import "./Header.css";

export default function Header ( { photo, heading, info } ) {
    return (

        <div className="div-header">
            {/* <img src={photo} alt="photo" className="img-in-header"/> */}
            <div className="div-content">
                <h1 className="h1-header">{heading}</h1>
                <p className="p-info-header">{info}</p>

            </div>
            <p className="p-info-header">{info}</p>
        </div>
    )
}

