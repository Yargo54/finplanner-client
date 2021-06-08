import React, { useState } from "react";
import AddAmount from "../AddAmount/AddAmount.js";
import Input from "../Input/Input.js";

export default function SafeInput() {

    let [amounting, setAmounting] = useState('');//получение суммы
    let [countAmount, setCount] = useState('');//запись суммы

    let [saving, setSaving] = useState('')//сбережения
    
    function addAmountSave(event) {
        setAmounting(event.target.value); 
    }

    function Counting() {
        setCount(amounting);
        console.log(countAmount)
        setSaving( (countAmount * 0.15).toFixed(0) );
    }

    return(
        <div>
            <AddAmount amount="добавить денежное поступление..." addAmountSave={addAmountSave} Counting={Counting}/>
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" value={saving}/>
        </div>
    )
}