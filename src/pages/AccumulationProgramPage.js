import React, { useEffect, useState } from "react";

import "./AccumulationProgramPage.css";
import Header from  "../components/Headers/Header.js";
import AddAmount from "../components/AddAmount/AddAmount";
import Input from "../components/Input/Input.js"
import Nullschema from '../components/nullSchema'

export default function AccumulationProgramPage ( { name } ) {

    let dataAccumulation;

    let [ convert, setConvert ] = useState('');
    let [ jug, setJug] = useState('');
    let [ safe, setSafe] = useState('');
    let [ zeroing, setZeroing] = useState('');
    let [ latte, setLatte] = useState('');
    let [ popular, setPopular] = useState('');
    
    // useEffect(() => {
    //     fetch("http://localhost:3000/accumulationnew")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         dataAccumulation = [...data];
    //         dataAccumulation.forEach((element) => {
    //             if(element.name === "Четыре конверта"){
    //                 console.log(element);
    //                 setConvert(element.long);
    //             } else if(element.name === "Шесть кувшинов"){
    //                 setJug(element.long);
    //             } else if(element.name === "Сейф"){
    //                 setSafe(element.long);
    //             } else if(element.name === "Обнуление"){
    //                 setZeroing(element.long);
    //             } else if(element.name === "Эффект латте"){
    //                 setLatte(element.long);
    //             } else if(element.name === "50/30/20"){
    //                 setPopular(element.long);
    //             }
    //         })
    //     })
    // }, [])

    

    let foundation = 
    <ul className="ul-foundation">
        <li>долгосрочный вклад</li>
        <li>дорогая покупка</li>
        <li>'подушка безопасности'</li>
    </ul>

        let mandatorySpending = 
    <ul className="ul-mandatory_spending">
        <li>платежи по кредитам</li>
        <li>коммунальные услуги</li>
        <li>оплата детского сада</li>
        <li>машина, бензин</li>
        <li>питание</li>
    </ul>

    // return (
    //     <div className="accumulation__wrapper">
    //     <div className="main-div">
    //         <Header 
    //         // photo="https://downloader.disk.yandex.ru/preview/549c9786838b57cbbf7949c028103381c8fb844c9645d7d9a6f9d3286021a18c/60b7c75d/xI1G06dIuz2ge9mxgbUlh2WxG2mDSZRL_AAA5K3vxZj_38n-P_GKAwRaOkgTHh8maOPc0atW4rz-wJcJunTZ-Q%3D%3D?uid=0&filename=%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
    //         heading="Метод 'Четыре конверта'" 
    //                 info="Заглушка" />
    //             <div className="input__wrapper">
    //         <AddAmount />
    //         <Input text="На финансовые цели" classInput="accumulation" classInputPContent="accumulation-p" content={foundation}/>
    //         <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending}/>
    //         <Input text="Конверт №1" classInput="accumulation" classInputPContent="accumulation-p"/>
    //         <Input text="Конверт №2" classInput="accumulation" classInputPContent="accumulation-p"/>
    //         <Input text="Конверт №3" classInput="accumulation" classInputPContent="accumulation-p"/>
    //         <Input text="Конверт №4" classInput="accumulation" classInputPContent="accumulation-p"/>
    //             </div>
    //         </div>
    //     </div>
    // )

    let optionalSpending = 
    <ul className="ul-optionalSpending">
        <li>новый телевизор</li>
        <li>планшет</li>
        <li>шуба</li>
    </ul>

    let popularOptionalSpending = 
    <ul className="ul-popularOptionalSpending">
        <li>посещение кафе и ресторанов</li>
        <li>покупка планшета, шубы</li>
        <li>оплата активностей (тренажёрка, фитнес)</li>
        <li>услуги парикмахера</li>
    </ul>

    let [amounting, setAmounting] = useState('');
    let [countConvert, setCountConvert] = useState('');
    let [countOsnova, setCountOsnova] = useState('');
    let [countCel, setCountCel] = useState('');
    
    function inputSave(event) {
        setAmounting(event.target.value)        
    }

    function addAmountFour() {
        setCountOsnova((amounting * 0.5).toFixed(0) + " руб.");
        setCountCel((amounting * 0.15).toFixed(0) + " руб.")
        setCountConvert((((amounting - (amounting * 0.5 + amounting * 0.15))/4)*0.25).toFixed(0) + " руб");
    }

    function addAmountSix() {
        setCountOsnova((amounting * 0.5).toFixed(0) + " руб.");
        setCountCel((amounting * 0.15).toFixed(0) + " руб.")
        setCountConvert((((amounting - (amounting * 0.5 + amounting * 0.15))/4)*0.25).toFixed(0) + " руб");
    }

    

    if(name === 'Четыре конверта'){
        return (
            <div className="main-div">
                <Header 
                photo="https://downloader.disk.yandex.ru/preview/549c9786838b57cbbf7949c028103381c8fb844c9645d7d9a6f9d3286021a18c/60b7c75d/xI1G06dIuz2ge9mxgbUlh2WxG2mDSZRL_AAA5K3vxZj_38n-P_GKAwRaOkgTHh8maOPc0atW4rz-wJcJunTZ-Q%3D%3D?uid=0&filename=%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
                heading="Метод 'Четыре конверта'" 
                info={convert}/>
                <AddAmount amount="добавить денежное поступление..." inputSave={inputSave} addAmountFour={addAmountFour} type="four"/>
                <Input text="На финансовые цели" classInput="accumulation" classInputPContent="accumulation-p" content={foundation} countCel={countCel}/>
                <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending} countOsnova={countOsnova} osnova="yes"/>
                <Input text="Конверт №1" classInput="accumulation" classInputPContent="accumulation-p" countConvert={countConvert}/>
                <Input text="Конверт №2" classInput="accumulation" classInputPContent="accumulation-p" countConvert={countConvert}/>
                <Input text="Конверт №3" classInput="accumulation" classInputPContent="accumulation-p" countConvert={countConvert}/>
                <Input text="Конверт №4" classInput="accumulation" classInputPContent="accumulation-p" countConvert={countConvert}/>
            </div>
        )
    } else if(name === 'Шесть кувшинов'){
        return (
            <div className="main-div">
                <Header 
                photo="https://downloader.disk.yandex.ru/preview/9e41c08d6c8b24817e5bcc30c02ce0c6d76a1064ee1853e6cdbd75320f058a3c/60b8f5b1/AsAOmGz__R_qDit6VpGb_kd7sZIlvo6dkPeuDONshee0OkQ8z5uOIZYdCaVc4g2_4wiLn6kyFG3J9E3yqAWJBw%3D%3D?uid=0&filename=%D0%A8%D0%B5%D1%81%D1%82%D1%8C%20%D0%BA%D1%83%D0%B2%D1%88%D0%B8%D0%BD%D0%BE%D0%B2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
                heading="Метод 'Шесть кувшинов'" 
                info={jug}/>
                <AddAmount amount="добавить денежное поступление..." inputSave={inputSave} addAmountFour={addAmountSix} type="six"/>
                <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending}/>
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"/>
                <Input text="Дорогие, но не обязательные покупки" classInput="accumulation" classInputPContent="accumulation-p" content={optionalSpending}/>
                <Input text="Обучение, саморазвитие, хобби" classInput="accumulation" classInputPContent="accumulation-p"/>
                <Input text="Транжирство" classInput="accumulation" classInputPContent="accumulation-p"/>
                <Input text="Подарки и благотворительность" classInput="accumulation" classInputPContent="accumulation-p"/>
            </div>
        )
    } else if(name === 'Сейф'){
        return (
            <div className="main-div">
                <Header 
                photo="https://downloader.disk.yandex.ru/preview/22e972a86f68cfbe7c8765e0ab327d1d46c99fc4b65435fd5dee7ddb7db2c00a/60b8f973/2oHRbJLOW-dSQSCFEhw95Ed7sZIlvo6dkPeuDONshefpqM94JMUpPxsOHFawHNDrAmQdYueyQgmMJgEZobj38Q%3D%3D?uid=0&filename=%D0%A1%D0%B5%D0%B9%D1%84.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
                heading="Метод 'Сейф'" 
                info={safe}/>
                <AddAmount amount="добавить денежное поступление..."/>
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"/>
            </div>
        )
    } else if(name === 'Обнуление'){
        return (
            <div className="main-div">
                <Header 
                photo="https://downloader.disk.yandex.ru/preview/3db01e7ebb967737783f55ed18792f76315173bef9af2de970f08bb6febeeadb/60b8fac3/vNEp-TMQrOX7zzM7JLf1bCNsj3jxrBpg0s9DRSNJ0P716z1lRPzJvB2EIDqnZpWaL7Z_0TqYMWVAu-9cKlwwRQ%3D%3D?uid=0&filename=%D0%9E%D0%B1%D0%BD%D1%83%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
                heading="Метод 'Обнуление'" 
                info={zeroing}/>
                <Nullschema  />
                {/* <AddAmount amount="добавить сэкономленную сумму..."/>
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"/> */}
            </div>
        )
    } else if(name === 'Эффект латте'){
        return (
            <div className="main-div">
                <Header 
                photo="https://downloader.disk.yandex.ru/preview/7a3be58237fe0a001e1803ea0101bac8d465c569f531229755cab833ea4f79f4/60b8fc19/E0JvdB7DX_FPyJRussHBvSNsj3jxrBpg0s9DRSNJ0P5r9cMkS_R1_e59f3ILxiXN4xCP3WYTtA7W3TbLeu63Lg%3D%3D?uid=0&filename=%D0%9B%D0%B0%D1%82%D1%82%D0%B5.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
                heading="Метод 'Эффект Латте'" 
                info={latte}/>
                <AddAmount amount="добавить сэкономленную сумму..."/>
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"/>
            </div>
        )
    } else if(name === '50/30/20'){
        return (
            <div className="main-div">
                <Header 
                photo="https://downloader.disk.yandex.ru/preview/5d2c49cbd37c4e23737f0c3d47705f1f6ca78ecfed94cf34377c44bf919c5820/60b8fcb3/K_KXZdLFRJE0IlV8urkdMyNsj3jxrBpg0s9DRSNJ0P7DdgGhMUgNzX6x_to9q5DUPLtBPPnNWnQH_7aVIDQdbQ%3D%3D?uid=0&filename=50_30_20.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
                heading="Метод '50/30/20'" 
                info={popular}/>
                <AddAmount amount="добавить денежное поступление..."/>
                <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending}/>
                <Input text="Расходы на жизнь" classInput="accumulation" classInputPContent="accumulation-p" content={popularOptionalSpending}/>
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"/>
            </div>
        )
    }
}