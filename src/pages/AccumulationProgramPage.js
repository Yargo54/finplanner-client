import React from "react";

import "./AccumulationProgramPage.css";
import Header from  "../components/Headers/Header.js";
import AddAmount from "../components/AddAmount/AddAmount";
import Input from "../components/Input/Input.js"

export default function AccumulationProgramPage () {

    let foundation = 
    <ul className="ul-foundation">
        <li>долгосрочный вклад</li>
        <li>дорогая покупка</li>
        <li>'подушка безопасности'</li>
    </ul>

    let mandatory_spending = 
    <ul className="ul-mandatory_spending">
        <li>платежи по кредитам</li>
        <li>коммунальные услуги</li>
        <li>оплата детского сада</li>
        <li>машина, бензин</li>
    </ul>

    return (
        <div className="accumulation__wrapper">
        <div className="main-div">
            <Header 
            // photo="https://downloader.disk.yandex.ru/preview/549c9786838b57cbbf7949c028103381c8fb844c9645d7d9a6f9d3286021a18c/60b7c75d/xI1G06dIuz2ge9mxgbUlh2WxG2mDSZRL_AAA5K3vxZj_38n-P_GKAwRaOkgTHh8maOPc0atW4rz-wJcJunTZ-Q%3D%3D?uid=0&filename=%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
            heading="Метод 'Четыре конверта'" 
                    info="Заглушка" />
                <div className="input__wrapper">
            <AddAmount />
            <Input text="На финансовые цели" classInput="accumulation" classInputPContent="accumulation-p" content={foundation}/>
            <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatory_spending}/>
            <Input text="Конверт №1" classInput="accumulation" classInputPContent="accumulation-p"/>
            <Input text="Конверт №2" classInput="accumulation" classInputPContent="accumulation-p"/>
            <Input text="Конверт №3" classInput="accumulation" classInputPContent="accumulation-p"/>
            <Input text="Конверт №4" classInput="accumulation" classInputPContent="accumulation-p"/>
                </div>
            </div>
        </div>
    )
}