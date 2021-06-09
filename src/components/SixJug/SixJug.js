import React, { useState } from "react";


import AddAmount from "../AddAmount/AddAmount.js";
import Input from "../Input/Input.js"

export default function SixJug() {
    let inputValue;

    let [mandatorySpendin, setMandatorySpendin] = useState('');//обязательные траты
    let [saving, setSaving] = useState('');//сбережения
    let [optionalSpending, setOptionalSpending] = useState('');//дорогие траты
    let [selfDevelopment, setSelfDevelopment] = useState('');//саморазвитие
    let [spender, setSpender] = useState('');//транжир
    let [presents, setPresents] = useState('');//подарки

    //Обязательные траты
    let mandatorySpending = 
    <ul className="ul-mandatory_spending">
        <li>платежи по кредитам</li>
        <li>коммунальные услуги</li>
        <li>оплата детского сада</li>
        <li>машина, бензин</li>
        <li>питание</li>
    </ul>

    //Необязательные траты
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
        setTimeout(() => {
            setMandatorySpendin(inputValue * 0.5).toFixed(2);
            setSaving(inputValue * 0.1).toFixed(2);
            setOptionalSpending(inputValue * 0.1).toFixed(2);
            setSelfDevelopment(inputValue * 0.1).toFixed(2);
            setSpender(inputValue * 0.1).toFixed(2);
            setPresents(inputValue * 0.05).toFixed(2);
        }, 400
        );
    }

    function addAmount() {
        fetch('http://localhost:3000/accumulationnew', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(
                { 
                    main: +mandatorySpendin, 
                    accumulation: +saving, 
                    expensive_purchases: +optionalSpending,
                    self_development_and_hobbies: +selfDevelopment,
                    squander: +spender,
                    presents: +presents,
                    name: "Шесть кувшинов", 
                    id: "60b601cd82afc30dacdbd639" 
                }
                )
            })
            .then((res) => res.json())
            .then((newValue) => {
                console.log("newValue", newValue)
                setMandatorySpendin(newValue.main)
                setSaving(newValue.accumulation)
                setOptionalSpending(newValue.expensive_purchases)
                setSelfDevelopment(newValue.self_development_and_hobbies)
                setSpender(newValue.squander)
                setPresents(newValue.presents)
             });        
    }

    return (
        <div>
            <AddAmount amount="добавить денежное поступление..."  type="six" inputSave={inputSave} addAmount={addAmount}/>
            <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending} inputValue={mandatorySpendin}/>
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" inputValue={saving}/>
            <Input text="Дорогие, но не обязательные покупки" classInput="accumulation" classInputPContent="accumulation-p" content={popularOptionalSpending} inputValue={optionalSpending}/>
            <Input text="Обучение, саморазвитие, хобби" classInput="accumulation" classInputPContent="accumulation-p" inputValue={selfDevelopment}/>
            <Input text="Транжирство" classInput="accumulation" classInputPContent="accumulation-p" inputValue={spender}/>
            <Input text="Подарки и благотворительность" classInput="accumulation" classInputPContent="accumulation-p" inputValue={presents}/>
        </div>
    )
}