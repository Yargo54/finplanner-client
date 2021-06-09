import React, {useState} from "react";

import AddAmount from "./AddAmount/AddAmount";
import Input from "./Input/Input.js"

export default function Nullschema (){

    const [newValue, setnewValue] = useState(); 
    const [inputValue, setinputValue] = useState(); 


    function inputSave(event) {
        console.log("inputSave 13",event.target.value)
        setinputValue(event.target.value);

    }
    console.log("inputValue 17",inputValue)

    function addAmount() {
        console.log('dddAmount 20',inputValue);
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
            <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} addAmount={addAmount} />
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" newValue={newValue} />
        </div >
    )

}

