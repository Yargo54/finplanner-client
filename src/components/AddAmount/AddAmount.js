import React, { useState } from "react";

import "./AddAmount.css";


export default function AddAmount( { amount, inputSave, addAmount, newValue} ) {

    return (
        <div className="div-with-add-amount">
            <button onClick={addAmount} type="button" className="button-plus"></button>
            <input onChange={inputSave} value={newValue} type="number" className="input-add-amount" placeholder={amount}/>
        </div>
    )
}

// export default function AddAmount( { amount, addAmountSave, Counting } ) {

//         return (
//             <div className="div-with-add-amount">
//                 <button onClick={Counting} type="button" className="button-plus"></button>
//                 <input onChange={addAmountSave} type="number" className="input-add-amount" placeholder={amount}/>