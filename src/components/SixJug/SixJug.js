import React, { useState } from "react";
import AddAmount from "../AddAmount/AddAmount.js";
import Input from "../Input/Input.js";

export default function SixJug() {

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

    let [amounting, setAmounting] = useState('');//получение суммы
    let [countAmount, setCount] = useState('');//запись суммы

    let [mandatorySpendin, setMandatorySpendin] = useState('');//обязательные траты
    let [saving, setSaving] = useState('');//сбережения
    let [optionalSpending, setOptionalSpending] = useState('');//дорогие траты
    let [selfDevelopment, setSelfDevelopment] = useState('');//саморазвитие
    let [spender, setSpender] = useState('');//транжир
    let [presents, setPresents] = useState('');//подарки

    function addAmountSave(event) {
        setAmounting(event.target.value); 
    }

    function Counting() {
        setCount(amounting);
        console.log(countAmount);
        setMandatorySpendin( (countAmount * 0.55).toFixed(0) );
        setSaving(countAmount * 0.1);
        setOptionalSpending(countAmount * 0.1);
        setSelfDevelopment(countAmount * 0.1);
        setSpender(countAmount * 0.1);
        setPresents(countAmount * 0.05);
    }

    return (
        <div>
            <AddAmount amount="добавить денежное поступление..."  type="six" addAmountSave={addAmountSave} Counting={Counting}/>
            <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending} value={mandatorySpendin}/>
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" value={saving}/>
            <Input text="Дорогие, но не обязательные покупки" classInput="accumulation" classInputPContent="accumulation-p" content={popularOptionalSpending} value={optionalSpending}/>
            <Input text="Обучение, саморазвитие, хобби" classInput="accumulation" classInputPContent="accumulation-p" value={selfDevelopment}/>
            <Input text="Транжирство" classInput="accumulation" classInputPContent="accumulation-p" value={spender}/>
            <Input text="Подарки и благотворительность" classInput="accumulation" classInputPContent="accumulation-p" value={presents}/>
        </div>
    )
}