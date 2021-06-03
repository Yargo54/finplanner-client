import React from "react";

import "./AddAmount.css";

export default function AddAmount() {
    return (
        <div className="div-with-add-amount">
            <button type="button" className="button-plus"></button>
            <input type="number" className="input-add-amount" placeholder="добавить денежное поступление..."/>
        </div>
    )
}