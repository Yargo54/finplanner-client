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
        console.log(event.target, input.value)
        nullSchema = input.value;
        // Тянем с сервера схему расчета и Добавляем в поле Input text="Сбережения" расчитанные значения
    }
    return (
        <div>
            <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} addAmount={addAmount}/>
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"  />
        </div >
    )

}