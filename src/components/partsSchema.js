import React, { useState } from "react";


import AddAmount from "./AddAmount/AddAmount";
import Input from "./Input/Input"

export default function Partsschema() {
    let inputValue;
    const [basicValue, setbasicValue] = useState();
    const [desiredValue, setdesiredValue] = useState();
    const [accumulationValue, setaccumulationValue] = useState();

    let mandatorySpending =
            <ul className="ul-mandatory_spending">
                <li>платежи по кредитам</li>
                <li>коммунальные услуги</li>
                <li>оплата детского сада</li>
                <li>машина, бензин</li>
                <li>питание</li>
            </ul>
    
        let savings =
            <ul className="ul-popularOptionalSpending">
                <li>Сумма которую вы отложили на сбережения</li>
            </ul>
    
        let popularOptionalSpending =
        <ul className="ul-popularOptionalSpending">
            <li>посещение кафе и ресторанов</li>
            <li>покупка планшета, шубы</li>
            <li>оплата активностей (тренажёрка, фитнес)</li>
            <li>услуги парикмахера</li>
        </ul>
    

    function inputSave(event) {
        console.log("inputSave", event.target.value)
        inputValue = event.target.value;
        setaccumulationValue(inputValue * 0.2)
        setTimeout(() => {
            setbasicValue(inputValue * 0.5);
            setdesiredValue(inputValue * 0.3);
            setaccumulationValue(inputValue * 0.2)
        }, 400
        );
    }

    function addAmount() {

        fetch('http://localhost:3000/accumulationnew', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ basic: +basicValue, desired: +desiredValue, accumulation: +accumulationValue, name: "50/30/20", id: "60b5ff4c82afc30dacdbd638" })

        })
            .then((res) => res.json())
            .then((newValue) => {
                console.log("newValue", newValue)
                setbasicValue(newValue.basic);
                setdesiredValue(newValue.desired)
                setaccumulationValue(newValue.accumulation)

             });        
    }


    return (
        <div>
            <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} addAmount={addAmount} />

            <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" inputValue={basicValue} content={mandatorySpending} />
            <Input text="Расходы на жизнь" classInput="accumulation" classInputPContent="accumulation-p" inputValue={desiredValue} content={popularOptionalSpending} />
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" inputValue={accumulationValue} content={savings} />
        </div>
    )

}
