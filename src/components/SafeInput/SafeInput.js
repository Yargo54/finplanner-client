import React, {useState} from "react";

import AddAmount from "../AddAmount/AddAmount.js";
import Input from "../Input/Input.js";

export default function SafeInput (){

    let inputValue;

    let [saving, setSaving] = useState('')//сбережения

    function inputSave(event) {
        console.log("inputSave",event.target.value)
        inputValue = event.target.value;
        setSaving(inputValue);
    }

    function addAmount() {
        console.log('addAmount',inputValue);
        fetch('http://localhost:3000/accumulationnew', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                save: +saving, 
                name:"Сейф", 
                id:"60b6074482afc30dacdbd63b"
            } )
        })
        .then((res)=> res.json())
        .then((newValue) => { console.log("newValue",newValue) 
        setSaving(newValue)
        });
        // Тянем с сервера схему расчета и Добавляем в поле Input text="Сбережения" расчитанные значения
    }

    return(
        <div>
            <AddAmount amount="добавить денежное поступление..." inputSave={inputSave} addAmount={addAmount}/>
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" newValue={saving}/>
        </div>
    )

}