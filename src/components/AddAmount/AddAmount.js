import React, { useState } from "react";

import "./AddAmount.css";

export default function AddAmount( { amount, inputSave, addAmount, type} ) {

    return (
        <div className="div-with-add-amount">
            <button onClick={addAmount} type="button" className="button-plus"></button>
            <input onChange={inputSave} type="number" className="input-add-amount" placeholder={amount}/>
        </div>
    )
}