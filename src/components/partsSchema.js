import React, { useState } from "react";

import СhartForPartsschema from "./СhartForPartsschema"
import AddAmount from "./AddAmount/AddAmount";
import Input from "./Input/Input"
import { Row, Col, Divider } from 'antd';

export default function Partsschema() {
    let inputValue;
    const [basicValue, setbasicValue] = useState();
    const [desiredValue, setdesiredValue] = useState();
    const [accumulationValue, setaccumulationValue] = useState();
    
    const [newValueBasic, setnewValueBasic]= useState();;
    const [newValueDesired, setnewValueDesired]= useState();;
    const [newValueAccumulation, setnewValueAccumulation]= useState();;


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
        setTimeout(() => {
            setbasicValue((inputValue * 0.5).toFixed(2));
            setdesiredValue((inputValue * 0.3).toFixed(2));
            setaccumulationValue((inputValue * 0.2).toFixed(2))
        }, 400
        );
        // inputValue = "";
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
                setbasicValue((''));
                setdesiredValue((""))
                setaccumulationValue((""))
                inputValue = 0;
                setnewValueBasic(newValue.basic);
                setnewValueDesired(newValue.desired);
                setnewValueAccumulation(newValue.accumulation);
            });
    }


    return (

        <div>
            <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} newValue ={inputValue} addAmount={addAmount} />
            <Row>
                <Col flex="1 1 200px">
                    <div>
                        <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" inputValue={basicValue} content={mandatorySpending} />
                        <Input text="Расходы на жизнь" classInput="accumulation" classInputPContent="accumulation-p" inputValue={desiredValue} content={popularOptionalSpending} />
                        <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" inputValue={accumulationValue} content={savings} />
                    </div>
                </Col>
                <Col flex="0 1 300px">
                <div>
                        <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" inputValue={newValueBasic} content={mandatorySpending} />
                        <Input text="Расходы на жизнь" classInput="accumulation" classInputPContent="accumulation-p" inputValue={newValueDesired} content={popularOptionalSpending} />
                        <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" inputValue={newValueAccumulation} content={savings} />
                </div>
           </Col>
            </Row>
            <СhartForPartsschema basicValue={newValueBasic} desiredValue={newValueDesired} accumulationValue={newValueAccumulation} />
            {/* <div>
                <AddAmount amount="добавить сэкономленную сумму..." inputSave={inputSave} addAmount={addAmount} />
                <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" inputValue={basicValue} content={mandatorySpending} />
                <Input text="Расходы на жизнь" classInput="accumulation" classInputPContent="accumulation-p" inputValue={desiredValue} content={popularOptionalSpending} />
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p" inputValue={accumulationValue} content={savings} />
                <СhartForPartsschema basicValue={basicValue} desiredValue={desiredValue} accumulationValue={accumulationValue} />

            </div> */}

        </div>
    )

}
