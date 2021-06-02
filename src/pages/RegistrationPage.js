import React from "react";

import Input from "../components/Input/Input.js";

export default function RegistrationPage () {
    return ( 
        <>
            <Input text="Ваше имя*"/>
            <Input text="Логин*" />
            <Input text="Пароль*"/>
            <p>Пароль должен состоять минимум из 10 символов и содержать хотя бы одну цифру, одну заглавную букву и один знак препинания</p>
        </>
    )
}