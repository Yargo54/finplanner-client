import React, {useState} from "react";

import AddAmount from "./AddAmount/AddAmount";
import Input from "./Input/Input.js"

export default function Latteschema (){
    let inputValue;
    const [newValue, setnewValue] = useState(); 


    function inputSave(event) {
        console.log("inputSave",event.target.value)
        inputValue = event.target.value;

    }

    function addAmount() {
        console.log('addAmount',inputValue);
       fetch('http://localhost:3000/accumulationnew', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({value: +inputValue, name:"Эффект латте", id:"60b60b0b82afc30dacdbd63d"})

        })
        .then((res)=> res.json())
        .then((newValue) => { console.log("newValue",newValue) 
        setnewValue(newValue)
        });
        // Тянем с сервера схему расчета и Добавляем в поле Input text="Сбережения" расчитанные значения
    }
    

    return (
        <div>
            <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} addAmount={addAmount} />
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" newValue={newValue} />
        </div >
    )

}

