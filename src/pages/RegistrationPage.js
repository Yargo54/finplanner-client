import React from "react";

import Input from "../components/Input/Input.js";
import Button from "../components/Button/Button.js";
import "./RegistrationPage.css"

export default function RegistrationPage () {
    return ( 
        <div className="div-registration">
            <div className="content-registration">
                <h2 className="h2-registration">Пожалуйста, зарегестрируйтесь</h2>
                <Input text="Ваше имя*"/>
                <Input text="Логин*" />
                <Input text="Пароль*" content="Пароль должен состоять минимум из 10 символов и содержать хотя бы одну цифру, одну заглавную букву и один знак препинания" classInputPContent="p-register"/>
                <div className='div-consent'>
                    <p className="p-consent">Я даю согласие на обработку своих персональных данных*</p>
                    <input type="checkbox" className="input-checkbox"/>
                </div>
                <Button text="Зарегестрироваться" classbutton="button-register"/>
            </div>
        </div>
    )
}