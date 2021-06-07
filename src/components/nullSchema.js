import React from "react";

import AddAmount from "../components/AddAmount/AddAmount";
import Input from "../components/Input/Input.js"

export default function Nullschema (){
    let inputValue;
    function inputSave(event) {
        console.log(event.target.value)
        inputValue = event.target.value;

    }

    function addAmount(event) {
        console.log(inputValue);
       fetch('http://localhost:3000/accumulationnew', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({value: +inputValue, name:"Обнуление", id:"60b60a5482afc30dacdbd63c"})

        })
            .then((inputValue) => { console.log(inputValue) });
        // Тянем с сервера схему расчета и Добавляем в поле Input text="Сбережения" расчитанные значения
    }
    return (
        <div>
            <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} addAmount={addAmount}/>
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"  />
        </div >
    )

}