import React, { useState } from "react";

import "./AddAmount.css";

export default function AddAmount( { amount, addAmountSave, Counting } ) {

    return (
        <div className="div-with-add-amount">
            <button onClick={Counting} type="button" className="button-plus"></button>
            <input onChange={addAmountSave} type="number" className="input-add-amount" placeholder={amount}/>
        </div>
    )
}