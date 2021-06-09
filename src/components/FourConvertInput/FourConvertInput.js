import React, { useState } from "react";

import AddAmount from "../AddAmount/AddAmount.js";
import Input from "../Input/Input.js";
import СhartForFourConvert from "../СhartForFourConvert"
export default function FourConvertInput() {

    let inputValue;
    let a;
    let b;

    let [financialPurposes, setFinancialPurposes] = useState('');//финансовые цели
    let [mandatorySpend, setMandatorySpending] = useState('');//на обязательные траты
    let [convert, setConvert] = useState('');//запись суммы в конверт

    //Финансовые цели
    let foundation =
        <ul className="ul-foundation">
            <li>долгосрочный вклад</li>
            <li>дорогая покупка</li>
            <li>'подушка безопасности'</li>
        </ul>

    //Обязательные траты
    let mandatorySpending =
        <ul className="ul-mandatory_spending">
            <li>платежи по кредитам</li>
            <li>коммунальные услуги</li>
            <li>оплата детского сада</li>
            <li>машина, бензин</li>
            <li>питание</li>
        </ul>


 function inputSave(event) {
        console.log("inputSave", event.target.value)
        inputValue = event.target.value;
        a = inputValue * 0.1
        b = inputValue * 0.5
        setTimeout(() => {
            setFinancialPurposes(inputValue * 0.1)
            setMandatorySpending(inputValue * 0.5)
            setConvert((inputValue - (a + b)) / 4)
        }, 400)

    }
    console.log("financialPurposes", financialPurposes)
    console.log("mandatorySpend", mandatorySpend)
    console.log("convert", convert)

    function addAmount() {
        fetch('http://localhost:3000/accumulationnew', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                financialPurposes: +financialPurposes,
                mandatorySpend: +mandatorySpend,
                convert: +convert,
                name: "Четыре конверта",
                id: "60b6058182afc30dacdbd63a"
            })

        })
            .then((res) => res.json())
            .then((newValue) => {
                console.log("newValue", newValue)
                setFinancialPurposes(newValue.financialPurposes);
                setMandatorySpending(newValue.mandatorySpend);
                setConvert(newValue.convert);
            });
    }

    return (
        <div>
            <AddAmount amount="добавить денежное поступление..." inputSave={inputSave} addAmount={addAmount} />
            <Input text="На финансовые цели (руб.)" classInput="accumulation" classInputPContent="accumulation-p" content={foundation} inputValue={financialPurposes} />
            <p>{convert}</p>
            <Input text="На обязательные траты (руб.)" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending} inputValue={mandatorySpend} />
            <Input text="Конверт №1 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" newValue={convert} />
            <Input text="Конверт №2 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" newValue={convert} />
            <Input text="Конверт №3 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" newValue={convert} />
            <Input text="Конверт №4 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" newValue={convert} />
            <СhartForFourConvert financialPurposes={financialPurposes} mandatorySpend={mandatorySpend} convert={convert} />
        </div>
    )
}
