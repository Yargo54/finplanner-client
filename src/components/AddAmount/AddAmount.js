import React, { useState } from "react";

import "./AddAmount.css";

export default function AddAmount( { amount, inputSave, addAmount, type, newValue} ) {

    return (
        <div className="div-with-add-amount">
            <button onClick={addAmount} type="button" className="button-plus"></button>
            <input onChange={inputSave} value={newValue} type="number" className="input-add-amount" placeholder={amount}/>
        </div>
    )
}