import React, {useState} from "react";

import AddAmount from "../components/AddAmount/AddAmount";
import Input from "../components/Input/Input.js"

export default function Nullschema (){
    let inputValue;
    const [newValue, setnewValue] = useState(0); 


    function inputSave(event) {
        console.log(event.target.value)
        inputValue = event.target.value;

    }

    function addAmount() {
        console.log('54343543',inputValue);
       fetch('http://localhost:3000/accumulationnew', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({value: +inputValue, name:"Обнуление", id:"60b60a5482afc30dacdbd63c"})

        })
        .then((res)=> res.json())
        .then((newValue) => { console.log(newValue) 
        setnewValue(newValue)
        });
        // Тянем с сервера схему расчета и Добавляем в поле Input text="Сбережения" расчитанные значения
    }
    

    return (
        <div>
            <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} newValue={newValue}/>
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" addAmount={addAmount} />
        </div >
    )

}