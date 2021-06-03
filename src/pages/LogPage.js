import React from "react";

import "./LogPage.css";
import Input from "../components/Input/Input.js";
import Button from "../components/Button/Button.js";

export default function LogPage() {
    return (
        <div className="div-log">
            <div className="div-log-content">
                <h2 className="h2-login">Авторизируйтесь для входа</h2>
                <Input text="Ваш логин*"/>
                <Input text="Пароль*" content="Я забыл пароль" classInputPContent="p-log" />
                <Button text="Войти" classbutton="button-log"/> 
            </div>
        </div>
    )
}