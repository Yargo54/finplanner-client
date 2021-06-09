import React, { useState } from "react";
import { Row, Col, Divider } from 'antd';

import AddAmount from "../AddAmount/AddAmount.js";
import Input from "../Input/Input.js"
import СhartForSixJag from "../СhartForSixJag"
export default function SixJug() {

    let [mandatorySpendin, setMandatorySpendin] = useState('');//обязательные траты
    let [saving, setSaving] = useState('');//сбережения
    let [optionalSpending, setOptionalSpending] = useState('');//дорогие траты
    let [selfDevelopment, setSelfDevelopment] = useState('');//саморазвитие
    let [spender, setSpender] = useState('');//транжир
    let [presents, setPresents] = useState('');//подарки


    let [newMandatorySpendin, setNewMandatorySpendin] = useState('');//финансовые цели
    let [newSaving, setNewSaving] = useState('');//на обязательные траты
    let [newOptionalSpending, setNewOptionalSpending] = useState('');//запись суммы в конверт
    let [newSelfDevelopment, setNewSelfDevelopment] = useState('');//финансовые цели
    let [newSpender, setNewSpender] = useState('');//на обязательные траты
    let [newPresents, setNewPresents] = useState('');//запись суммы в конверт



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
        setTimeout(() => {
        setMandatorySpendin(event.target.value * 0.5);
        setSaving(event.target.value * 0.1);
        setOptionalSpending(event.target.value * 0.1);
        setSelfDevelopment(event.target.value * 0.1);
        setSpender(event.target.value * 0.1);
        setPresents(event.target.value * 0.05);


        }, 400);   

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
                setMandatorySpendin('')
                setSaving('')
                setOptionalSpending('')
                setSelfDevelopment('')
                setSpender('')
                setPresents('')

                setNewMandatorySpendin(newValue.main)
                setNewSaving(newValue.accumulation)
                setNewOptionalSpending(newValue.expensive_purchases)
                setNewSelfDevelopment(newValue.self_development_and_hobbies)
                setNewSpender(newValue.squander)
                setNewPresents(newValue.presents)


            });
    }


return (

    <div>
        <AddAmount amount="добавить денежное поступление..." type="six" inputSave={inputSave} addAmount={addAmount} />
        <Row>
            <Col flex="1 1 200px">
            <div>
            <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending} inputValue={mandatorySpendin} />
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" inputValue={saving} content={"mandatorySpending"} />
            <Input text="Дорогие, но не обязательные покупки" classInput="accumulation" classInputPContent="accumulation-p" content={popularOptionalSpending} inputValue={optionalSpending} />
            <Input text="Обучение, саморазвитие, хобби" classInput="accumulation" classInputPContent="accumulation-p" inputValue={selfDevelopment} content={"mandatorySpending"} />
            <Input text="Транжирство" classInput="accumulation" classInputPContent="accumulation-p" inputValue={spender} content={"mandatorySpending"}/>
            <Input text="Подарки и благотворительность" classInput="accumulation" classInputPContent="accumulation-p" inputValue={presents} content={"mandatorySpending"} />
        </div>
            </Col>
            <Col flex="0 1 300px">
            <div>
            <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending} inputValue={newMandatorySpendin} />
            <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" inputValue={newSaving} content={"mandatorySpending"} />
            <Input text="Дорогие, но не обязательные покупки" classInput="accumulation" classInputPContent="accumulation-p" content={popularOptionalSpending} inputValue={newOptionalSpending} />
            <Input text="Обучение, саморазвитие, хобби" classInput="accumulation" classInputPContent="accumulation-p" inputValue={newSelfDevelopment} content={"mandatorySpending"} />
            <Input text="Транжирство" classInput="accumulation" classInputPContent="accumulation-p" inputValue={newSpender} content={"mandatorySpending"}/>
            <Input text="Подарки и благотворительность" classInput="accumulation" classInputPContent="accumulation-p" inputValue={newPresents} content={"mandatorySpending"} />
        </div>
       </Col>
        </Row>
        <СhartForSixJag mandatorySpendin={newMandatorySpendin} saving={newSaving} optionalSpending={newOptionalSpending} selfDevelopment={newSelfDevelopment} spender={newSpender} presents={newPresents} content={"mandatorySpending"} />
    </div>
)
}

