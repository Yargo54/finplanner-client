import React, { useState } from "react";

import "./LogPage.css";
import Input from "../components/Input/Input.js";
import Button from "../components/Button/Button.js";
import { useHistory } from 'react-router-dom'

export default function LogPage() {
    let myHistory = useHistory();
    const [inputValue, setinputValue] = useState('');
    let data;
   
    let handleSubmit = (event) => {
        event.preventDefault();
        data = new FormData(event.target);
        let loginAndPassword = {

            login: data.get('login'),
            password: data.get('password')
        }
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(loginAndPassword)
        })
            .then((res) => res.json())
            .then((newToken) => {
                console.log(newToken);
                myHistory.push("/choise");
            })
            .catch((error) => {
                alert("Неправильный логин или пароль!", error);
                history.go(0);  //TODO: should refactor this 
            })
    }

    return (
        <div className="div-log">
            <div className="div-log-content">
                <h2 className="h2-login">Авторизируйтесь для входа</h2>
                <form onSubmit={(event) => {handleSubmit(event)}}>
                    <Input name="login" text="Ваш логин*" inputValue={data} />
                    <Input inputValue={''} name="password" text="Пароль*" classInputPContent="p-log" content='Я забыл пароль'/>
                    <Button type="submit" text="Войти" classbutton="button-log" />
                </form>
            </div>
        </div>
    )
}