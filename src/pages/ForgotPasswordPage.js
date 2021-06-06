import React from "react";

import Input from "../components/Input/Input.js";
import Button from "../components/Button/Button.js";
import "./ForgotPasswordPage.css";

export default function ForgotPasswordPade () {

    let handleSubmit = (event) => {
        alert("Вспомни пожалуйста пароль. Мы ничего не записали :):):):')")
    }


    return (
        <div className="forgotpass-wrapper">
        <div className="div-forgot">
            <div className="div-forgot-content">
                <h2 className="h2-forgot">Восстановление пароля</h2>
                <form onSubmit={(event) => { handleSubmit(event) }}>
                <Input text="email" content="Введите адрес электронной почты, на которую необходимо отправить код для сброса пароля" classInputPContent="p-register"/>
                <Button text="Отправить код" classbutton="button-forgot" />
                 </form>
            </div>
        </div>
        </div>
    )
}