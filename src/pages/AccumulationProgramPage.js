import React, { useEffect, useState } from "react";

import "./AccumulationProgramPage.css";
import Header from  "../components/Headers/Header.js";
import AddAmount from "../components/AddAmount/AddAmount";
import FourConvertInput from "../components/FourConvertInput/FourConvertInput.js";
import SixJug from "../components/SixJug/SixJug.js";
import SafeInput from "../components/SafeInput/SafeInput.js";
import Input from "../components/Input/Input.js"
import Nullschema from '../components/Nullschema'
import Latteschema from "../components/Latteschema";
import Partsschema from "../components/Partsschema";

export default function AccumulationProgramPage ( { name } ) {

    let [ convert, setConvert ] = useState('');
    let [ jug, setJug] = useState('');
    let [ safe, setSafe] = useState('');
    let [ zeroing, setZeroing] = useState('');
    let [ latte, setLatte] = useState('');
    let [ popular, setPopular] = useState('');
    
    useEffect(() => {
        fetch("http://localhost:3000/accumulation")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            data.forEach((element) => {
                if(element.name === "Четыре конверта"){
                    // console.log(element);
                    setConvert(element.long);
                } else if(element.name === "Шесть кувшинов"){
                    setJug(element.long);
                } else if(element.name === "Сейф"){
                    setSafe(element.long);
                } else if(element.name === "Обнуление"){
                    setZeroing(element.long);
                } else if(element.name === "Эффект латте"){
                    setLatte(element.long);
                } else if(element.name === "50/30/20"){
                    setPopular(element.long);
                }
            })
        })
    }, [])

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

    if(name === 'Четыре конверта'){
        return (
            <div className="main-div">
                <Header 
                photo="https://downloader.disk.yandex.ru/preview/549c9786838b57cbbf7949c028103381c8fb844c9645d7d9a6f9d3286021a18c/60b7c75d/xI1G06dIuz2ge9mxgbUlh2WxG2mDSZRL_AAA5K3vxZj_38n-P_GKAwRaOkgTHh8maOPc0atW4rz-wJcJunTZ-Q%3D%3D?uid=0&filename=%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942"
                heading="Метод 'Четыре конверта'" 
                info={convert}/>
                <FourConvertInput />
            </div>
        )
    } else if(name === 'Шесть кувшинов'){
        return (
            <div className="main-div">
                <Header 
                photo="./image/Шесть_кувшинов.png"
                heading="Метод 'Шесть кувшинов'" 
                info={jug}/>
                <SixJug />
            </div>
        )
    } else if(name === 'Сейф'){
        return (
            <div className="main-div">
                <Header 
                photo="./image/Сейф.png"
                heading="Метод 'Сейф'" 
                info={safe}/>
                <SafeInput />
            </div>
        )
    } else if(name === 'Обнуление'){
        return (
            <div className="main-div">
                <Header 
                photo="./image/Обнуление.png"
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
                photo="./image/Латте.png"
                heading="Метод 'Эффект Латте'" 
                info={latte}/>
                <Latteschema />
                {/* <AddAmount amount="добавить сэкономленную сумму..."/>
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"/> */}
            </div>
        )
    } else if(name === '50/30/20'){
        return (
            <div className="main-div">
                <Header
                photo="./image/50_30_20.png" 
                heading="Метод '50/30/20'" 
                info={popular}/>
                <Partsschema />
                {/* <AddAmount amount="добавить денежное поступление..."/>
                <Input text="На обязательные траты" classInput="accumulation" classInputPContent="accumulation-p" content={mandatorySpending}/>
                <Input text="Расходы на жизнь" classInput="accumulation" classInputPContent="accumulation-p" content={popularOptionalSpending}/>
                <Input text="Сбережения" classInput="accumulation" classInputPContent="accumulation-p"/> */}
            </div>
        )
    }
}