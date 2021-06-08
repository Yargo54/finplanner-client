import React, { useState } from "react";
import AddAmount from "../AddAmount/AddAmount.js";
import Input from "../Input/Input.js";


export default function FourConvertInput () {

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

    

    let [amounting, setAmounting] = useState('');//получение суммы
    let [countAmount, setCount] = useState('');//запись суммы
    
    let [financialPurposes, setFinancialPurposes] = useState('');//финансовые цели
    let [mandatorySpend, setMandatorySpending] = useState('');//на обязательные траты
    let [convert, setConvert] = useState('');//запись суммы в конверт


    function addAmountSave(event) {
        setAmounting(event.target.value); 
    }

    function Counting() {
        setCount(amounting);
        console.log(countAmount);
        setFinancialPurposes(countAmount * 0.1)
        setMandatorySpending(countAmount * 0.5);
        setConvert( (countAmount - (financialPurposes + mandatorySpend)) / 4 )
    }

    return (
        <div>
            <AddAmount amount="добавить денежное поступление..." addAmountSave={addAmountSave} Counting={Counting}/>
            <Input text="На финансовые цели (руб.)" classInput="accumulation" classInputPContent="accumulation-p" content={foundation} value={financialPurposes}/>
            <Input text="На обязательные траты (руб.)" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending} value={mandatorySpend}/>
            <Input text="Конверт №1 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" value={convert}/>
            <Input text="Конверт №2 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" value={convert}/>
            <Input text="Конверт №3 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" value={convert}/>
            <Input text="Конверт №4 (руб.)" classInput="accumulation" classInputPContent="accumulation-p" value={convert}/>
        </div>
    )
}